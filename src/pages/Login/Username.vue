<template>
  <div>
    <div>
      <bg></bg>
      <div class="containers">
        <div>
          <div class="AvatarBorder">
            <v-avatar size="160px">
              <div>
                <lottie :height="200"
                        :options="defaultOptions"
                        :width="200"
                        @animCreated="handleAnimation"
                >
                </lottie>
              </div>
            </v-avatar>
          </div>
          <div class="text-field">
            <v-text-field
                    :rules="[rules.empty]"
                    hint="最多输入 9 个字符"
                    label="用户名"
                    maxlength="9"
                    v-model="loginForm.username"
            ></v-text-field>
          </div>
        </div>
      </div>
      <div :style="{top:(docmHeight-98)+'px'}"
           class="footer"
      >
        <div class="register">
          <v-btn @click="register"
                 class="foot_btn"
                 fab
                 outline
          >
            <img alt="register" src="../../assets/icons/register.svg">
          </v-btn>
          <div class="text1">
            <span style="font-size: 13px">注 册</span>
          </div>
        </div>
        <transition name="fade">
          <div class="next_step" v-show="loginForm.username">
            <div class="text2">
              <span style="font-size: 13px">下一步</span>
            </div>
            <v-btn @click="change"
                   class="foot_btn"
                   fab
                   outline
            >
              <img alt="login" src="../../assets/icons/next_step.svg">
            </v-btn>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import Bg from "@/components/BackGround"
  import * as animationData from "@/assets/Lottie/logo.json"
  import {mapMutations, mapState} from "vuex"

  export default {
    name: "Username",
    components: {
      Bg
    },
    computed: {
      ...mapState({
        loginForm: state => state.login
      })
    },
    data: () => ({
      url: '/api/auth/login',
      docmHeight: document.documentElement.clientHeight,
      rules: {
        empty: value => !!value || '用户名不可以为空'
      },
      defaultOptions: {animationData: animationData.default},
      animationSpeed: 1,
      anim: {},
    }),
    methods: {
      ...mapMutations({
        inputName: 'INPUT_NAME',
        inputAva: 'INPUT_AVA'
      }),
      handleAnimation(anim) {
        this.anim = anim;
      },
      register() {
        this.$router.push({path: '/register/first'})
      },
      withoutUsername() {
        this.$router.push({path: '/login/without'})
      },
      enterPassword() {
        this.$router.push({path: '/login/password'})
      },
      success(info) {
        this.inputAva(info.data);
        this.inputName(this.loginForm);
        this.enterPassword()
      },
      dataCook(info) {
        (info.message === 'unknown user') && this.withoutUsername();
        (info.message === 'success') && this.success(info);
      },
      getData(res) {
        const info = res.data;
        res.status === 200 && this.dataCook(info);
      },
      change() {
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
    z-index 0

    .AvatarBorder
      margin-top 21%
      margin-bottom 74px

      .avatar
        width 108px
        height 108px
        border solid 1px #CFCFCF
        border-radius 54px

    .text-field
      margin-top 35px
      padding-right 50px
      padding-left 50px

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
