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
        <cl-text color="secondary" weight="bold" size="lg"><slot /></cl-text>
      </cl-Box>
    );
  }
}
