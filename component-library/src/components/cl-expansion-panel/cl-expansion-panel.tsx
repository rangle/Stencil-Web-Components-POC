import { Component, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'cl-expansion-panel',
  styleUrl: 'cl-expansion-panel.css',
  shadow: true
})
export class ClExpansionPanel {

  @State() _isOpen: boolean = false;

  @Event({
    eventName: 'onToggled',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) onToggled: EventEmitter;

  handleSummaryPress = () => {
    this._isOpen = !this._isOpen;
    this.handleToggled(this._isOpen);
  }

  handleToggled = (isOpen) => {
    this.onToggled.emit({ isOpen })
  }

  render() {
    const openClass = this._isOpen ? 'open' : '';
    return (
      <cl-paper isInvisible={!this._isOpen} spaces={[{ p: 'md' }]} class={openClass}>
        <cl-button-box onOnPressed={this.handleSummaryPress}>
          <cl-text>At 3:32pm it’s -11°</cl-text>
        </cl-button-box>
        <cl-box spaces={[{ pt: 'sm'}]} class="details">
          <cl-text>Overcast</cl-text>
        </cl-box>
      </cl-paper>
    );
  }
}
