<template>
  <div>
    <div>
      <bg></bg>
      <div class="containers">
        <div>
          <div class="AvatarBorder">
            <v-avatar
                    size="160px"
            >
              <div>
                <lottie :height="200"
                        :width="200"
                        :options="defaultOptions"
                        @animCreated="handleAnimation"
                >
                </lottie>
              </div>
            </v-avatar>
          </div>
          <div class="tile">
            <span>{{"你好 "+loginForm.username}}</span>
          </div>
          <div class="text-field">
            <div style="height:70px">
              <v-text-field
                      :rules="[rules.empty_email,rules.email]"
                      label="邮箱"
                      maxlength="40"
                      v-model="loginForm.email"
              ></v-text-field>
            </div>
            <v-text-field
                    :rules="[rules.empty_pwd,rules.pwd]"
                    :type="'password'"
                    label="密码"
                    maxlength="16"
                    style="line-height: 15px"
                    v-model="loginForm.password"
            ></v-text-field>
          </div>
        </div>
        <div style="height:auto;"></div>
      </div>
      <div>
        <div class="footer">
          <transition name="fade">
            <v-btn flat
                   style="font-size: 16px"
                   v-show="show_button()"
            >> 确认信息
            </v-btn>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bg from "@/components/BackGround"
  import * as animationData from "@/assets/Lottie/logo.json"

  export default {
    name: "Username",
    components:{
      Bg
    },
    data: () => ({
      loginForm: {
        email: '',
        username: '',
        password: ''
      },
      rules: {
        empty_email: value => !!value || '邮箱不可以为空',
        empty_pwd: value => !!value || '密码不可以为空',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || '请输入正确的邮箱地址'
        },
        pwd: value => value.length >= 8 || '长度为8-16个字符'
      },
      defaultOptions: {animationData: animationData.default},
      animationSpeed: 1,
      anim: {}
    }),
    created() {
      this.getName()
    },
    methods: {
      show_button() {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(this.loginForm.email) && this.loginForm.password.length >= 8
      },
      handleAnimation(anim) {
        this.anim = anim;
        console.log(anim); //这里可以看到 lottie 对象的全部属性
      },
      getName() {
        this.loginForm.username = this.$route.query.user;
      },
      change() {
        this.$router.push({
          path: '/register/third',
          params: {
            email: this.loginForm.email,
            user: this.loginForm.username,
            pwd: this.loginForm.password,
          }
        })
      }
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
      margin-top 21%
      margin-bottom 8%

      .avatar
        width 108px
        height 108px
        border solid 1px #CFCFCF
        border-radius 54px

    .tile
      line-height 25px
      font-size 23px
      letter-spacing 1.3px

    .text-field
      margin-top 35px
      padding-right 48px
      padding-left 48px

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
        display -webkit-flex
        flex-direction column
        justify-content center
        margin-left 11.64px

    .next_step
      display flex
      display -webkit-flex
      position float
      float right
      margin-right 30px

      .text2
        display flex
        display -webkit-flex
        flex-direction column
        justify-content center
        margin-right 12px

  .foot_btn
    width 50px
    height 50px
</style>
