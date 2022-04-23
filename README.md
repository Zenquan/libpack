# js-lib-starter

![](https://img.shields.io/badge/version-0.1.0-orange) ![](https://img.shields.io/github/license/Zenquan/js-lib-starter)

> js 库构建模板, 快速搭建 JavaScript lib 开发环境。

## 特性

- 通过 github actions 自动部署到 npm
- 规范化注释后，由 jsdoc 生成 markdown，自动化生成文档，从某种意义上来说养成写文档和注释的习惯。
- 可使用 vercel，自动化部署文档
- 可使用 Github Pages 部署文档
- 规范化 git commit
- 可生成 umd/esm 等 js 文件
- 支持打包成按需加载
- 详细的使用案例
- 可使用 mocha 编写详细的测试代码
- 集成测试覆盖率（istanbul+nyc）
- 集成代码风格校验(eslint)
- 集成 ISSUE_TEMPLATE

## @rollup/plugin-typescript vs swc 打包耗时对比

|         | typescript | swc    | typescript/swc |
| ------- | ---------- | ------ | -------------- |
| esm     | 3.3s       | 315ms  | 10.48 倍       |
| cjs     | 3.1s       | 344ms  | 9.01 倍        |
| cjs:min | 2.9s       | 363ms  | 8.00 倍        |
| umd     | 3s         | 452ms  | 6.64 倍        |
| umd:min | 3.1s       | 475ms  | 6.53 倍        |
| lib     | 3.894s     | 1.271s | 3.06 倍        |
| all     | 19.294s    | 3.22s  | 5.99 倍        |

## 工作流程

![截屏2021-09-16 下午1.27.28.png](https://i.loli.net/2021/09/16/lPBFa4pIDyitCAN.png)

## 使用

**script**

```json
{
  // 构建js库和文档
  "build": "npm run clean && npm run build:self && npm run build:esm && npm run build:aio && npm run build:umd.min && npm run docs:build",
  // 由代码中注释生成markdown文档
  "docs:jsdoc2md": "rimraf docs/pages/folder1/api.md && npx jsdoc2md src/* >> docs/pages/folder1/api.md",
  // 由代码中注释生成markdown文档，并且生成vuepress静态资源文件
  "docs:build": "npm run docs:jsdoc2md && npx vuepress build docs",
  // 由代码中注释生成markdown文档, 并在本地运行vuepress
  "docs:dev": "npm run docs:jsdoc2md && npx vuepress dev docs",
  // 部署文档到Github Page
  "deploy:gh": "gh-pages -d docs/.vuepress/dist"
}
```

## 使用案例

[jrfe-utils](https://github.com/Zenquan/jrfe-utils)

```bash
npm i @jomsou/utils -S
or
yarn add @jomsou/utils -S
```

- 在原生 js 中使用

```html
<script src="xx/dist/index.umd.js"></script>
<script>
    const {
      xxx,
      ...
    } = window['@jomsou/utils'];
<script>
```

- 在框架中使用

```js
import JrfeUtils from '@jomsou/utils';
const { xxx, ... } = JrfeUtils
or
import { xxx } from '@jomsou/utils';
```

## PR 流程

- fork
- contribute
- npm run deploy
- git push
- merge

**加功能时**

- 开新分支 -> V 版本-B 功能 or feature/A 同学/V 版本-B 功能
- 修改版本号 -> v0.1.0 -> v0.1.1

**commit**

- A: "添加一个新的功能模块"
- M: "更新一个功能模块"
- B: "构建静态资源"
- F: "修复 X 页面的问题"

## 更新日志

[CHANGELOG.md](./docs/pages/folder1/CHANGELOG.md)
