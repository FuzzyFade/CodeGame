import Vue from 'vue';
import Vuex from 'vuex';
import {
  ADD_AVA,
  ADD_COUNT,
  ADD_MEG,
  ADD_NAME,
  CLEAN_COUNT,
  INPUT_AVA,
  INPUT_EMAIL,
  INPUT_NAME
} from "./mutations-type";

Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    courses: [
      {
        name: "此电脑",
        img: "",
        size: {
          top: '',
          left: '',
          width: '',
          height: '',
        },
        initSize: {
          top: '',
          left: '',
          width: '',
          height: '',
        },
        computerPage: false,
        folderPage: false,
        lock: false,
        show: false,
        run: false,
      },
      {
        name: "文档",
        img: "",
        size: {
          top: '',
          left: '',
          width: '',
          height: '',
        },
        initSize: {
          top: '',
          left: '',
          width: '',
          height: '',
        },
        computerPage: false,
        folderPage: false,
        lock: false,
        show: false,
        run: false,
      },
      {
        name: "0.序章",
        img: "",
        size: {
          top: '',
          left: '',
          width: '',
          height: '',
        },
        initSize: {
          top: '',
          left: '',
          width: '',
          height: '',
        },
        computerPage: false,
        folderPage: false,
        lock: true,
        show: false,
        run: false,
      },
    ],
    register: {
      email: '',
      username: '',
      password: '',
      icon: 2,
    },
    login: {
      email: '',
      username: '',
      password: '',
      icon: 2,
      status: 0,
      token: '',
    },
  },

  mutations: {
    [ADD_COUNT](state, token) { // 第一个参数为 state 用于变更状态 登录
      sessionStorage.setItem("token", token);
      state.login.token = token
    },
    [CLEAN_COUNT](state, token) { // 退出登录
      sessionStorage.removeItem("token");
      state.login.token = token
    },
    [ADD_NAME](state, loginFrom) {
      state.register.username = loginFrom.username
    },
    [ADD_MEG](state, loginFrom) {
      state.register.email = loginFrom.email;
      state.register.password = loginFrom.password
    },
    [ADD_AVA](state, loginFrom) {
      state.register.icon = loginFrom.icon
    },
    [INPUT_AVA](state, loginFrom) {
      state.login.icon = loginFrom.icon
    },
    [INPUT_NAME](state, loginFrom) {
      state.login.username = loginFrom.username
    },
    [INPUT_EMAIL](state, loginFrom) {
      state.login.email = loginFrom.email
    }
  },
});

export default store;
