<template>
  <div>
    <div>
      <bg></bg>
      <div class="containers">
        <div>
          <div class="AvatarBorder">
            <avatar :state="loginForm.icon" size="108px"></avatar>
          </div>
          <div class="tile1">
            <span>我们已将验证码发送到</span>
          </div>
          <div class="tile2">
            <span>{{loginForm.email}}</span>
          </div>
        </div>
        <div class="text-field">
          <security-code @input="cleanError" v-model="authCode"></security-code>
        </div>
        <div class="forget">
          <span>{{message}}</span>
        </div>
        <div>
          <v-btn @click="reSendMessage" flat v-show="showReSend">
            <span>{{"重新发送验证码"}}</span>
          </v-btn>
          <v-btn disabled flat v-show="!showReSend">
            <span>{{count + "秒后获取验证码"}}</span>
          </v-btn>
        </div>
      </div>
      <div>
        <div class="footer">
          <transition name="fade">
            <v-btn @click="submit"
                   flat
                   style="font-size: 16px"
                   v-show="authCode.length === 4"
            >
              <span>> 填完了</span>
            </v-btn>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Avatar from "@/components/Avatar"
  import Bg from "@/components/BackGround"
  import SecurityCode from '@/components/SecurityCode'
  import {mapMutations, mapState} from 'vuex'

  export default {
    name: "Forget",
    components: {
      Bg,
      SecurityCode,
      Avatar
    },
    computed: {
      ...mapState({
        loginForm: state => state.login
      })
    },
    data: () => ({
      showReSend: true,
      count: '',
      timer: null,
      message: '',
      url: '/api/auth/code',
      authCode: '',
    }),
    methods: {
      ...mapMutations({
        addCount: 'ADD_COUNT'
      }),
      reSendMessage() {
        // function
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.showReSend = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.showReSend = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }
      },
      cleanError() {
        this.message = ""
      },
      timedOut() {
        this.message = "验证码错误"
      },
      nextStep(info) {
        this.message = "";
        this.addCount(info.data);
        this.$router.push({path: '/login/start'})
      },
      dataCook(info) {
        info.message === 'success' ? this.nextStep(info) : this.timedOut()
      },
      getData(res) {
        const info = res.data;
        res.status === 200 && this.dataCook(info)
      },
      submit() {
        const postData = this.$qs.stringify({
          username: this.loginForm.username,
          email: this.loginForm.email,
          code: this.authCode
        });
        this.$axios
          .post(this.url, postData)
          .then(this.getData)
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
