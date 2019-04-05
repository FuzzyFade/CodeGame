<template>
  <div>
    <div>
      <div class="containers">
        <div>
          <div class="AvatarBorder">
            <v-avatar
                    color="grey lighten-4"
                    size="108px"
            >
              <img alt="avatar" class="avatar" src="https://vuetifyjs.com/apple-touch-icon-180x180.png">
            </v-avatar>
          </div>
          <div style="line-height: 25px;font-size: 23px;letter-spacing: 1.3px">
            <span>{{loginForm.username}}</span>
          </div>
        </div>
        <div class="text-field">
          <v-text-field
                  :rules="[rules.empty]"
                  :type="'password'"
                  label="密码"
                  maxlength="16"
                  v-model="loginForm.password"
          ></v-text-field>
        </div>
        <div class="forget">
          <v-btn @click="forget" flat>
            <span class="forget_text">忘记密码？</span>
          </v-btn>
        </div>
      </div>
      <div>
        <div class="footer">
          <transition name="fade">
            <div class="next_step" v-show="loginForm.password">
              <div class="text2">
                <span style="font-size: 14px">下一步</span>
              </div>
              <v-btn @click="login" class="foot_btn" fab outline>
                <v-icon>fa-arrow-right</v-icon>
              </v-btn>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';
  import axios from 'axios'

  export default {
    name: "Password",
    data: () => ({
      loginForm: {
        username: '',
        password: ''
      },
      userToken: '',
      rules: {
        empty: value => !!value || '密码不可以为空'
      }
    }),
    created() {
      this.getName()
      //post用户名，请求个头像序号
    },
    methods: {
      getName() {
        this.loginForm.username = this.$route.query.user;
      },
      forget() {
        this.$router.push({path: '/login/forget'})
      },
      ...mapMutations(['changeLogin']),
      login() {
        let _this = this;
        let data = this.loginForm;
        if (this.loginForm.username === '' || this.loginForm.password === '') {
          alert('密码不能为空');
        } else {
          axios
            .post('/api/auth/login', data)
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
  .containers
    display flex
    display -webkit-flex
    flex-direction column
    justify-content start
    position: absolute
    bottom 0
    top 0
    left 0
    right 0

    .AvatarBorder
      margin-top 114px
      margin-bottom 24px

      .avatar
        width 108px
        height 108px
        border solid 1px #CFCFCF
        border-radius 54px

    .text-field
      margin-top 35px
      padding-right 48px
      padding-left 48px
      height 67px

    .forget
      margin-top 34px

      .forget_text
        color #585858
        font-size 16px
        letter-spacing .89px
        font-weight 400

  .footer
    width 100%
    height 90px
    position fixed
    bottom 0
    z-index 1

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

  .foot_btn
    width 50px
    height 50px
</style>
