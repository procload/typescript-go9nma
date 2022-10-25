import { Button, buttonStyles } from '@microsoft/fast-components';
import {
  ButtonOptions,
  buttonTemplate as template,
} from '@microsoft/fast-foundation';
import { css } from '@microsoft/fast-element';
import './style.css';

/**
 * Extend all the goodness from the FAST Button
 */
class FancyButton extends Button {}

export const fancyButtonStyles = (context, definition: ButtonOptions) => css`
  ${buttonStyles(context, definition)}
`;

/**
 * Below is an example of composing a new element, with a new name, from existing parts
 */
export const fancyButton = FancyButton.compose<ButtonOptions>({
  /**
   * Provide a new base name as this is a new pattern and not a replacement for "button"
   */
  baseName: 'fancy-button',

  /**
   * Import and reuse the button template
   */
  template,
  /**
   * Add our local instance of styles
   */
  styles: fancyButtonStyles,
  /**
   * Add our glyph as default slotted content to the end slot
   */
  end: `
    <svg width="12px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.023 15.273L11.29 8 4.023.727l.704-.704L12.71 8l-7.984 7.977-.704-.704z"
      ></path>
    </svg>
  `,
  /**
   * Delegate focus to the internal Button
   */
  shadowOptions: {
    delegatesFocus: true,
  },
});
