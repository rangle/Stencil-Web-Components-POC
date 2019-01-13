import { Component } from '@stencil/core';

@Component({
  tag: 'cl-weather-card',
  styleUrl: 'cl-weather-card.css',
  shadow: true
})
export class ClWeatherCard {


  render() {
    return (
      <cl-paper spaces={[{ p: 'md'}]}>
        <cl-heading class="title">Toronto</cl-heading>
        <cl-2-up>
          <cl-avatar spaces={[{ p: 'md'}]} slot="first" src={'http://cdn.worldweatheronline.net/images/wsymbols01_png_64/wsymbol_0011_light_snow_showers.png'} />
          <cl-text slot="second" size="xxl" weight="bold">-11°</cl-text>
        </cl-2-up>
        <cl-text class="details">Heavy Snow</cl-text>
      </cl-paper>
    );
  }
}
