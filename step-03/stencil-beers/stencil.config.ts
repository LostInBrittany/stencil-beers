import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-beers',
  globalStyle: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
