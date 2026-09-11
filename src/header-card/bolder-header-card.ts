import { LitElement, type TemplateResult, html, type PropertyValues, css, type CSSResultGroup, unsafeCSS, type CSSResult, type HTMLTemplateResult } from 'lit'
import { customElement, property } from 'lit-element'
/* import { ifDefined } from 'lit-html/directives/if-defined' */
import { type HomeAssistant, type LovelaceCard, type LovelaceCardEditor } from 'custom-card-helpers'
import type { BolderHeaderCardConfig, MergedBolderHeaderCardConfig } from './bolder-header-types'
import { GetCss } from './bolder-header-styles'
import localize from '../localize/localize'
import * as pjson from '../../package.json'
import type { StyleItem } from '../types'

console.info(
  `%c BOLDER-HEADER-CARD \n%c   Version ${pjson.version}   `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray'
);

// This puts your card into the UI card picker dialog
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'bolder-header-card',
  name: 'Bolder Header Card',
  description: 'A header card with optional buttons that allows for customization and theming.'
})

@customElement('bolder-header-card')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class BolderHeaderCard extends LitElement implements LovelaceCard {
  @property({ attribute: false }) private _config?: MergedBolderHeaderCardConfig

  private static _hass?: HomeAssistant

  // eslint-disable-next-line accessor-pairs
  set hass (hass: HomeAssistant) {
    BolderHeaderCard._hass = hass
  }

  protected static getLocale (): string {
    return BolderHeaderCard._hass?.locale.language ?? 'en-US'
  }

  protected static computeLabel (schema): string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return localize('editor.' + schema.name, schema.locale)
  }

  public static async getConfigElement (): Promise<LovelaceCardEditor> {
    await import('./bolder-header-editor')
    return document.createElement('bolder-header-card-editor')
  }

  // https://lit.dev/docs/components/styles/
  static get styles (): CSSResultGroup {
    return [css`${unsafeCSS(GetCss())}`]
  }

  public setConfig (config: BolderHeaderCardConfig): void {
    this._config = {
      ...config,
      title: config.title ?? '',
      subtitle: config.subtitle ?? undefined,
      icon: config.icon ?? undefined,
      icon_color: config.icon_color ?? undefined,
      styles: config.styles ?? []
    }
  }

  public setPartialConfig (config: Partial<BolderHeaderCardConfig>): void {
    this._config = {
      type: 'custom:bolder-header-card',
      title: config.title ?? this._config?.title ?? '',
      subtitle: config.subtitle ?? this._config?.subtitle,
      icon: config.icon ?? this._config?.icon,
      icon_color: config.icon_color ?? this._config?.icon_color,
      styles: config.styles ?? this._config?.styles
    }
  }

  /**
   * Resolve icon_color to a CSS value.
   *
   * A bare word is treated as a Home Assistant theme colour and resolved via its
   * CSS custom property, falling back to the literal word so 'red' still works
   * on a theme that does not define --red-color. Anything that looks like a CSS
   * colour already - #hex, rgb(), hsl(), var() - is passed straight through.
   */
  private _resolveIconColor (value?: string): string | undefined {
    if (!value) return undefined
    const v = value.trim()
    if (v.startsWith('#') || v.includes('(')) return v
    return `var(--${v}-color, ${v})`
  }

  protected updated (changedProperties: PropertyValues): void {
    super.updated(changedProperties)
  }

  protected render (): TemplateResult {
    if (!BolderHeaderCard._hass || !this._config) {
      return html``
    }

    return html`
      <ha-card>
        <div class="header-icon-container">
          ${this._config.icon
            ? html`<ha-icon
                icon="${this._config.icon}"
                style="${this._config.icon_color
                  ? `color: ${this._resolveIconColor(this._config.icon_color)}`
                  : ''}"
              ></ha-icon>`
            : html``}
          <div class="header-container">
            ${this._renderTitle()}
            ${this._renderSubtitle()}
          </div>
        </div>
        <div class="button-label-container">
          <!-- Shhh, secret new feature -->
          <!--<ha-control-button-group>
          <p>Label</p>
            <ha-control-button .label=${'poop'}><ha-icon icon="${this._config.icon}"></ha-control-button>
            <ha-control-button .label=${'poop'}><ha-icon icon="${this._config.icon}"></ha-control-button>
          </ha-control-button-group>-->
        </div>
        <style>${this._config.styles ? css`${this.getStyleOverrideFromConfig(this._config.styles)}` : css``}</style>
      </ha-card>
    `
  }

  private _renderTitle (): HTMLTemplateResult {
    if (!this._config?.title) return html``
    return html`<h1 class="card-title">${this._config?.title}</h1>`
  }

  private _renderSubtitle (): HTMLTemplateResult {
    if (!this._config?.subtitle) return html``
    return html`<p class="card-subtitle">${this._config?.subtitle}</p>`
  }

  private _checkIfPropertyExists (element: any, propertyName: string): boolean {
    return propertyName in element
  }

  public async getCardSize (): Promise<number> {
    return 1
  }

  /*
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
    */

  private getStyleOverrideFromConfig (styles: StyleItem[]): CSSResult {
    const styleLines: string[] = styles.map((s) => s.variable.startsWith('bolder-header-card-') ? `--${s.variable}_internal: ${s.value} !important;` : `--bolder-header-card-${s.variable}_internal: ${s.value} !important;`)
    return css`
:host { 
  ${unsafeCSS(styleLines.join('\n'))} 
}`
  }
}
