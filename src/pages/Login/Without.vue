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
          <div style="line-height: 25px;font-size: 18px;letter-spacing: 1.3px;">
            <span>{{"用户不存在，请注册一个新账户"}}</span>
          </div>
        </div>
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
  export default {
    name: "Without",
    methods: {
      register() {
        this.$router.push({path: '/register/first'})
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
