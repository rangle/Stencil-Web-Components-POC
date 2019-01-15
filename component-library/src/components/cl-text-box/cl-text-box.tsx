import { Component, Prop, State, Listen, Event, EventEmitter } from '@stencil/core';
import { SystemSpaces } from '../../utils/design-system';


@Component({
  tag: 'cl-text-box',
  styleUrl: 'cl-text-box.css',
  shadow: true
})
export class ClTextBox {

  @Prop() spaces: SystemSpaces = [];
  @State() value: string;

  @Event({
    eventName: 'go',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) go: EventEmitter;

  @Listen('keyup')
  handleKeyDown(ev: KeyboardEvent){
    if (ev.keyCode === 13){
      this.handleSubmit(ev);
    }
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.go.emit(this.value);
  }

  handleChange = (event) => {
    this.value = event.target.value;
  }

  render() {
    return (
      <cl-paper spaces={[{p: 'xs'}, {pl:'md'}, ...this.spaces]}>
        <div class="wrap">
          <input type="text" value={this.value} onInput={this.handleChange} />
          <cl-button-box onPressed={this.handleSubmit}>
            <cl-symbol-icon character={43}></cl-symbol-icon>
          </cl-button-box>
        </div>
      </cl-paper>
    );

  }
}

