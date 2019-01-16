
import { Components } from 'component-library';

declare global {
  namespace JSX {
    export interface IntrinsicElements {
      'cl-text-box': Components.ClTextBox;
    }
  }
}