import { Component, Prop } from '@stencil/core';
import { SystemSpaces, mapSpaceStyles } from '../../utils/design-system';


@Component({
  tag: 'cl-box',
  styleUrl: 'cl-box.css',
  shadow: true
})
export class ClBox {

  @Prop() spaces: SystemSpaces = [];



  render() {

    const styles = mapSpaceStyles(this.spaces)
    console.log('styles are', styles)

    return (
      <div style={{ ...styles }}>
        hey11
        <slot />
      </div>
    );

  }
}

