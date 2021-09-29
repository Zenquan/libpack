# js-lib-starter
![](https://img.shields.io/badge/version-0.1.0-orange)
![](https://img.shields.io/github/license/Zenquan/js-lib-starter)
> 基于rollup+jsdoc+vuepress的js库构建模板, 快速搭建JavaScript lib开发环境。

## 特性

- 通过github actions自动部署到npm
- 规范化注释后，由jsdoc生成markdown，自动化生成文档，从某种意义上来说养成写文档和注释的习惯。
- 可使用vercel，自动化部署文档
- 可使用Github Pages 部署文档
- 规范化git commit
- 可生成umd/esm等js文件
- 详细的使用案例
- 可使用mocha编写详细的测试代码
- 集成测试覆盖率（istanbul+nyc）
- 集成代码风格校验(eslint)
- 集成ISSUE_TEMPLATE

## 工作流程

![截屏2021-09-16 下午1.27.28.png](https://i.loli.net/2021/09/16/lPBFa4pIDyitCAN.png)

## 使用

**script**
```json
{
  // 构建js库和文档
  "build": "npm run clean && npm run build:self && npm run build:esm && npm run build:aio && npm run build:aio.min && npm run docs:build",
  // 由代码中注释生成markdown文档
  "docs:jsdoc2md": "rimraf docs/pages/folder1/api.md && npx jsdoc2md src/* >> docs/pages/folder1/api.md", 
  // 由代码中注释生成markdown文档，并且生成vuepress静态资源文件
  "docs:build": "npm run docs:jsdoc2md && npx vuepress build docs",
  // 由代码中注释生成markdown文档, 并在本地运行vuepress 
  "docs:dev": "npm run docs:jsdoc2md && npx vuepress dev docs", 
  // 部署文档到Github Page
  "deploy:gh": "gh-pages -d docs/.vuepress/dist", 
}
```
## 使用案例
[jrfe-utils](https://github.com/Zenquan/jrfe-utils)

```bash
npm i @jomsou/utils -S
or
yarn add @jomsou/utils -S
```

- 在原生js中使用

```html
<script src="xx/dist/index.aio.js"></script>
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

## PR流程

- fork
- contribute
- npm run deploy
- git push
- merge

**加功能时**
- 开新分支 -> V版本-B功能 or feature/A同学/V版本-B功能
- 修改版本号 -> v0.1.0 -> v0.1.1

**commit**
- A: "添加一个新的功能模块"
- M: "更新一个功能模块"
- B: "构建静态资源"
- F: "修复 X 页面的问题"

## 更新日志
[CHANGELOG.md](./docs/pages/folder1/CHANGELOG.md)
