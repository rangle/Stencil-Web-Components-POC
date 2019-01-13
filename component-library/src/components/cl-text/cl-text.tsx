import { Component, Prop } from '@stencil/core';
import { SystemSizes } from '../../utils/design-system';


@Component({
  tag: 'cl-text',
  styleUrl: 'cl-text.css',
  shadow: true
})
export class ClText {

  @Prop() size: SystemSizes;
  @Prop() weight: 'light' | 'bold';

  render() {
    const styles = {
      fontSize: this.size ? `var(--text-${this.size})` : 'inherit',
      fontWeight: this.weight ? `var(--font-${this.weight})` : 'inherit',
    }
    return <span style={{ ...styles }}><slot /></span>;
  }
}
