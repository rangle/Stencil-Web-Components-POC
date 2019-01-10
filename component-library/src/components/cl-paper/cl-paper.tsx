import { Component } from '@stencil/core';

@Component({
  tag: 'cl-paper',
  styleUrl: 'cl-paper.css',
  shadow: true
})
export class ClBox {


  render() {
    return <div><slot /></div>;
  }
}
