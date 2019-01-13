import { Component, Prop } from '@stencil/core';
import { systemSpaces } from '../../globals/system.types';

const getFirstKey = (obj) => Object.keys(obj).shift()

@Component({
  tag: 'cl-box',
  styleUrl: 'cl-box.css',
  shadow: true
})
export class ClBox {

  @Prop() spaces: systemSpaces = [];



  render() {

    const styles = this.spaces.reduce((acc, space) => {
      const key = getFirstKey(space);
      return {
        ...acc,
        ['padding']: `var(--space-${space[key]})`
      }
    }, {})
    console.log('styles are', styles)

    return (
      <div style={{ ...styles }}>
        hey11
        <slot />
      </div>
    );

  }
}

