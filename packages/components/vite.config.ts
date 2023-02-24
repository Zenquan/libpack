import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pkg from './package.json';
import dts from 'vite-plugin-dts';
import DefineOptions from 'unplugin-vue-define-options/vite';
// import { changeAliasName } from '@libpack/utils';

function changeAliasName(str: string) {
  return str.replace(/@/, '').replace(/\//g, '-');
}

export default defineConfig({
  build: {
    //压缩
    minify: false,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        dir: 'dist',
      },
    },
    lib: {
      entry: './index.ts',
      name: changeAliasName(pkg.name),
      fileName: changeAliasName(pkg.name),
      formats: ['es', 'umd', 'cjs'],
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: 'src',
      cleanVueFileName: true,
      outputDir: ['./dist/es', './dist/lib'],
      tsConfigFilePath: '../../tsconfig.json',
      include: ['src'],
      exclude: ['src/components.d.ts'],
    }),
    DefineOptions(),
  ],
});
