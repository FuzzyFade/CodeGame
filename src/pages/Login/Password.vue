<template>
  <div>
    <div>
      <bg></bg>
      <div class="containers">
        <div class="AvatarBorder">
          <avatar :state="loginForm.icon" size="108px"></avatar>
        </div>
        <div style="line-height: 25px;font-size: 23px;letter-spacing: 1.3px">
          <span>{{loginForm.username}}</span>
        </div>
        <div class="text-field">
          <v-text-field :messages="[]"
                        :rules="[rules.empty,errorMessage(alert)]"
                        :type="'password'"
                        @input="clean_error"
                        label="密码"
                        maxlength="16"
                        v-model="loginForm.password"
          ></v-text-field>
        </div>
        <div class="forget">
          <v-btn @click="toForget" flat>
            <span class="forget_text">忘记密码？</span>
          </v-btn>
        </div>
      </div>
      <div>
        <div :style="{top:(docmHeight-98)+'px'}" class="footer">
          <transition name="fade">
            <div class="next_step" v-show="showButton()">
              <div class="text2">
                <span style="font-size: 14px">下一步</span>
              </div>
              <v-btn @click="login" class="foot_btn" fab outline>
                <img alt="next_step" src="../../assets/icons/next_step.svg">
              </v-btn>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bg from "@/components/BackGround"
  import Avatar from "@/components/Avatar"
  import {mapMutations, mapState} from 'vuex'

  export default {
    name: "Password",
    components: {
      Bg,
      Avatar
    },
    data: () => ({
      alert: false,
      url: '/api/auth/login',
      docmHeight: document.documentElement.clientHeight,
      userToken: '',
      rules: {
        empty: value => !!value || '密码不可以为空',
      },
    }),
    computed: {
      ...mapState({
        loginForm: state => state.login
      })
    },
    methods: {
      ...mapMutations({
        addCount: 'ADD_COUNT'
      }),
      cleanError() {
        this.alert = false
      },
      errorMessage: alert => alert && '密码错误',
      toForget() {
        this.$router.push({path: '/login/email'})
      },
      nextStep(info) {
        this.addCount(info.data);
        this.$router.push({path: '/login/start'})
      },
      showButton() {
        return this.loginForm.password.length > 0
      },
      dataCook(info) {
        info.message === 'wrong password' && (this.alert = true);
        info.status === 1 && this.nextStep(info)
      },
      getData(res) {
        const info = res.data;
        res.status === 200 && this.dataCook(info)
      },
      login() {
        const postData = this.$qs.stringify({
          username: this.loginForm.username,
          password: this.loginForm.password
        });
        this.$axios
          .post(this.url, postData)
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

    .text-field
      margin-top 35px
      padding-right 48px
      padding-left 48px
      height 67px

    .forget
      margin-top 34px

      .forget_text
        color #585858
        font-size 16px
        letter-spacing .89px
        font-weight 400

  .footer
    position fixed
    width 100%
    height 90px
    z-index 0

  .register
    display flex
    position flex
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
