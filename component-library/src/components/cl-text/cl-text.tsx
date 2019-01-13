import { Component, Prop } from '@stencil/core';
import { systemSizes } from '../../globals/system.types';


@Component({
  tag: 'cl-text',
  styleUrl: 'cl-text.css',
  shadow: true
})
export class ClText {

  @Prop() size: systemSizes;
  @Prop() weight: 'light' | 'bold';

  render() {
    const styles = {
      fontSize: this.size ? `var(--text-${this.size})` : 'inherit',
      fontWeight: this.weight ? `var(--font-${this.weight})` : 'inherit',
    }
    return <span style={{ ...styles }}><slot /></span>;
  }
}
