import swc from 'unplugin-swc'
import { isProd } from './utils';
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
  return swc.rollup({
    minify: isProd,
    tsconfigFile: 'tsconfig.base.json',
  })
}
