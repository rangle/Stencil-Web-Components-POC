import { Component, Prop } from '@stencil/core';
import { SystemSpaces, mapSpaceStyles } from '../../utils/design-system';

@Component({
  tag: 'cl-paper',
  styleUrl: 'cl-paper.css',
  shadow: true
})
export class ClBox {

  @Prop() spaces: SystemSpaces = [];
  @Prop() isInvisible: boolean = false;

  render() {
    const styles = mapSpaceStyles(this.spaces);
    const isInvisibleClass = this.isInvisible ? 'isInvisible' : '';
    return <div class={isInvisibleClass} style={{...styles}}><slot /></div>;
  }
}
