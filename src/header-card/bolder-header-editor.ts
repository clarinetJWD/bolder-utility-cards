import { LitElement, html, nothing } from 'lit'
import {
  type HomeAssistant,
  type LovelaceCardConfig,
  type LovelaceCardEditor
} from 'custom-card-helpers'
import localize from '../localize/localize'
import { customElement, property, state } from 'lit/decorators.js'
import type { BolderHeaderCardConfig } from './bolder-header-types'
import type { Template } from '../types'
import memoizeOne from 'memoize-one'
// import styles from './editor.css'

function computeLabel (schema): string {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return localize('editor.' + schema.name, schema.locale)
}

@customElement('bolder-header-card-editor')
export class BolderHeaderCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant

  @state() private config!: Partial<BolderHeaderCardConfig>

  static readonly _schema = memoizeOne(
    (thisLocale: string) =>
      [
        { name: 'title', locale: thisLocale, selector: { text: {} } },
        { name: 'subtitle', locale: thisLocale, selector: { text: {} } },
        { name: 'icon', locale: thisLocale, selector: { icon: {} } },
        { name: 'icon_color', locale: thisLocale, selector: { ui_color: {} } }
      ] as const
  )

  setConfig (config: LovelaceCardConfig & BolderHeaderCardConfig): void {
    this.config = config
  }

  protected getLocale (): string {
    return this.config.locale ?? this.hass.locale.language ?? 'en-GB'
  }

  protected render (): Template {
    if (!this.hass) {
      return nothing
    }

    const schema = [{
      name: 'header',
      type: 'expandable' as const,
      flatten: true,
      expanded: true,
      locale: this.getLocale(),
      schema: BolderHeaderCardEditor._schema(this.getLocale())
    }] as const

    return html`
      <ha-form
      .hass=${this.hass}
      .data=${this.config}
      .schema=${schema}
      .computeLabel=${(schema) => computeLabel(schema)}
      @value-changed=${(event) => { this.valueChanged(event) }}
      ></ha-form>
    `
  }

  private valueChanged (event): void {
    if (!this.config || !this.hass) {
      return
    }

    const _config = Object.assign({}, this.config)
    BolderHeaderCardEditor.getConfigFromValueChangedObject(_config, event.detail.value)

    this.config = _config

    const ev = new CustomEvent('config-changed', {
      detail: { config: _config },
      bubbles: true,
      composed: true
    })
    this.dispatchEvent(ev)
  }

  public static getConfigFromValueChangedObject (configToFill: Partial<BolderHeaderCardConfig>, configFromEvent: any): void {
    configToFill.title = configFromEvent.title
    configToFill.subtitle = configFromEvent.subtitle
    configToFill.icon = configFromEvent.icon
    configToFill.icon_color = configFromEvent.icon_color
    configToFill.styles = configFromEvent.styles
  }

  protected localize (name: string, locale: string): string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return localize('editor.' + name, locale)
  }
}
