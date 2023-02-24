import * as components from './src';
export * from './src';
import { App } from 'vue';

export default {
  install: (app: App) => {
    for (let c in components) {
      app.use(components[c]);
    }
  },
};
