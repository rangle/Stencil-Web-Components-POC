import { Component, Prop } from '@stencil/core';
import { SystemSizes } from '../../utils/design-system';


@Component({
  tag: 'cl-text',
  styleUrl: 'cl-text.css',
  shadow: true
})
export class ClText {

  /**
  * Font style props
  */
  @Prop() size: SystemSizes;

  /**
  * Font weight style props
  */
  @Prop() weight: 'light' | 'bold';

  /**
  * Font size style props
  */
  @Prop() color: 'primary' | 'secondary' | 'tertiary';

  render() {
    const styles = {
      fontSize: this.size ? `var(--text-${this.size})` : 'inherit',
      color: this.color ? 'var(--color-${this.color}' : 'var(--color-primary)',
      fontWeight: this.weight ? `var(--font-${this.weight})` : 'bold',
    }
    return <span style={{ ...styles }}><slot /></span>;
  }
}
