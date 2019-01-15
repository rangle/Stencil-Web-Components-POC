import { Component, Event, EventEmitter, Prop } from '@stencil/core';
import { SystemSpaces, mapSpaceStyles } from '../../utils/design-system';


@Component({
  tag: 'cl-button-box',
  styleUrl: 'cl-button-box.css',
  shadow: true
})
export class ClButtonBox {

  @Event({
    eventName: 'pressed',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) pressed: EventEmitter;

  @Prop() spaces: SystemSpaces = [];

  onPressHandler = (event) => {
    this.pressed.emit(event);
  }

  render() {
    const styles = mapSpaceStyles(this.spaces)
    return (
     <button style={styles} onClick={this.onPressHandler}>
       <slot></slot>
     </button>
    );
  }
}
