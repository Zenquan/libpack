import path, { resolve, dirname } from 'path';
import { build, BuildOptions, buildSync } from 'esbuild';
import { cwd } from 'process';
import fs from 'fs';
import ora from 'ora';
import klawSync from 'klaw-sync';
import { parse, init } from 'es-module-lexer';
import vue from './plugins/esbuild-vue-plugin';
import pkg from '../package.json';

const PACKAGES_PATH = path.resolve(__dirname, '../src/');

export const componentEntrys = klawSync(PACKAGES_PATH, {
  nofile: true,
  depthLimit: 0,
}).map((dir: { path: string }) => dir.path + '/index.ts');

console.log('componentEntrys', componentEntrys);
async function run(options?: BuildOptions) {
  await build({
    outdir: `${cwd()}/dist/es`,
    bundle: true,
    entryPoints: [PACKAGES_PATH + '/index.ts', ...componentEntrys],
    plugins: [vue()],
    loader: { '.png': 'dataurl' },
    external: ['vue', `${pkg.name}/*`, '@vue/*', '@better-scroll/*', 'jpeg-js'],
    format: 'esm',
    minify: false,
    ...options,
  });
}

const spinner = ora('Build...').start();

Promise.all([
  run(),
  run({
    format: 'cjs',
    outdir: `${cwd()}/dist/lib`,
  }),
])
  .then(async () => {
    await combineDepsCss();
    spinner.succeed('Done !');
  })
  .catch(() => {
    spinner.succeed('Failed !');
  });

async function combineDepsCss() {
  const PATH_RE = /^\.*\//;
  const alljs = klawSync(`${cwd()}/dist/es`, {
    nofile: true,
    depthLimit: 0,
  }).map((dir: { path: string }) => dir.path + '/index.js');
  await init;
  alljs.forEach((js: string) => {
    const [imports] = parse(fs.readFileSync(js, 'utf-8'));
    const cssFile = resolve(dirname(js), './index.css');

    if (fs.existsSync(cssFile)) {
      const selfCss = `import './index.css'\n`;
      const depsCss = imports
        .flat()
        .map((item) => item.n)
        .filter((n) => n && !n.endsWith('utils'))
        .filter((n) => n && PATH_RE.test(n))
        .map((n) => `import '${n}/index.css'`)
        .join('\n');
      const styleFile = resolve(dirname(js), './style.js');

      fs.writeFileSync(styleFile, depsCss + '\n' + selfCss);

      buildSync({
        entryPoints: [styleFile],
        format: 'cjs',
        allowOverwrite: true,
        outfile: resolve(dirname(js).replace('/es/', '/lib/'), './style.js'),
      });
    }
  });
}
