import { Component } from '@stencil/core';

@Component({
  tag: 'cl-heading',
  styleUrl: 'cl-heading.css',
  shadow: true
})
export class ClHeading {


  render() {
    return (
      <cl-Box>
        <cl-text weight="bold" size="lg"><slot /></cl-text>
      </cl-Box>
    );
  }
}
