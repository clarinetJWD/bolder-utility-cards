export function GetCss (myVar: boolean): string {
  return `
    :host {
      /*** Card Variables */
      --bolder-container-card-background_internal: var(--bolder-container-card-background, transparent);
      --bolder-container-card-border-color_internal: var(--bolder-container-card-border-color, var(--ha-card-border-color, var(--divider-color, #e0e0e0)));
      --bolder-container-card-border-style_internal: var(--bolder-container-card-border-style, var(--ha-card-border-style, solid));
      --bolder-container-card-border-width_internal: var(--bolder-container-card-border-width, var(--ha-card-border-width, 0px));
      --bolder-container-card-border-radius_internal: var(--bolder-container-card-border-radius, var(--ha-card-border-radius, 0px));
      --bolder-container-card-box-shadow_internal: var(--bolder-container-card-box-shadow, var(--ha-card-box-shadow));
      --bolder-container-card-padding_internal: var(--bolder-container-card-padding, var(--ha-card-padding, 10px));
      --bolder-container-card-backdrop-filter_internal: var(--bolder-container-card-backdrop-filter, var(--ha-card-backdrop-filter, none));

      /*** Text Color
       * Captured from the outer context FIRST, so the override applied on
       * ha-card below cannot feed back into its own default and create a
       * custom-property cycle. */
      --bolder-container-card-inherited-text-color: var(--primary-text-color);
      --bolder-container-card-inherited-secondary-text-color: var(--secondary-text-color);
      --bolder-container-card-text-color_internal: var(--bolder-container-card-text-color, var(--bolder-container-card-inherited-text-color));
      --bolder-container-card-secondary-text-color_internal: var(--bolder-container-card-secondary-text-color, var(--bolder-container-card-text-color, var(--bolder-container-card-inherited-secondary-text-color)));

      /*** Title Text */
      --bolder-header-card-background: var(--bolder-container-card-title-background, var(--bolder-container-card-title-background_internal));
      --bolder-header-card-title-color: var(--bolder-container-card-title-color, var(--bolder-container-card-title-color_internal));
      --bolder-header-card-gap: var(--bolder-container-card-title-gap, var(--bolder-container-card-title-gap_internal));
      --bolder-header-card-backdrop-filter_internal: var(--bolder-container-card-title-backdrop-filter, var(--bolder-container-card-title-backdrop-filter_internal));
      --bolder-header-card-title-outline-color: var(--bolder-container-card-title-outline-color, var(--bolder-container-card-title-outline-color_internal));
      --bolder-header-card-title-size: var(--bolder-container-card-title-size, var(--bolder-container-card-title-size_internal));
      --bolder-header-card-title-weight: var(--bolder-container-card-title-weight, var(--bolder-container-card-title-weight_internal));
      --bolder-header-card-title-line-height: var(--bolder-container-card-title-line-height, var(--bolder-container-card-title-line-height_internal));
      --bolder-header-card-padding: var(--bolder-container-card-title-padding, var(--bolder-container-card-title-padding_internal));

      /*** Layout */
      ${myVar ? '--vertical-stack-card-gap: var(--bolder-container-card-gap);' : ''}
    }

    ha-card {
      height: 100%;
      overflow: hidden;
      box-shadow: var(--bolder-container-card-box-shadow_internal);
      border-radius: var(--bolder-container-card-border-radius_internal);
      background: var(--bolder-container-card-background_internal);
      border-color: var(--bolder-container-card-border-color_internal);
      border-style: var(--bolder-container-card-border-style_internal);
      border-width: var(--bolder-container-card-border-width_internal);
      padding: 0 0 0 0;
      backdrop-filter: var(--bolder-container-card-backdrop-filter_internal);

      /* Set on ha-card rather than :host so the child cards inside
       * .card-wrapper inherit it. Useful when the container has a background
       * the theme's text color was not chosen against - a colored alert card,
       * for instance - where the child cards would otherwise be unreadable. */
      color: var(--bolder-container-card-text-color_internal);
      --primary-text-color: var(--bolder-container-card-text-color_internal);
      --secondary-text-color: var(--bolder-container-card-secondary-text-color_internal);
    }
  
    ha-card.outer-padding {
      padding: var(--bolder-container-card-padding_internal);
    }

    ha-card.inner-container {
      box-shadow: none;
      border-radius: 0px;
      background: transparent;
      border: none;
      padding: 0 0 0 0;
      backdrop-filter: none;
    }

    .card-header {
      color: var(--bolder-container-card-title-color_internal);
      background: var(--bolder-container-card-title-background_internal);
      text-shadow: -1px -1px 0 var(--bolder-container-card-title-outline-color_internal), 1px -1px 0 var(--bolder-container-card-title-outline-color_internal), 1px 1px 0 var(--bolder-container-card-title-outline-color_internal), -1px 1px 0 var(--bolder-container-card-title-outline-color_internal);
      font-size: var(--bolder-container-card-title-size_internal);
      line-height: var(--bolder-container-card-title-line-height_internal);
      padding: var(--bolder-container-card-title-padding_internal);
      font-weight: var(--bolder-container-card-title-weight_internal);
      margin-bottom: var(--bolder-container-card-title-gap_internal);
      backdrop-filter: var(--bolder-container-card-title-backdrop-filter_internal);
    }

  `
}
