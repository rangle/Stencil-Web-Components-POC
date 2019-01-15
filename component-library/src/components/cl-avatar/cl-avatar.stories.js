import { storiesOf } from '@storybook/polymer';

const stories = storiesOf('My component', module);
stories.add('Avatar', () => (`<cl-avatar src="http://cdn.worldweatheronline.net/images/wsymbols01_png_64/wsymbol_0011_light_snow_showers.png"></cl-avatar>`));
stories.add('test', () => (`<button>hi</button>`));
