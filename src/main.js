import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'babel-polyfill'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import lottie from 'vue-lottie';

Vue.use(Vuetify,{iconfont: 'fa'});
Vue.config.productionTip = false;
Vue.component('lottie', lottie);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
