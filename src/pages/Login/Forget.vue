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
          <div class="tile1">
            <span>我们已将验证码发送到</span>
          </div>
          <div class="tile2">
            <span>{{loginForm.email}}</span>
          </div>
        </div>
        <div class="text-field">
          <security-code v-model="authCode"></security-code>
        </div>
        <div class="forget">
        </div>
      </div>
      <div>
        <div class="footer">
          <transition name="fade">
            <v-btn flat>
              <span>重新发送验证码</span>
            </v-btn>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SecurityCode from '@/components/SecurityCode'
  export default {
    name: "Forget",
    components:{
      SecurityCode
    },
    data: () => ({
      loginForm: {
        username: '',
        password: '',
        email: '1339184537@qq.com'
      },
      authCode:'',
      userToken: '',
      rules: {
        empty: value => !!value || '密码不可以为空'
      }
    }),
    methods: {
      getName() {
        this.loginForm.username = this.$route.query.user;
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

    .tile1
      line-height 25px
      font-size 16px
      letter-spacing .89px

    .tile2
      margin-top 13px
      line-height 25px
      font-size 30px
      letter-spacing .89px

    .text-field
      margin-top 35px
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
