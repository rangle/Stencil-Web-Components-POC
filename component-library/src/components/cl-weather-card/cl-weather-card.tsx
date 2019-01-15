import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'cl-weather-card',
  styleUrl: 'cl-weather-card.css',
  shadow: true
})
export class ClWeatherCard {

  /**
  * City that renders as the card title
  */
  @Prop() location: string;

  /**
  * Path to image
  */
  @Prop() src: string;

  /**
  * Temperature value
  */
  @Prop() temperature: string;

  /**
  * Weather details
  */
  @Prop() details: string;


  render() {
    return (
      <cl-paper spaces={[{ p: 'md'}]}>
        <cl-heading class="title">{this.location}</cl-heading>
        <cl-2-up>
          <cl-avatar spaces={[{ p: 'md'}]} slot="first" src={this.src} />
          <cl-text color="tertiary" slot="second" size="xxl" weight="bold">{this.temperature}</cl-text>
        </cl-2-up>
        <cl-text class="details">{this.details}</cl-text>
      </cl-paper>
    );
  }
}
