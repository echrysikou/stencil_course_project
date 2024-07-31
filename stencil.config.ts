import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'advancedstencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',  // used when you have the entire FE App in stencil and want to upload it on a server
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
  // bundles: [
    // {components:['']} // the components added in this array will be bundled together. Only do it if you know what you're doing

  // ]
};
