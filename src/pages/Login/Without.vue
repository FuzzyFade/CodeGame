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
          <div class="tile">
            <span>用户不存在，请注册一个新账户</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="footer">
        <transition name="fade">
          <v-btn flat>
            <span class="footer_text">> 好的，这就去</span>
          </v-btn>
        </transition>
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
      margin-bottom 100px

      .avatar
        width 108px
        height 108px
        border solid 1px #CFCFCF
        border-radius 54px

    .tile
      line-height 25px
      font-size 17px
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

    .footer_text
      font-size 16px
      letter-spacing 0.89px

  .foot_btn
    width 50px
    height 50px
</style>
