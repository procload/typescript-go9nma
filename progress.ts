import { Progress, progressStyles } from '@microsoft/fast-components';
import {
  BaseProgress,
  ProgressOptions,
  progressTemplate as template,
} from '@microsoft/fast-foundation';
import { css } from '@microsoft/fast-element';
import { progressStyles as styles } from './progress.styles';

/**
 * Progress base class
 * @public
 */
export class TriProgress extends Progress {}

/**
 * Below is an example of composing a new element, with a new name, from existing parts
 */
export const triProgress = TriProgress.compose<ProgressOptions>({
  /**
   * Provide a new base name as this is a new pattern and not a replacement for "button"
   */
  baseName: 'tri-progress',

  /**
   * Import and reuse the button template
   */
  template,
  /**
   * Add our local instance of styles
   */
  styles: styles,
  indeterminateIndicator1: `
    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
  `,
  indeterminateIndicator2: `
    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>
  `,
});
