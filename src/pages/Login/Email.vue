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
        <div style="line-height: 25px;margin-top:10px;font-size: 16px;letter-spacing: 1.3px">
          <span>请输入你的邮箱</span>
        </div>
        <div class="text-field">
          <v-text-field :rules="[rules.empty_email,rules.email,error_message(alert)]"
                        @input="clean_error"
                        label="输入您注册的邮箱"
                        v-model="loginForm.email"
          ></v-text-field>
        </div>
      </div>
      <div>
        <div :style="{top:(docmHeight-98)+'px'}" class="footer">
          <transition name="fade">
            <div class="next_step" v-show="show_button()">
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
    name: "Email",
    components: {
      Bg,
      Avatar
    },
    data: () => ({
      alert: false,
      url_1: '/api/auth/email',
      url_2:'/api/auth/forget',
      docmHeight: document.documentElement.clientHeight,
      rules: {
        empty_email: value => !!value || '邮箱不可以为空',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || '请输入正确的邮箱地址'
        },
      },
    }),
    computed: {
      ...mapState({
        loginForm: state => state.login
      })
    },
    methods: {
      ...mapMutations({
        input_email:'INPUT_EMAIL'
      }),
      clean_error() {
        this.alert = false
      },
      error_message: alert => alert && '邮箱错误',
      next_step() {
        this.send();
        this.input_email(this.loginForm);
        this.$router.push({path: '/login/forget'})
      },
      show_button() {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(this.loginForm.email) && this.loginForm.email.length !== 0 && !this.alert
      },
      data_cook(info) {
        info.message === 'fail' && (this.alert = true);
        info.status === 1 && this.next_step();
      },
      get_data(res) {
        const info = res.data;
        res.status === 200 && this.data_cook(info)
      },
      send() {
        const post_data = this.$qs.stringify({
          username: this.loginForm.username,
          email: this.loginForm.email
        });
        this.$axios
          .post(this.url_2, post_data)
      },
      login() {
        const post_data = this.$qs.stringify({
          username: this.loginForm.username,
          email: this.loginForm.email
        });
        this.$axios
          .post(this.url_1, post_data)
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
