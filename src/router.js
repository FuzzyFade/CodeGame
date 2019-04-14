import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './pages/Login/Login'
import Username from './pages/Login/Username'
import Password from './pages/Login/Password'
import Without from './pages/Login/Without'
import Forget from './pages/Login/Forget'
import Start from './pages/Login/Start'
import Email from './pages/Login/Email'

import Register from './pages/Register/Register'
import Page1 from './pages/Register/Page1'
import Page2 from './pages/Register/Page2'
import AvatarPage from "@/pages/Register/AvatarPage"
import Page4 from './pages/Register/Page4'
import Page5 from './pages/Register/Page5'

import Desktop from "@/pages/Desktop"

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
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
          path: 'forget',
          component: Forget
        },
        {
          path: 'email',
          component: Email
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
        {
          path: 'fifth',
          component: Page5,
        },
      ]
    }
  ]
});

/*router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (this.$store.state.token) {  // 通过vuex state获取当前的token是否存在
      next();
    }
    else {
      next({
        path: '/desktop',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
});*/

export default router
