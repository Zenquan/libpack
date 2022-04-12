import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { name, banner, getCompiler } from './common';
import { isProd } from './utils';

export default {
  input: 'src/index.ts',
  output: {
    file: isProd ? 'dist/index.umd.min.js' : 'dist/index.umd.js',
    format: 'umd',
    // When export and export default are not used at the same time, set legacy to true.
    // legacy: true,
    name,
    banner: isProd ? '' : banner,
  },
  plugins: [
    nodeResolve({
      extensions: ['.js']
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    getCompiler(),
  ]
};
