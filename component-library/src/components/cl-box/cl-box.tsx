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
    return (
      <div style={{ ...styles }}>
        <slot />
      </div>
    );

  }
}

