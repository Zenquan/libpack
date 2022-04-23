import swc from 'unplugin-swc';
import typescript from '@rollup/plugin-typescript';
import esbuild from 'rollup-plugin-esbuild';
import pkg from '../package.json';

const version = pkg.version;

export const name = pkg.name;

export const banner = `/*!
 * ${pkg.name} ${version} (https://github.com/zenquan/${pkg.name})
 * API https://github.com/zenquan/${pkg.name}/blob/master/doc/api.md
 * Copyright 2021-${new Date().getFullYear()} zenquan. All Rights Reserved
 * Licensed under MIT (https://github.com/zenquan/${pkg.name}/blob/master/LICENSE)
 */
`;

export const isProd = process.env.NODE_ENV === 'production';

export const external = Object.keys(pkg.dependencies || {});

export const onwarn = (warning) => {
  if (
    warning.code === 'THIS_IS_UNDEFINED' ||
    (warning.code === 'CIRCULAR_DEPENDENCY' && warning.importer.includes('src/'))
  ) {
    return;
  }
  console.error(warning.message);
};

export const rollupConfig = {
  input: 'src/index.ts',
  external,
  onwarn,
};

const compiler = 'esbuild';
export const isTsc = compiler === 'typescript';

const compilerInstance = {
  swc: swc.rollup({
    minify: isProd,
    tsconfigFile: 'tsconfig.base.json',
  }),
  typescript: typescript({
    tsconfig: 'tsconfig.base.json',
    cacheDir: '.rollup.tscache',
  }),
  esbuild: esbuild({
    minify: isProd,
    tsconfig: 'tsconfig.base.json',
    target: 'es6',
  }),
};

export function getCompiler() {
  return compilerInstance[compiler];
}
