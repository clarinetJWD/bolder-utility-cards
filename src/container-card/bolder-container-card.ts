import { LitElement, type TemplateResult, html, type PropertyValues, css, type CSSResultGroup, unsafeCSS, type CSSResult, type HTMLTemplateResult } from 'lit'
import { customElement, property } from 'lit-element'
/* import { ifDefined } from 'lit-html/directives/if-defined' */
import { type HomeAssistant, type LovelaceCardConfig, createThing, type LovelaceCard, type LovelaceCardEditor } from 'custom-card-helpers'
import type { BolderContainerCardConfig, MergedBolderContainerCardConfig } from './bolder-container-types'
import type { StyleItem } from '../types'
import { BolderHeaderCard } from '../header-card/bolder-header-card'
import { GetCss } from './bolder-container-styles'
import localize from '../localize/localize'
import * as pjson from '../../package.json'
import { classMap } from 'lit/directives/class-map'

console.info(
  `%c BOLDER-CONTAINER-CARD \n%c   Version ${pjson.version}   `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray'
);

// This puts your card into the UI card picker dialog
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'bolder-container-card',
  name: 'Bolder Container Card',
  description: 'A container card like Stack In Card that allows for more customization and theming.'
});
(window as any).customCards.push({
  type: 'extended-tile-card',
  name: 'Extended Tile Card',
  description: 'A container card like Stack In Card that allows for more customization and theming.'
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HELPERS = (window as any).loadCardHelpers ? (window as any).loadCardHelpers() : undefined

const HuiTileCard = customElements.get('hui-tile-card') as typeof LitElement
@customElement('extended-tile-card')
export class ExtendedTileCard extends HuiTileCard {
  /* public static getStubConfig (
    hass: HomeAssistant,
    entities: string[],
    entitiesFallback: string[]
  ): TileCardConfig {
    let newConfig = (HuiTileCard.prototype as unknown).getStubConfig(hass, entities, entitiesFallback)
    newConfig.type = 'custom:extended-tile-card'
    const includeDomains = ["sensor", "light", "switch"];
    const maxEntities = 1;
    const foundEntities = findEntities(
      hass,
      maxEntities,
      entities,
      entitiesFallback,
      includeDomains
    );

    return {
      type: "tile",
      entity: foundEntities[0] || "",
    };
  } */
  protected render (): any {
    const returnValue: HTMLTemplateResult = super.render() as HTMLTemplateResult
    /* returnValue.strings[24] = '"></ha-tile-info> </div> ' */

    return html`${returnValue}<style>/*#info { display: none; }*/ .content { flex: none !important; } .container.horizontal hui-card-features { flex: 1 !important; width: unset !important; } .primary { font-size: 100pt !important;}</style>`
  }

  static styles = css`
    :host {
      --tile-color: var(--state-inactive-color);
      -webkit-tap-highlight-color: transparent;
    }
    ha-card:has(.background:focus-visible) {
      --shadow-default: var(--ha-card-box-shadow, 0 0 0 0 transparent);
      --shadow-focus: 0 0 0 1px var(--tile-color);
      border-color: var(--tile-color);
      box-shadow: var(--shadow-default), var(--shadow-focus);
    }
    ha-card {
      --ha-ripple-color: var(--tile-color);
      --ha-ripple-hover-opacity: 0.04;
      --ha-ripple-pressed-opacity: 0.12;
      height: 100%;
      transition:
        box-shadow 180ms ease-in-out,
        border-color 180ms ease-in-out;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    ha-card.active {
      --tile-color: var(--state-icon-color);
    }
    [role="button"] {
      cursor: pointer;
      pointer-events: auto;
    }
    [role="button"]:focus {
      outline: none;
    }
    .background {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: var(--ha-card-border-radius, 12px);
      margin: calc(-1 * var(--ha-card-border-width, 1px));
      overflow: hidden;
    }
    .container {
      margin: calc(-1 * var(--ha-card-border-width, 1px));
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .container.horizontal {
      flex-direction: row;
    }

    .content {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px;
      flex: 1;
      min-width: 0;
      box-sizing: border-box;
      pointer-events: none;
      gap: 10px;
    }

    .vertical {
      flex-direction: column;
      text-align: center;
      justify-content: center;
    }
    .vertical ha-tile-info {
      width: 100%;
      flex: none;
    }
    ha-tile-icon {
      --tile-icon-color: var(--tile-color);
      position: relative;
      padding: 6px;
      margin: -6px;
    }
    ha-tile-badge {
      position: absolute;
      top: 3px;
      right: 3px;
      inset-inline-end: 3px;
      inset-inline-start: initial;
    }
    ha-tile-info {
      position: relative;
      min-width: 0;
      transition: background-color 180ms ease-in-out;
      box-sizing: border-box;
    }
    hui-card-features {
      --feature-color: var(--tile-color);
      padding: 0 12px 12px 12px;
    }
    .container.horizontal hui-card-features {
      width: calc(50% - var(--column-gap, 0px) / 2 - 12px);
      flex: none;
      --feature-height: 36px;
      padding: 0 12px;
      padding-inline-start: 0;
    }

    ha-tile-icon[data-domain="alarm_control_panel"][data-state="pending"],
    ha-tile-icon[data-domain="alarm_control_panel"][data-state="arming"],
    ha-tile-icon[data-domain="alarm_control_panel"][data-state="triggered"],
    ha-tile-icon[data-domain="lock"][data-state="jammed"] {
      animation: pulse 1s infinite;
    }

    ha-tile-badge.not-found {
      --tile-badge-background-color: var(--red-color);
    }

    @keyframes pulse {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `

  /* protected render (): any {
    if (!this._config || !this.hass) {
      return nothing
    }
    const entityId = this._config.entity
    const stateObj = entityId ? this.hass.states[entityId] : undefined

    const contentClasses = { vertical: Boolean(this._config.vertical) }

    if (!stateObj) {
      return html`
        <ha-card>
          <div class="content ${classMap(contentClasses)}">
            <ha-tile-icon>
              <ha-svg-icon slot="icon" .path=${mdiHelp}></ha-svg-icon>
              <ha-tile-badge class="not-found">
                <ha-svg-icon .path=${mdiExclamationThick}></ha-svg-icon>
              </ha-tile-badge>
            </ha-tile-icon>
            <ha-tile-info
              .primary=${entityId}
              secondary=${this.hass.localize('ui.card.tile.not_found')}
            ></ha-tile-info>
          </div>
        </ha-card>
      `
    }

    const name = this._config.name || computeStateName(stateObj);
    const active = stateActive(stateObj);
    const color = this._computeStateColor(stateObj, this._config.color);
    const domain = computeDomain(stateObj.entity_id);

    const stateDisplay = this._config.hide_state
      ? nothing
      : html`
          <state-display
            .stateObj=${stateObj}
            .hass=${this.hass}
            .content=${this._config.state_content}
            .name=${this._config.name}
          >
          </state-display>
        `;

    const style = {
      "--tile-color": color,
    };

    const imageUrl = this._config.show_entity_picture
      ? this._getImageUrl(stateObj)
      : undefined;

    const featurePosition = this._featurePosition(this._config);
    const features = this._displayedFeatures(this._config);

    const containerOrientationClass =
      featurePosition === "inline" ? "horizontal" : "";

    return html`
      <ha-card style=${styleMap(style)} class=${classMap({ active })}>
        <div
          class="background"
          @action=${this._handleAction}
          .actionHandler=${actionHandler({
            hasHold: hasAction(this._config!.hold_action),
            hasDoubleClick: hasAction(this._config!.double_tap_action),
          })}
          role=${ifDefined(this._hasCardAction ? "button" : undefined)}
          tabindex=${ifDefined(this._hasCardAction ? "0" : undefined)}
          aria-labelledby="info"
        >
          <ha-ripple .disabled=${!this._hasCardAction}></ha-ripple>
        </div>
        <div class="container ${containerOrientationClass}">
          <div class="content ${classMap(contentClasses)}">
            <ha-tile-icon
              role=${ifDefined(this._hasIconAction ? "button" : undefined)}
              tabindex=${ifDefined(this._hasIconAction ? "0" : undefined)}
              @action=${this._handleIconAction}
              .actionHandler=${actionHandler({
                hasHold: hasAction(this._config!.icon_hold_action),
                hasDoubleClick: hasAction(this._config!.icon_double_tap_action),
              })}
              .interactive=${this._hasIconAction}
              .imageStyle=${DOMAIN_IMAGE_SHAPE[domain]}
              .imageUrl=${imageUrl}
              data-domain=${ifDefined(domain)}
              data-state=${ifDefined(stateObj?.state)}
            >
              <ha-state-icon
                slot="icon"
                .icon=${this._config.icon}
                .stateObj=${stateObj}
                .hass=${this.hass}
              ></ha-state-icon>
              ${renderTileBadge(stateObj, this.hass)}
            </ha-tile-icon>
            <ha-tile-info
              id="info"
              .primary=${name}
              .secondary=${stateDisplay}
            ></ha-tile-info>
          </div>
          ${features.length > 0
            ? html`
                <hui-card-features
                  .hass=${this.hass}
                  .stateObj=${stateObj}
                  .color=${this._config.color}
                  .features=${features}
                ></hui-card-features>
              `
            : nothing}
        </div>
      </ha-card>
    `;
  } */
}

/* function callSuperSetConfig (target: any, config: any): void {
  Object.getPrototypeOf(Object.getPrototypeOf(target)).setConfig.call(target, config)
} */

/* const HuiTileCardEditor = customElements.get('hui-tile-card-editor') as typeof LitElement
@customElement('extended-tile-card-editor')
export class ExtendedTileCardEditor extends HuiTileCardEditor {
  public setConfig (config: LovelaceCardConfig): void {
    // callSuperSetConfig(this, config)
    const poop = config
  }
} */

@customElement('bolder-container-card')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class BolderContainerCard extends LitElement implements LovelaceCard {
  @property({ attribute: false }) protected _card?: LovelaceCard
  @property({ attribute: false }) protected _header?: BolderHeaderCard
  @property({ attribute: false }) private _config?: MergedBolderContainerCardConfig

  private static _hass?: HomeAssistant

  private _cardPromise: Promise<LovelaceCard> | undefined
  private _resizeObserver?: ResizeObserver
  private _mutationObserver?: MutationObserver
  private _intersectionObserver?: IntersectionObserver

  // eslint-disable-next-line accessor-pairs
  set hass (hass: HomeAssistant) {
    BolderContainerCard._hass = hass
    // Always set hass on child card, even if it's being created asynchronously
    if (this._card) {
      this._card.hass = hass
    } else if (this._cardPromise) {
      // If card is still being created, set hass when it's ready
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this._cardPromise.then((card) => {
        if (card) {
          card.hass = hass
          // Trigger update to ensure card renders with hass
          this.requestUpdate()
        }
      })
    }
    if (this._header) {
      this._header.hass = hass
    }
    // Request update when hass is set to ensure card renders
    // This is critical on slower devices where hass might be set after initial render
    this.requestUpdate()
  }

  protected static getLocale (): string {
    return BolderContainerCard._hass?.locale.language ?? 'en-US'
  }

  protected static computeLabel (schema): string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return localize('editor.' + schema.name, schema.locale)
  }

  public static async getConfigElement (): Promise<LovelaceCardEditor> {
    await import('./bolder-container-editor')
    return document.createElement('bolder-container-card-editor')
  }

  // https://lit.dev/docs/components/styles/
  static get styles (): CSSResultGroup {
    const root = document.documentElement
    const value = getComputedStyle(root).getPropertyValue('--bolder-container-card-gap').trim()
    return [
      css`${unsafeCSS(GetCss(!!value))}`,
      css`
        :host {
          display: block;
          min-height: 1px; /* Prevent 0px height on Android */
        }
        .card-wrapper {
          min-height: 1px; /* Ensure wrapper has minimum height */
          display: block;
        }
      `
    ]
  }

  public setConfig (config: BolderContainerCardConfig): void {
    if (!config.cards) {
      throw new Error('There is no cards parameter defined')
    }
    this._config = {
      ...config,
      mode: config.mode ?? 'vertical',
      header: config.header ?? undefined,
      keep_background: config.keep_background ?? true,
      keep_margin: config.keep_margin ?? false,
      keep_box_shadow: config.keep_box_shadow ?? false,
      keep_border_radius: config.keep_border_radius ?? false,
      keep_outer_padding: config.keep_outer_padding ?? false,
      card_background_override: config.card_background_override ?? undefined,
      is_inner_container: config.is_inner_container ?? false,
      cards: config.cards ?? [],
      styles: config.styles ?? []
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this._createHeader()
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this._createStack()
  }

  connectedCallback (): void {
    super.connectedCallback()
    // Ensure observers are set up when component is connected
    window.setTimeout(() => {
      this._setupObservers()
    }, 0)
  }

  disconnectedCallback (): void {
    super.disconnectedCallback()
    // Clean up observers
    if (this._resizeObserver) {
      this._resizeObserver.disconnect()
      this._resizeObserver = undefined
    }
    if (this._mutationObserver) {
      this._mutationObserver.disconnect()
      this._mutationObserver = undefined
    }
    if (this._intersectionObserver) {
      this._intersectionObserver.disconnect()
      this._intersectionObserver = undefined
    }
  }

  private _setupObservers (): void {
    if (!this.shadowRoot) return

    // Set up ResizeObserver to monitor card size and trigger updates if it becomes 0
    if (!this._resizeObserver) {
      const haCard = this.shadowRoot.querySelector('ha-card')
      if (haCard) {
        this._resizeObserver = new ResizeObserver((entries) => {
          for (const entry of entries) {
            // If the card height becomes 0 or very small, trigger a resize
            if (entry.contentRect.height < 1) {
              window.setTimeout(() => {
                this.requestUpdate()
                window.dispatchEvent(new Event('resize'))
              }, 10)
            }
          }
        })
        this._resizeObserver.observe(haCard)
      }
    }

    // Set up MutationObserver to detect when child cards are added
    if (!this._mutationObserver) {
      const wrapper = this.shadowRoot.querySelector('.card-wrapper')
      if (wrapper) {
        this._mutationObserver = new MutationObserver(() => {
          // When children are added, ensure we recalculate size and propagate hass
          if (BolderContainerCard._hass && this._card && !this._card.hass) {
            this._card.hass = BolderContainerCard._hass
          }
          window.setTimeout(() => {
            window.dispatchEvent(new Event('resize'))
            this.requestUpdate()
          }, 50)
        })
        this._mutationObserver.observe(wrapper, {
          childList: true,
          subtree: true
        })
      }
    }

    // Set up IntersectionObserver to detect when card becomes visible
    // This helps on slower devices where the card might not be visible initially
    if (!this._intersectionObserver && 'IntersectionObserver' in window) {
      const haCard = this.shadowRoot.querySelector('ha-card')
      if (haCard) {
        this._intersectionObserver = new IntersectionObserver((entries) => {
          for (const entry of entries) {
            // When card becomes visible, ensure it's properly initialized
            if (entry.isIntersecting && entry.intersectionRatio > 0) {
              // Ensure hass is set on child card
              if (BolderContainerCard._hass && this._card && !this._card.hass) {
                this._card.hass = BolderContainerCard._hass
                this.requestUpdate()
              }
              // Trigger resize to ensure proper sizing
              window.setTimeout(() => {
                window.dispatchEvent(new Event('resize'))
              }, 10)
            }
          }
        }, {
          threshold: [0, 0.1, 0.5, 1.0] // Multiple thresholds to catch visibility changes
        })
        this._intersectionObserver.observe(haCard)
      }
    }
  }

  protected updated (changedProperties: PropertyValues): void {
    super.updated(changedProperties)
    
    // Set up observers if not already set up
    this._setupObservers()

    // Ensure hass is always propagated to child card when component updates
    // This handles cases where hass is set after the card is created
    if (BolderContainerCard._hass && this._card && !this._card.hass) {
      this._card.hass = BolderContainerCard._hass
    }

    if (!this._card) {
      // If card was just created, ensure we trigger a resize after it's rendered
      if (this._cardPromise) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._cardPromise.then(() => {
          // Ensure hass is set when card becomes available
          if (BolderContainerCard._hass && this._card && !this._card.hass) {
            this._card.hass = BolderContainerCard._hass
          }
          window.setTimeout(() => {
            this.requestUpdate()
            window.dispatchEvent(new Event('resize'))
          }, 50)
        })
      }
      return
    }
    this._waitForChildren(this._card, false)
    window.setTimeout(() => { this.updateStyleOnTimeout() }, 1)
    window.setTimeout(() => { this.updateStyleOnTimeout() }, 500)
  }

  protected updateStyleOnTimeout (): void {
    if (!this._config?.keep_background) this._waitForChildren(this._card, true)
    if (this._card?.shadowRoot) {
      if (this._config?.styles?.find((item) => item.variable === 'bolder-container-card-gap' || item.variable === 'gap')) {
        const stackRoot = this._card.shadowRoot.getElementById('root')
        if (stackRoot) stackRoot.style = '--vertical-stack-card-gap: var(--bolder-container-card-gap_internal)'
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private async _createStack () {
    this._cardPromise = this._createCard({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      type: `${this._config!.mode}-stack`,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      cards: this._config!.cards
    })

    this._card = await this._cardPromise
    
    // Ensure hass is set on the card even if it wasn't available during creation
    // This is critical for slower devices where hass might be set after card creation
    if (BolderContainerCard._hass && this._card) {
      this._card.hass = BolderContainerCard._hass
    }
    
    // Request update to ensure the card is rendered after async creation
    // This is critical for Android devices where timing can cause the card to disappear
    this.requestUpdate()
    
    // Wait for this component to update, then wait for child card to update
    await this.updateComplete
    
    if (this._card && (this._card as unknown as LitElement).updateComplete) {
      await ((this._card as unknown as LitElement).updateComplete as Promise<boolean>)
    }
    
    // Ensure hass is still set after updates (in case it was set during update)
    if (BolderContainerCard._hass && this._card && !this._card.hass) {
      this._card.hass = BolderContainerCard._hass
      this.requestUpdate()
    }
    
    // Trigger multiple resize events at different intervals to ensure Home Assistant picks it up
    // This is especially important on Android where timing can be unpredictable
    window.setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 10)
    window.setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
      this.requestUpdate()
    }, 100)
    window.setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 500)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private async _createHeader () {
    if (this._config?.header) {
      this._header = new BolderHeaderCard()
      this._header.setPartialConfig(this._config?.header)
    }
  }

  protected render (): TemplateResult {
    // Don't return empty string - always render the structure even if hass/config isn't ready yet
    // This prevents the card from disappearing on slower devices where timing is off
    if (!this._config) {
      return html`<ha-card><div class="card-wrapper"></div></ha-card>`
    }

    // Render the card structure even if hass isn't set yet
    // The hass setter will trigger an update when it becomes available
    return html`
      <ha-card class="
      ${this._config.is_inner_container ? 'inner-container ' : ''}
      ${this._config.keep_outer_padding ? 'outer-padding ' : ''}
      ">
      ${this._config.header && this._header ? html`${this._header}` : html``}
        <div class="card-wrapper">${this._card || html``}</div>
        <style>${this._config.styles ? css`${this.getStyleOverrideFromConfig(this._config.styles)}` : css``}</style>
      </ha-card>
    `
  }

  private _updateStyle (e: LovelaceCard | null, withBg: boolean): void {
    if (!e) return
    if (!this._config?.keep_box_shadow) e.style.boxShadow = 'none'
    if (
      !this._config?.keep_background &&
      withBg &&
      getComputedStyle(e).getPropertyValue('--keep-background').trim() !== 'true'
    ) {
      e.style.background = this._config?.card_background_override ?? 'transparent'
      if (this._config?.card_background_override === undefined) {
        e.style.backdropFilter = 'none'
      }
    }
    if (!this._config?.keep_border_radius) e.style.borderRadius = '0'
  }

  private _loopChildren (e: LovelaceCard, withBg: boolean): void {
    const searchElements = e.childNodes
    searchElements.forEach((childE) => {
      if ((childE as Element).tagName === 'STACK-IN-CARD') return
      if (!this._config?.keep_margin && (childE as LovelaceCard).style) {
        (childE as LovelaceCard).style.margin = '0px'
      }
      this._waitForChildren(childE as LovelaceCard, withBg)
    })
  }

  private _updateChildren (element: LovelaceCard | undefined, withBg: boolean): void {
    if (!element) return
    if (element.shadowRoot) {
      // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
      const card = element.shadowRoot.querySelector('ha-card') as LovelaceCard
      if (!card) {
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        const searchEles = element.shadowRoot.getElementById('root') || element.shadowRoot.getElementById('card')
        if (!searchEles) return
        this._loopChildren(searchEles as LovelaceCard, withBg)
      } else {
        this._updateStyle(card, withBg)
      }
    } else {
      if (typeof element.querySelector === 'function' && element.querySelector('ha-card')) {
        this._updateStyle(element.querySelector('ha-card'), withBg)
      }
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      this._loopChildren(element as LovelaceCard, withBg)
    }
  }

  private _checkIfPropertyExists (element: any, propertyName: string): boolean {
    return propertyName in element
  }

  private _waitForChildren (element: LovelaceCard | undefined, withBg: boolean): void {
    if (element === undefined) return
    if (!this._checkIfPropertyExists(element, 'updateComplete')) {
      this._updateChildren(element, withBg)
      return
    }

    if (((element as unknown) as LitElement).updateComplete !== null) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      ((element as unknown) as LitElement).updateComplete.then(() => {
        this._updateChildren(element, withBg)
      })
    } else {
      // this._updateChildren(element, withBg)
      window.setTimeout(() => {
        this._waitForChildren(element, withBg)
      }, 10)
    }
  }

  private async _createCard (config: LovelaceCardConfig): Promise<LovelaceCard> {
    let element: LovelaceCard
    if (HELPERS) {
      element = (await HELPERS).createCardElement(config)
    } else {
      element = createThing(config)
    }
    
    // Always set hass if available, and ensure it's set even if hass becomes available later
    if (BolderContainerCard._hass) {
      element.hass = BolderContainerCard._hass
    } else {
      // If hass isn't available yet, wait a bit and try again
      // This handles the case where card is created before hass is set (common on slower devices)
      await new Promise(resolve => window.setTimeout(resolve, 10))
      if (BolderContainerCard._hass) {
        element.hass = BolderContainerCard._hass
      }
    }
    
    if (element) {
      element.addEventListener(
        'll-rebuild',
        (ev) => {
          ev.stopPropagation()
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          this._rebuildCard(element, config)
        },
        { once: true }
      )
    }
    return element
  }

  private async _rebuildCard (element: LovelaceCard, config: LovelaceCardConfig): Promise<LovelaceCard> {
    const newCard = await this._createCard(config)
    element.replaceWith(newCard)
    this._card = newCard
    // Update the style immediately, and then again after a delay just in case the DOM wasn't totally finished.
    window.setTimeout(() => { this.updateStyleOnTimeout() }, 1)
    window.setTimeout(() => { this.updateStyleOnTimeout() }, 500)
    return newCard
  }

  public async getCardSize (): Promise<number> {
    // Wait for card promise to complete
    if (this._cardPromise) {
      try {
        await this._cardPromise
      } catch (e) {
        // If promise fails, wait a bit and try again
        await new Promise(resolve => window.setTimeout(resolve, 100))
      }
    }
    
    if (!this._card) {
      // If card still doesn't exist, wait a bit more for Android devices
      // that may have slower async initialization - retry up to 3 times
      for (let i = 0; i < 3; i++) {
        await new Promise(resolve => window.setTimeout(resolve, 50))
        if (this._card) break
      }
      if (!this._card) {
        // Return minimum size instead of 0 to prevent disappearing
        return 1
      }
    }
    
    try {
      const size = await this._computeCardSize(this._card)
      // Ensure we return at least 1 to prevent the card from disappearing
      const finalSize = Math.max(1, size)
      
      // Double-check: if we have a card element, verify it has actual content
      if (this.shadowRoot) {
        const haCard = this.shadowRoot.querySelector('ha-card') as HTMLElement
        if (haCard && haCard.offsetHeight === 0 && finalSize === 1) {
          // Card exists but has 0 height - trigger update and return a safe minimum
          window.setTimeout(() => {
            this.requestUpdate()
            window.dispatchEvent(new Event('resize'))
          }, 10)
        }
      }
      
      return finalSize
    } catch (e) {
      // If computation fails, return minimum size
      return 1
    }
  }

  private _computeCardSize (card: LovelaceCard): number | Promise<number> {
    if (typeof card.getCardSize === 'function') {
      return card.getCardSize()
    }
    if (customElements.get(card.localName)) {
      return 1
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    return customElements.whenDefined(card.localName).then(() => this._computeCardSize(card))
  }

  private getStyleOverrideFromConfig (styles: StyleItem[]): CSSResult {
    const styleLines: string[] = styles.map((s) => s.variable.startsWith('bolder-container-card-') ? `--${s.variable}_internal: ${s.value} !important;` : `--bolder-container-card-${s.variable}_internal: ${s.value} !important;`)
    if (!(this._config?.keep_background ?? true)) {
      styleLines.push('--bolder-container-card-title-backdrop-filter_internal: none !important;')
      styleLines.push('--bolder-container-card-title-background_internal: none !important;')
    }

    return css`
:host { 
  ${unsafeCSS(styleLines.join('\n'))} 
}`
  }
}
