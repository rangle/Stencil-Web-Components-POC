import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'component-library',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  copy: [
    { src: 'globals' }
  ],
  devServer: {
    openBrowser: true
  }
};
