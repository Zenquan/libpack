import GenerateEntry from 'rollup-generate-entry';
import { getDirs } from './utils';
import { getCompiler } from './common';

const plugins = [
  GenerateEntry(),
  getCompiler()
];

const formatConfig = function () {
  let config = [];
  const dirs = getDirs('src');
  dirs.forEach(function (item) {
    config.push({
      input: 'src/' + item,
      output: {
        file: 'dist/' + item,
        format: 'es',
        name: item
      },
      plugins: plugins
    });
  });
  return config;
};

console.log('>>>', formatConfig());
export default [
  ...formatConfig()
]
