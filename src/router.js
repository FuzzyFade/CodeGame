import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './pages/Login/Login'
import Username from './pages/Login/Username'
import Password from './pages/Login/Password'
import Without from './pages/Login/Without'
import Email from './pages/Login/Email'
import Forget from './pages/Login/Forget'
import Start from './pages/Login/Start'

import Register from './pages/Register/Register'
import Page1 from './pages/Register/Page1'
import Page2 from './pages/Register/Page2'
import AvatarPage from "@/pages/Register/AvatarPage"
import Page4 from './pages/Register/Page4'

import Desktop from "@/pages/Desktop"

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login/username'
    },
    {
      path: '/desktop/',
      component: Desktop,
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/login/',
      component: Login,
      redirect: '/login/username',
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
          path: 'email',
          component: Email
        },
        {
          path: 'forget',
          component: Forget
        },
        {
          path: 'start',
          component: Start
        }
      ]
    },
    {
      path: '/register/',
      component: Register,
      redirect: '/register/first',
      children: [
        {
          path: 'first',
          component: Page1,
        },
        {
          path: 'second',
          component: Page2,
        },
        {
          path: 'third',
          component: AvatarPage,
        },
        {
          path: 'fourth',
          component: Page4,
        },
      ]
    }
  ]
});


export default router
