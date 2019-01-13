import { Component } from '@stencil/core';

@Component({
  tag: 'cl-2-up',
  styleUrl: '2-up.css',
  shadow: true
})
export class ClBox {

  render() {
    return (
      <div class="wrap">
        <div class="item">
          <slot name="first" />
        </div>
        <div class="item">
          <slot name="second" />
        </div>
      </div>
    );
  }
}
