import { LitElement, html, nothing } from 'lit'
import {
  type HomeAssistant,
  type LovelaceCardConfig,
  type LovelaceConfig,
  type LovelaceCardEditor,
  fireEvent,
  type HASSDomEvent
} from 'custom-card-helpers'
import localize from '../localize/localize'
import { customElement, property, state, query } from 'lit/decorators.js'
import type { Template, ConfigChangedEvent, GUIModeChangedEvent } from '../types'
import type { BolderContainerCardConfig } from './bolder-container-types'
import {
  mdiCodeBraces,
  mdiContentCopy,
  mdiContentCut,
  mdiDelete,
  mdiListBoxOutline,
  mdiPlus
} from '@mdi/js'
import deepClone from 'deep-clone-simple'
import { keyed } from 'lit/directives/keyed.js'
import '../editor-support/sl-tab-group'
import { BolderHeaderCardEditor } from '../header-card/bolder-header-editor'

@customElement('bolder-container-card-editor')
export class BolderContainerCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant
  @property({ attribute: false }) public lovelace?: LovelaceConfig

  @state() private config!: Partial<BolderContainerCardConfig>
  @state() protected _selectedCard = 0
  @state() protected _GUImode = true
  @state() protected _guiModeAvailable? = true

  @query('hui-card-element-editor')
  protected _cardEditorEl?: any

  protected _keys = new Map<string, string>()
  protected _previousConfigHash?: string

  protected _clipboard?: LovelaceCardConfig

  setConfig (config: LovelaceCardConfig & BolderContainerCardConfig): void {
    // Create a simple hash to detect when we're editing a different card instance
    // Use card count + first few card types + mode as identifier
    const cardTypes = config.cards?.slice(0, 3).map(c => c.type).join(',') ?? ''
    const configHash = `${config.cards?.length ?? 0}-${cardTypes}-${config.mode ?? 'vertical'}`
    const isDifferentCard = this._previousConfigHash !== undefined && this._previousConfigHash !== configHash
    
    this.config = config
    if (this.config.header && config.header) {
      this.config.header.styles = config.header.styles
    }
    
    // Reset state when switching to a different card instance
    if (isDifferentCard) {
      this._selectedCard = 0
      this._keys.clear()
      this._GUImode = true
      this._guiModeAvailable = true
    } else {
      // Even for the same card, ensure selected card is valid
      const cardCount = config.cards?.length ?? 0
      if (this._selectedCard >= cardCount || this._selectedCard < 0) {
        this._selectedCard = 0
        this._keys.clear()
      }
    }
    
    this._previousConfigHash = configHash
  }

  protected formData (): object {
    return this.config
  }

  protected render (): Template {
    if (!this.hass || !this.config) {
      return nothing
    }
    const selected = this._selectedCard
    const numcards = this.config.cards?.length ?? 0

    const isGuiMode = this._GUImode
    const schema = [
      {
        title: this.localize('container_card_settings', this.getLocale()),
        type: 'expandable' as const,
        flatten: false,
        expanded: false,
        locale: this.getLocale(),
        schema: [
          {
            name: 'mode',
            locale: this.getLocale(),
            selector: {
              select: {
                multiple: false,
                options: [
                  { label: this.localize('vertical', this.getLocale()), value: 'vertical' },
                  { label: this.localize('horizontal', this.getLocale()), value: 'horizontal' }
                ]
              }
            }
          },
          { name: 'is_inner_container', locale: this.getLocale(), selector: { boolean: {} } },
          {
            name: 'header',
            type: 'expandable' as const,
            flatten: false,
            expanded: false,
            locale: this.getLocale(),
            schema: BolderHeaderCardEditor._schema(this.getLocale())
          },
          {
            title: this.localize('keep_settings', this.getLocale()),
            type: 'expandable' as const,
            flatten: false,
            expanded: false,
            locale: this.getLocale(),
            schema: [
              { name: 'keep_margin', locale: this.getLocale(), selector: { boolean: {} } },
              { name: 'keep_background', locale: this.getLocale(), selector: { boolean: {} } },
              { name: 'keep_box_shadow', locale: this.getLocale(), selector: { boolean: {} } },
              { name: 'keep_border_radius', locale: this.getLocale(), selector: { boolean: {} } },
              { name: 'keep_outer_padding', locale: this.getLocale(), selector: { boolean: {} } }
            ]
          },
          { name: 'card_background_override', locale: this.getLocale(), selector: { text: {} } }
        ]
      },
      { name: 'inner_cards', locale: this.getLocale(), selector: { constant: { value: this.localize('inner_cards', this.getLocale()) } } }
    ] as const

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${schema}
        .computeLabel=${(schema) => this.computeLabel(schema)}
        @value-changed=${(event) => { this.valueChanged(event) }}
      ></ha-form>
      <div class="card-config">
        <div class="toolbar">
          <sl-tab-group>
            ${this.config.cards?.map(
              (_card, i) =>
                html`<sl-tab 
                  slot="nav" 
                  .panel=${i.toString()} 
                  .active=${i === selected}
                  @click=${(ev: Event) => { this._handleTabClick(i, ev) }}
                >
                  ${i + 1}
                </sl-tab>`
            )}
          </sl-tab-group>
          <ha-icon-button
            @click=${() => { void this._handleAddCard() }}
            .path=${mdiPlus}
          ></ha-icon-button>
        </div>

        <div id="editor">
          ${selected < numcards
            ? html`
                <div id="card-options">
                  <ha-icon-button
                    class="gui-mode-button"
                    @click=${() => { this._toggleMode() }}
                    .disabled=${!this._guiModeAvailable}
                    .label=${this.hass?.localize(
                      isGuiMode
                        ? 'ui.panel.lovelace.editor.edit_card.show_code_editor'
                        : 'ui.panel.lovelace.editor.edit_card.show_visual_editor'
                    )}
                    .path=${isGuiMode ? mdiCodeBraces : mdiListBoxOutline}
                  ></ha-icon-button>

                  <ha-icon-button-arrow-prev
                    .disabled=${selected === 0}
                    .label=${this.hass?.localize(
                      'ui.panel.lovelace.editor.edit_card.move_before'
                    )}
                    @click=${(ev: Event) => { this._handleMove(ev) }}
                    .move=${-1}
                  ></ha-icon-button-arrow-prev>

                  <ha-icon-button-arrow-next
                    .label=${this.hass?.localize(
                      'ui.panel.lovelace.editor.edit_card.move_after'
                    )}
                    .disabled=${selected === numcards - 1}
                    @click=${(ev: Event) => { this._handleMove(ev) }}
                    .move=${1}
                  ></ha-icon-button-arrow-next>

                  <ha-icon-button
                    .label=${this.hass?.localize(
                      'ui.panel.lovelace.editor.edit_card.copy'
                    )}
                    .path=${mdiContentCopy}
                    @click=${() => { this._handleCopyCard() }}
                  ></ha-icon-button>

                  <ha-icon-button
                    .label=${this.hass?.localize(
                      'ui.panel.lovelace.editor.edit_card.cut'
                    )}
                    .path=${mdiContentCut}
                    @click=${() => { this._handleCutCard() }}
                  ></ha-icon-button>

                  <ha-icon-button
                    .label=${this.hass?.localize(
                      'ui.panel.lovelace.editor.edit_card.delete'
                    )}
                    .path=${mdiDelete}
                    @click=${() => { this._handleDeleteCard() }}
                  ></ha-icon-button>
                </div>
                ${keyed(
                  this._getKey(this.config.cards ?? [], selected),
                  html`<hui-card-element-editor
                    .hass=${this.hass}
                    .value=${this.config.cards ? this.config.cards[selected] : []}
                    .lovelace=${this.lovelace}
                    @config-changed=${(ev: HASSDomEvent<ConfigChangedEvent>) => { this._handleConfigChanged(ev) }}
                    @GUImode-changed=${(ev: HASSDomEvent<GUIModeChangedEvent>) => { this._handleGUIModeChanged(ev) }}
                  ></hui-card-element-editor>`
                )}
              `
            : html`
                <hui-card-picker
                  .hass=${this.hass}
                  .lovelace=${this.lovelace}
                  @config-changed=${(ev) => { this._handleCardPicked(ev) }}
                ></hui-card-picker>
              `}
        </div>
      </div>
    `
  }

  protected getLocale (): string {
    return this.config.locale ?? this.hass.locale.language ?? 'en-US'
  }

  protected computeLabel (schema): string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return localize('editor.' + schema.name, schema.locale)
  }

  protected localize (name: string, locale: string): string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return localize('editor.' + name, locale)
  }

  protected _handleTabClick (index: number, ev?: Event): void {
    if (ev) {
      ev.stopPropagation()
    }
    // Prevent unnecessary updates if the selected card hasn't changed
    if (this._selectedCard === index) {
      return
    }
    this._setMode(true)
    this._guiModeAvailable = true
    this._selectedCard = index
  }

  protected _handleSelectedCard (ev): void {
    ev.stopPropagation()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const newSelected = parseInt(ev.detail.name ?? ev.detail.panel ?? ev.detail, 10)
    // Prevent unnecessary updates if the selected card hasn't changed
    if (this._selectedCard === newSelected || isNaN(newSelected)) {
      return
    }
    this._setMode(true)
    this._guiModeAvailable = true
    this._selectedCard = newSelected
  }

  protected _setMode (value: boolean): void {
    this._GUImode = value
    if (this._cardEditorEl) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this._cardEditorEl!.GUImode = value
    }
  }

  protected async _handleAddCard (): Promise<void> {
    this._selectedCard = this.config?.cards?.length ?? 0
    // eslint-disable-next-line @typescript-eslint/func-call-spacing
    await this.updateComplete;
    // eslint-disable-next-line no-unexpected-multiline, @typescript-eslint/no-unnecessary-type-assertion
    (this.renderRoot.querySelector('sl-tab-group') as any)?.syncIndicator()
  }

  protected _toggleMode (): void {
    this._cardEditorEl?.toggleMode()
  }

  protected _handleMove (ev: Event): void {
    if (!this.config) {
      return
    }
    const move = (ev.currentTarget as any).move
    const source = this._selectedCard
    const target: number = source + move
    const cards = [...this.config.cards ?? []]
    const card = cards.splice(this._selectedCard, 1)[0]
    cards.splice(target, 0, card)
    this.config = {
      ...this.config,
      cards
    }
    this._selectedCard = target
    this._keys.clear()
    fireEvent(this, 'config-changed', { config: this.config })
  }

  protected _handleCopyCard (): void {
    if (!this.config) {
      return
    }
    this._clipboard = deepClone(this.config.cards ? this.config.cards[this._selectedCard] : [])
  }

  protected _handleCutCard (): void {
    this._handleCopyCard()
    this._handleDeleteCard()
  }

  protected _handleDeleteCard (): void {
    if (!this.config) {
      return
    }
    const cards = [...this.config.cards ?? []]
    cards.splice(this._selectedCard, 1)
    this.config = { ...this.config, cards }
    this._selectedCard = Math.max(0, this._selectedCard - 1)
    this._keys.clear()
    fireEvent(this, 'config-changed', { config: this.config })
  }

  private _getKey (cards: LovelaceCardConfig[], index: number): string {
    // Include config hash to ensure unique keys for different card instances
    const configHash = this._previousConfigHash ?? 'initial'
    const key = `${configHash}-${cards[index].type}-${index}-${cards.length}`
    if (!this._keys.has(key)) {
      this._keys.set(key, Math.random().toString())
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this._keys.get(key)!
  }

  protected _handleCardPicked (ev): void {
    ev.stopPropagation()
    if (!this.config) {
      return
    }
    const config = ev.detail.config
    const cards = [...this.config.cards ?? [], config]
    this.config = { ...this.config, cards }
    this._keys.clear()
    fireEvent(this, 'config-changed', { config: this.config })
  }

  protected _handleConfigChanged (ev: HASSDomEvent<ConfigChangedEvent>): void {
    ev.stopPropagation()
    if (!this.config) {
      return
    }
    const cards = [...this.config.cards ?? []]
    const newCard = ev.detail.config as LovelaceCardConfig
    cards[this._selectedCard] = newCard
    this.config = { ...this.config, cards }
    this._guiModeAvailable = ev.detail.guiModeAvailable
    fireEvent(this, 'config-changed', { config: this.config })
  }

  protected _handleGUIModeChanged (ev: HASSDomEvent<GUIModeChangedEvent>): void {
    ev.stopPropagation()
    this._GUImode = ev.detail.guiMode
    this._guiModeAvailable = ev.detail.guiModeAvailable
  }

  private valueChanged (event): void {
    if (!this.config || !this.hass) {
      return
    }
    const _config = Object.assign({}, this.config)
    _config.mode = event.detail.value.mode
    _config.keep_background = event.detail.value.keep_background
    _config.keep_border_radius = event.detail.value.keep_border_radius
    _config.keep_box_shadow = event.detail.value.keep_box_shadow
    _config.keep_margin = event.detail.value.keep_margin
    _config.keep_outer_padding = event.detail.value.keep_outer_padding
    _config.card_background_override = event.detail.value.card_background_override
    _config.is_inner_container = event.detail.value.is_inner_container
    _config.cards = event.detail.value.cards
    _config.styles = event.detail.value.styles
    const newHeader = Object.assign({}, this.config.header)
    BolderHeaderCardEditor.getConfigFromValueChangedObject(newHeader, event.detail.value.header)
    _config.header = newHeader

    this.config = _config

    const ev = new CustomEvent('config-changed', {
      detail: { config: _config },
      bubbles: true,
      composed: true
    })
    this.dispatchEvent(ev)
  }
}
