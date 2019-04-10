<template>
  <div>
    <div>
      <bg></bg>
      <div class="containers">
        <div>
          <div class="AvatarBorder">
            <avatar :state="loginForm.ava" size="108px"></avatar>
          </div>
          <div class="tile">
            <span>{{loginForm.username}}</span>
          </div>
          <div class="text">
            <span>“那么，就要开始了。”</span>
          </div>
        </div>
      </div>
      <div>
        <div :style="{top:(docmHeight-98)+'px'}" class="footer">
          <transition name="fade">
            <v-btn @click="submit" flat style="font-size: 26px">确认</v-btn>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Avatar from "@/components/Avatar";
  import Bg from "@/components/BackGround";
  import {mapMutations,mapState} from "vuex"

  export default {
    name: "Page4",
    components: {
      Avatar,
      Bg
    },
    data: () => ({
      docmHeight: document.documentElement.clientHeight,
    }),
    computed: {
      ...mapState({
        loginForm: state => state.register
      })
    },
    methods: {
      ...mapMutations({attach_name:'ATTACH_NAME'}),
      submit() {
        //提交loginForm
        this.attach_name(this.loginForm);
        this.$router.push({
          path: '/login',
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
      font-size 25px
      letter-spacing 1.3px

    .text
      margin-top 26px
      line-height 25px
      font-size 19px
      letter-spacing 1.06px

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
