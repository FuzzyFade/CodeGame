<template>
  <div>
    <bg></bg>
    <div class="containers">
      <div>
        <div class="AvatarBorder">
          <avatar :state="loginForm.icon" size="108px"></avatar>
        </div>
        <div style="line-height: 25px;font-size: 23px;letter-spacing: 1.3px">
          <span>欢迎回来</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <lottie :height="60"
              :options="defaultOptions"
              :width="200"
              v-on:animCreated="handleAnimation"
      >
      </lottie>
    </div>
  </div>
</template>

<script>
  import * as animationData from "@/assets/Lottie/loading.json"
  import Bg from "@/components/BackGround"
  import Avatar from "@/components/Avatar"
  import {mapState} from 'vuex';

  export default {
    name: "Start",
    components: {
      Bg,
      Avatar
    },
    data: () => ({
      defaultOptions: {animationData: animationData.default},
      animationSpeed: 1,
      anim: {}
    }),
    created() {
      this.gogogo()
    },
    computed: {
      ...mapState({
        loginForm: state => state.login
      })
    },
    methods: {
      gogogo() {
        const TIME_COUNT = 5;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              clearInterval(this.timer);
              this.timer = null;
              this.$router.push({path: '/desktop'})
            }
          }, 1000)
        }
      },
      handleAnimation(anim) {
        this.anim = anim;
      },
    }
  }
</script>

<style lang="stylus" scoped>
  .containers
    display flex
    display -webkit-flex
    flex-direction column
    justify-content center
    position absolute
    bottom 0
    top 0
    left 0
    right 0

    .AvatarBorder
      margin-bottom 24px

      .avatar
        width 108px
        height 108px
        border solid 1px #CFCFCF
        border-radius 54px

  .footer
    position fixed
    width 100%
    height 70px
    bottom 0
    z-index 0

  .foot_btn
    width 50px
    height 50px
</style>
