import { banner, getCompiler, rollupConfig, commonPlugins } from './common';

export default {
  ...rollupConfig,
  output: {
    file: 'dist/index.esm.js',
    format: 'es',
    // When export and export default are not used at the same time, set legacy to true.
    // legacy: true,
    banner,
  },
  plugins: [...commonPlugins, getCompiler()],
};
