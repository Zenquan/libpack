import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import CleanCSS from 'clean-css';
import fs from 'fs';
import multi from '@rollup/plugin-multi-entry';
import { getDirs } from './utils';
import { getCompiler, external, onwarn } from './common';
import vueJsx from 'rollup-plugin-vue-jsx-compat';

const plugins = (name) => {
  return [
    multi(),
    vueJsx(),
    getCompiler(),
    vue({
      css: false,
    }),
    css({
      output(style) {
        if (name === 'index.js') return;
        const fileNameArr = name.split('/');
        const cssFileName = `dist/lib/${name.replace(/.vue/, '')}.css`;
        const cssDirName = `dist/lib/${fileNameArr[0]}`;
        !fs.existsSync('dist') && fs.mkdirSync('dist');
        !fs.existsSync('dist/lib') && fs.mkdirSync('dist/lib');
        !fs.existsSync(cssDirName) && fs.mkdirSync(cssDirName);
        fs.writeFileSync(cssFileName, new CleanCSS().minify(style).styles);
      },
    }),
  ];
};

const formatConfig = function () {
  let config = [];
  const dirs = getDirs('src');
  dirs.forEach(function (item) {
    const name = item.replace(/\.ts/, '.js');

    config.push({
      input: `src/${item}`,
      output: {
        file: `dist/lib/${name}`,
        format: 'cjs',
        name,
      },
      external,
      onwarn,
      plugins: plugins(name),
    });
  });
  return config;
};

export default [...formatConfig()];
