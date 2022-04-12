import esbuild from 'rollup-plugin-esbuild'
import pkg from '../package.json';

const version = pkg.version;

export const name = pkg.name;
export const banner = `/*!
 * ${pkg.name} ${version} (https://github.com/zenquan/${pkg.name})
 * API https://github.com/zenquan/${pkg.name}/blob/master/doc/api.md
 * Copyright 2021-${new Date().getFullYear()} zenquan. All Rights Reserved
 * Licensed under MIT (https://github.com/zenquan/${
  pkg.name
}/blob/master/LICENSE)
 */
`;

export function getCompiler() {
  return esbuild({
    include: /\.[jt]sx?$/, // default, inferred from `loaders` option
    exclude: /node_modules/,
    minify: process.env.NODE_ENV === 'production',
    target: 'esnext',
    jsx: 'transform', // default, or 'preserve'
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    tsconfig: '../tsconfig.json',
  });
}
