var esbuild = require('rollup-plugin-esbuild');
var pkg = require('../package.json');

var version = pkg.version;

var banner =
  `/*!
 * ${pkg.name} ${version} (https://github.com/zenquan/js-lib-starter)
 * API https://github.com/zenquan/js-lib-starter/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} zenquan. All Rights Reserved
 * Licensed under MIT (https://github.com/zenquan/js-lib-starter/blob/master/LICENSE)
 */
`;

function getCompiler(loaders) {
  return esbuild({
    include: /\.[jt]s?$/, // default, inferred from `loaders` option
    exclude: /node_modules/,
    minify: process.env.NODE_ENV === 'production',
    loaders,
    // target: 'es2017',
  });
}

exports.name = 'js-lib-starter';
exports.banner = banner;
exports.getCompiler = getCompiler;
