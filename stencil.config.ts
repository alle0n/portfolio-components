import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import resolvePlugin from '@rollup/plugin-node-resolve';

export const config: Config = {
  namespace: 'alle0n',
  plugins: [sass()],
  rollupPlugins: {
    before: [
      // Plugins injected before rollupNodeResolve()
      // resolvePlugin(),
    ],
    after: [
      // Plugins injected after commonjs()
      // nodePolyfills(),
    ],
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
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
