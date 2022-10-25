import {
  baseLayerLuminance,
  provideFASTDesignSystem,
  StandardLuminance,
} from '@microsoft/fast-components';
import { fancyButton } from './button';
import { triProgress } from './progress';

/**
 * Register with the FAST Design System.
 */
export const FASTDesignSystem = provideFASTDesignSystem().register(
  fancyButton(),
  triProgress()
);

/**
 * Set base layer luminance for dark mode example
 */
baseLayerLuminance.setValueFor(
  document.getElementById('dark'),
  StandardLuminance.DarkMode
);
