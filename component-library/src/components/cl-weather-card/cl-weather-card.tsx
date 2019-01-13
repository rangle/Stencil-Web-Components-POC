import { Component } from '@stencil/core';

@Component({
  tag: 'cl-weather-card',
  styleUrl: 'cl-weather-card.css',
  shadow: true
})
export class ClWeatherCard {


  render() {
    return (
      <cl-box spaces={[
        {'m': 'xxl'},
        {'p': 'xxl'}
      ]}>
      <cl-paper>
        <cl-heading class="title">Toronto</cl-heading>
        <cl-2-up>
          <cl-avatar slot="first" src={'http://cdn.worldweatheronline.net/images/wsymbols01_png_64/wsymbol_0011_light_snow_showers.png'} />
          <cl-text slot="second" size="xxl" weight="bold">-11°</cl-text>
        </cl-2-up>
        <cl-text class="details">Heavy Snow</cl-text>
      </cl-paper>
      </cl-box>
    );
  }
}
