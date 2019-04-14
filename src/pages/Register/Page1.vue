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
          <div style="line-height: 25px;font-size: 23px;letter-spacing: 1.3px;">
            <span>登记您的通行证</span>
          </div>
          <div class="text-field">
            <v-text-field
                    :rules="[rules.empty,error_message(alert)]"
                    @input="clean_error"
                    hint="最多输入 9 个字符"
                    label="用户名"
                    maxlength="9"
                    v-model="loginForm.username"
            ></v-text-field>
          </div>
        </div>
        <div style="height:auto;"></div>
      </div>
      <div>
        <div :style="{top:(docmHeight-98)+'px'}" class="footer">
          <div>
            <span>一旦确定就不可修改哦</span>
          </div>
          <transition name="fade">
            <v-btn @click="change"
                   flat
                   style="font-size: 16px"
                   v-show="loginForm.username"
            >> 嗯，我确定
            </v-btn>
          </transition>
        </div>
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
        loginForm: state => state.register
      }),
    },
    data: () => ({
      alert: false,
      url: '/api/auth/login',
      docmHeight: document.documentElement.clientHeight,
      rules: {
        empty: value => !!value || '用户名不可以为空'
      },
      defaultOptions: {animationData: animationData.default},
      animationSpeed: 1,
      anim: {}
    }),
    methods: {
      ...mapMutations({
        addName: 'ADD_NAME',
      }),
      handleAnimation(anim) {
        this.anim = anim
      },
      clean_error() {
        this.alert = false
      },
      error_message: alert => alert && '用户名已存在',
      data_cook(info) {
        info.message === 'unknown user' ? this.next_step() : (this.alert = true);
      },
      get_data(res) {
        const info = res.data;
        res.status === 200 && this.data_cook(info)
      },
      next_step() {
        this.addName(this.loginForm);
        this.$router.push({path: '/register/second'})
      },
      change() {
        const post_data = this.$qs.stringify({
          username: this.loginForm.username,
          password: this.loginForm.password,
        });
        this.$axios
          .post(this.url, post_data)
          .then(this.get_data);
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
      margin-bottom 8%

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
    height 110px
    z-index 0
</style>
