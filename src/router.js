import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './pages/Login/Login'
import Username from './pages/Login/Username'
import Password from './pages/Login/Password'

import Register from './pages/Register/Register'
import Page1 from './pages/Register/Page1'

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
          path:'username',
          component:Username
        },
        {
          path:'password',
          component:Password
        }
      ]
    },
    {
      path: '/register/',
      component: Register,
      children:[
        {
          path:'first',
          component:Page1
        },
      ]
    }
  ]
});

export default router
