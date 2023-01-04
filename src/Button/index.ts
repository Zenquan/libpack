import Button from './Button.vue';

Button.install = (app: any) => {
  app.component(Button.name, Button);
};

export default Button;
