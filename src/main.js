import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import 'babel-polyfill'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import lottie from 'vue-lottie'
import axios from 'axios'
import qs from 'qs'

/* 后期迭代用！！！
// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (this.$store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `token ${this.$store.state.token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          this.$store.commit(types.LOGOUT);
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  }
);
*/

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

Vue.use(Vuetify);
Vue.config.productionTip = false;
Vue.component('lottie', lottie);

new Vue({
  router,
  store: store,
  render: h => h(App),
}).$mount('#app');
