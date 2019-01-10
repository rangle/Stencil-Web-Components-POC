import { Component } from '@stencil/core';

@Component({
  tag: 'cl-box',
  styleUrl: 'cl-box.css',
  shadow: true
})
export class ClBox {

  render() {
    return <div class={'testy car'} style={{ margin: '2em' }}><slot /></div>;
  }
}
