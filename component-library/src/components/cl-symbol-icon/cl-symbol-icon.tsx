import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'cl-symbol-icon',
  styleUrl: 'cl-symbol-icon.css',
  shadow: true
})
export class ClSymbolIcon {

  @Prop() character: number;



  render() {
    return (
      <span>{String.fromCharCode(this.character)}</span>
    );
  }

}
