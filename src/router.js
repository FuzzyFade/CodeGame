import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const router = new VueRouter({
    routes:[{
        path: '/login', component: require('./pages/Login.vue')
    },{
        path: '/register', component: require('./pages/Register.vue')
    },{
        path:'*',redirect:'/login'
    }]
});

export default router;
