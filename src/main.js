import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import 'babel-polyfill'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import lottie from 'vue-lottie';
import axios from 'axios'
import qs from 'qs';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

Vue.use(Vuetify);
Vue.config.productionTip = false;
Vue.component('lottie', lottie);


axios.interceptors.response.use(function(response){
  return response;
},function(error){
  return Promise.reject(error);
});

new Vue({
  router,
  store: store,
  render: h => h(App),
}).$mount('#app');
