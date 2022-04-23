import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { name, banner, getCompiler, isProd, rollupConfig, onwarn } from './common';

export default {
  ...rollupConfig,
  output: {
    file: isProd ? 'dist/index.umd.min.js' : 'dist/index.umd.js',
    format: 'umd',
    // When export and export default are not used at the same time, set legacy to true.
    // legacy: true,
    name,
    banner: isProd ? '' : banner,
    globals: {
      'regenerator-runtime': 'regeneratorRuntime',
      dayjs: 'dayjs',
      clipboard: 'Clipboard',
      xlsx: 'xlsx',
      'file-saver': 'fileSaver',
      qs: 'qs',
    },
  },
  plugins: [
    nodeResolve({
      moduleDirectories: ['src'],
      preferBuiltins: true,
      extensions: ['.js', '.ts', 'jsx', '.tsx'],
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    getCompiler(),
  ],
};
