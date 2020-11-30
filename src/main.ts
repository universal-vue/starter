import { createApp } from '@uvue/core';
import App from './App.vue';
import createRouter from './router';

export default createApp(App, app => {
  const router = createRouter();

  app.use(router);
});
