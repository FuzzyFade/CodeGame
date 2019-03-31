<template>
  <div>
    <div class="container">
      <div>
        <div>
          <img alt="avatar" class="avatar" src="../assets/logo.png">
        </div>
        <span>新用户</span>
      </div>
      <div>
        <input placeholder="用户名" style="font-size: 16px" type="text" v-model="loginForm.username"/>
      </div>
      <!--<div>-->
      <!--<input typ¬e="text" v-model="loginForm.password" placeholder="密码"/>-->
      <!--</div>-->
    </div>
    <div>
      <div class="footer">
        <div class="register">
          <router-link class="btn1" tag="button" to="/register">注册</router-link>
          <div class="text1">
            <span style="font-size: 14px">注 册</span>
          </div>
        </div>
        <div class="next_step">
          <div class="text2">
            <span style="font-size: 14px">下一步</span>
          </div>
          <button @click="login" class="btn2">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';
  import axios from 'axios'

  export default {
    name: "Login",
    data: () => ({
      loginForm: {
        username: '',
        password: ''
      },
      userToken: ''
    }),
    methods: {
      ...mapMutations(['changeLogin']),
      login() {
        let _this = this;
        let data = this.loginForm;
        if (this.loginForm.username === '' || this.loginForm.password === '') {
          alert('账号或密码不能为空');
        } else {
          axios
            .post('/api/user/login', data)
            .then(res => {
              console.log(res.data);
              _this.userToken = 'Bearer ' + res.data.data.body.token;
              // 将用户token保存到vuex中
              _this.changeLogin({Authorization: _this.userToken});
              _this.$router.push('/home');
              alert('登陆成功');
            })
            .catch(error => {
              alert('账号或密码错误');
              console.log(error);
            });
        }
      },
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    display flex
    flex-direction column
    justify-content center

    .avatar
      width 140px
      height 140px

  .footer
    width 100%
    height 80px
    position fixed
    bottom 0
    z-index -1

    .register
      display flex
      position float
      float left
      margin-left 30px

      .text1
        display flex
        flex-direction column
        justify-content center
        margin-left 12px

      .btn1
        width 54px
        height 54px
        border-radius 27px

    .next_step
      display flex
      position float
      float right
      margin-right 30px

      .text2
        display flex
        flex-direction column
        justify-content center
        margin-right 12px

      .btn2
        width 54px
        height 54px
        border-radius 27px
</style>
