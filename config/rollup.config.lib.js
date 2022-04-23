import multi from '@rollup/plugin-multi-entry';
import { getDirs } from './utils';
import { getCompiler, external, onwarn } from './common';

const plugins = [multi(), getCompiler()];

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
      onwarn,
      plugins,
    });
  });
  return config;
};

export default [...formatConfig()];
