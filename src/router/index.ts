import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import UserView from '../views/UserView.vue';
import LoginView from '../views/LoginView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/user/:user',
    name: 'user',
    component: UserView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
