import { storiesOf } from '@storybook/polymer';

const stories = storiesOf('My component', module);
stories.add('default', () => (`<cl-avatar></cl-avatar>`));
stories.add('test', () => (`<button>hi</button>`));
