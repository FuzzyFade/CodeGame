import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './pages/Login/Login'
import Username from './pages/Login/Username'
import Password from './pages/Login/Password'
import Without from './pages/Login/Without'
import Forget from './pages/Login/Forget'

import Register from './pages/Register/Register'
import Page1 from './pages/Register/Page1'
import Page2 from './pages/Register/Page2'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login/',
      component: Login,
      children: [
        {
          path: 'username',
          component: Username
        },
        {
          path: 'password',
          component: Password
        },
        {
          path: 'without',
          component: Without
        },
        {
          path: 'forget',
          component: Forget
        }
      ]
    },
    {
      path: '/register/',
      component: Register,
      children: [
        {
          path: 'first',
          component: Page1
        },
        {
          path: 'second',
          component: Page2
        },
      ]
    }
  ]
});

export default router
