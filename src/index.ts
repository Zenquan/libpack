import Button from './Button';

const components = [Button];

const install = (app: any) => {
  components.map((component) => {
    app.use(component);
  });
};

export { install, Button };

export default {
  install,
};
