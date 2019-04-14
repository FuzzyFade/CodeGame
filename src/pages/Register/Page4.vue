<template>
  <div>
    <div>
      <bg></bg>
      <div class="containers">
        <div>
          <div class="AvatarBorder">
            <avatar :state="loginForm.icon" size="108px"></avatar>
          </div>
          <div class="tile">
            <span>{{loginForm.username}}</span>
          </div>
          <div class="text">
            <span>我们给你发送了一个确认邮件</span>
          </div>
          <div class="text-field">
            <security-code @input="cleanError"
                           v-model="authCode"
            ></security-code>
          </div>
          <div style="color: #4b4b4b">
            <span>{{message}}</span>
          </div>
        </div>
      </div>
      <div>
        <div :style="{top:(docmHeight-98)+'px'}" class="footer">
          <transition name="fade">
            <v-btn @click="submit"
                   flat
                   style="font-size: 16px"
                   v-show="authCode.length === 4"
            >> 填完了
            </v-btn>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Avatar from "@/components/Avatar";
  import Bg from "@/components/BackGround";
  import {mapMutations, mapState} from "vuex"
  import SecurityCode from '@/components/SecurityCode'

  export default {
    name: "Page4",
    components: {
      Avatar,
      Bg,
      SecurityCode
    },
    data: () => ({
      message: '',
      authCode: '',
      url: '/api/auth/con',
      docmHeight: document.documentElement.clientHeight,
    }),
    computed: {
      ...mapState({
        loginForm: state => state.register
      })
    },
    methods: {
      ...mapMutations({
        attachName: 'INPUT_NAME',
        attachAva: 'INPUT_AVA'
      }),
      timedOut() {
        this.message = "验证码超时"
      },
      wrongCode() {
        this.message = "验证码错误"
      },
      nextStep() {
        this.message = "";
        this.$router.push({path: '/register/fifth'})
      },
      cleanError() {
        this.message = ""
      },
      dataCook(info) {
        (info.message === 'success') && this.nextStep();
        (info.message === 'wrong code') && this.wrongCode();
        (info.message === 'Timed out') && this.timedOut()
      },
      getData(res) {
        const info = res.data;
        res.status === 200 && this.dataCook(info)
      },
      submit() {
        const postData = this.$qs.stringify({
          email:this.loginForm.email,
          code:this.authCode
        });
        this.$axios
          .post(this.url,postData)
          .then(this.getData);
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
    position absolute
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
      margin-bottom 36px
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
