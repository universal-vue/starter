import { createRouter } from 'vue-router';
import { createRouterHistory } from '@uvue/core';

import Home from './views/Home.vue';

export default () => {
  return createRouter({
    history: createRouterHistory(),
    routes: [
      {
        path: '/',
        component: Home,
      },
    ],
  });
};
