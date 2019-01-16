// import { configure } from '@storybook/polymer';
// const req = require.context('../src', true, /\.stories\.js$/);
// function loadStories() {
//   req.keys().forEach((filename) => req(filename))
// }
// configure(loadStories, module);


import { configure } from '@storybook/html';
// const req = require.context('../src', true, /\.stories\.js$/);


function loadStories() {
  // req.keys().forEach((filename) => req(filename))
  require('../src/components/cl-avatar/cl-avatar.stories.js')
}
configure(loadStories, module);
