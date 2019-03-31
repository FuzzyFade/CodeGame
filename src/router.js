import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './pages/Login'
import Register from './pages/Register'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
});

export default router
