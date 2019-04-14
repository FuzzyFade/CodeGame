<template>
  <div>
    <div>
      <bg></bg>
      <div class="containers">
        <div>
          <div class="AvatarBorder">
            <div>
              <div class="AvatarBorder">
                <v-avatar size="160px">
                  <div>
                    <lottie :height="200"
                            :options="defaultOptions"
                            :width="200"
                            v-on:animCreated="handleAnimation"
                    >
                    </lottie>
                  </div>
                </v-avatar>
              </div>
            </div>
          </div>
          <div class="tile">
            <span>用户不存在，请注册一个新账户</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="footer">
        <v-btn @click="register" flat>
          <span class="footer_text">> 好的，这就去</span>
        </v-btn>
        <v-btn @click="login" flat>
          <span class="footer_text">> 返回登录</span>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import Bg from "@/components/BackGround"
  import * as animationData from "@/assets/Lottie/red_logo.json"
  import {mapMutations,mapState} from "vuex"

  export default {
    name: "Without",
    components: {
      Bg
    },
    data: () => ({
      defaultOptions: {animationData: animationData.default},
      animationSpeed: 1,
      anim: {}
    }),
    computed:{
      ...mapState({
        loginForm: state => state.login
      })
    },
    methods: {
      ...mapMutations({
        cleanName:'INPUT_NAME'
      }),
      handleAnimation(anim) {
        this.anim = anim;
      },
      register() {
        this.$router.push({path: '/register/first'})
      },
      login() {
        this.cleanName('');
        this.$router.push({path: '/login'})
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
      margin-bottom 74px

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
