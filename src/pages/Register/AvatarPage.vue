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
              <img alt="avatar" class="avatar" src="https://avatars2.githubusercontent.com/u/25416941?s=460&v=4">
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
        <div class="footer" :style="{top:(docmHeight-98)+'px'}">
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
  export default {
    name: "AvatarPage",
    data: () => ({
      docmHeight: document.documentElement.clientHeight,
      loginForm: {
        email: '',
        username: '',
        password: ''
      },
      rules: {
        empty_email: value => !!value || '邮箱不可以为空',
        empty_pwd: value => !!value || '密码不可以为空',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || '请输入正确的邮箱地址'
        },
        pwd: value => value.length >= 8 || '长度为8-16个字符'
      }
    }),
    created() {
      this.getName()
    },
    methods: {
      show_button() {
        return this.loginForm.email && this.loginForm.password
      },// 展示确定按钮
      getName() {
        this.loginForm.username = this.$route.query.user;
      },
      change() {
        // ...code 还会发一个请求给后段，查询是否由其人，返回一个是或否
        this.$router.push({
          path: '/login/password',
          query: {
            user: this.loginForm.username
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
      margin-top 114px
      margin-bottom 24px

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
