import { banner, getCompiler } from './common';
import { isProd, rollupConfig } from './common';

export default {
  ...rollupConfig,
  output: {
    file: isProd ? 'dist/index.cjs.min.js' : 'dist/index.cjs.js',
    format: 'cjs',
    // When export and export default are not used at the same time, set legacy to true.
    // legacy: true,
    banner,
  },
  plugins: [getCompiler()],
};
