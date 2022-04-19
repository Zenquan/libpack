import multi from '@rollup/plugin-multi-entry';
import { getDirs, external } from './utils';
import { getCompiler } from './common';

const plugins = [
  multi(),
  getCompiler()
];

const formatConfig = function () {
  let config = [];
  const dirs = getDirs('src');
  dirs.forEach(function (item) {
    const name = item.replace(/\.ts/, '.js');

    config.push({
      input: `src/${item}`,
      output: {
        file: `dist/lib/${name}`,
        format: 'es',
        name,
      },
      external,
      plugins,
    });
  });
  return config;
};

export default [
  ...formatConfig()
]
