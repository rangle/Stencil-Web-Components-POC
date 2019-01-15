import { Component, Event, EventEmitter, State, Prop } from '@stencil/core';

@Component({
  tag: 'cl-expansion-panel',
  styleUrl: 'cl-expansion-panel.css',
  shadow: true
})
export class ClExpansionPanel {

  /**
  * Setting this prop enables control over the panel.
  */
  @Prop() isOpen: boolean = null;
  @State() _isOpen: boolean = false;


  /**
  * Executes when title area is pressed
  */
  @Event({
    eventName: 'onTogglePressed',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) onTogglePressed: EventEmitter;

  handleSummaryPress = () => {
    this._isOpen = !this._isOpen;
    this.handleToggledPressed(this.getIsOpen());
  }

  handleToggledPressed = (isOpen) => {
    this.onTogglePressed.emit({isOpen})
  }

  componentWillLoad() {
    console.log('isOpen', this.isOpen);
  }

  private getIsOpen = () => (this.isOpen !== null)
    ? this.isOpen
    : this._isOpen


  private getOpenClass = () => (this.getIsOpen())
    ? 'open'
    : ''

  render() {
    const openClass = this.getOpenClass();
    return (
      <cl-paper isInvisible={!openClass} spaces={[{ p: 'md' }]} class={openClass}>
        <cl-button-box onPressed={this.handleSummaryPress}>
          <slot name="description"></slot>
        </cl-button-box>
        <cl-box spaces={[{ pt: 'sm'}]} class="details">
          <slot name="details"></slot>
        </cl-box>
      </cl-paper>
    );
  }
}
