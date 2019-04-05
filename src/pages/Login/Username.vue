<template>
  <div>
    <div>
      <div class="containers">
        <div>
          <div class="AvatarBorder">
            <v-avatar
                    color="#4C4C4C"
                    size="160px"
            >
              <div>
                <!--<img alt="avatar" class="avatar" src="https://vuetifyjs.com/apple-touch-icon-180x180.png">-->
                <lottie :height="270"
                        :options="defaultOptions"
                        :width="270"
                        v-on:animCreated="handleAnimation"
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
      <div class="footer" :style="{top:(docmHeight-98)+'px'}">
        <div class="register">
          <v-btn @click="register" class="foot_btn" fab outline>
            <v-icon>fa-plus</v-icon>
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
            <v-btn @click="change" class="foot_btn" fab outline>
              <v-icon>fa-arrow-right</v-icon>
            </v-btn>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import * as animationData from "@/assets/Lottie/Amt1.json"

  export default {
    name: "Username",
    data: () => ({
      docmHeight: document.documentElement.clientHeight,
      loginForm: {
        username: ''
      },
      rules: {
        empty: value => !!value || '用户名不可以为空'
      },
      defaultOptions: {animationData: animationData.default},
      animationSpeed: 1,
      anim: {}
    }),
    mounted() {

    },
    methods: {
      handleAnimation(anim) {
        this.anim = anim;
        console.log(anim); //这里可以看到 lottie 对象的全部属性
      },
      register() {
        this.$router.push({path: '/register/first'})
      }
      ,
      change() {
        //code 还会发一个请求给后段，查询是否由其人，返回一个是或否
        this.$router.push({
          path: '/login/password',
          query: {
            user: this.loginForm.username
          }
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
    position absolute
    bottom 0
    top 0
    left 0
    right 0
    z-index 0
    .AvatarBorder
      margin-top 114px
      margin-bottom 84px

      .avatar
        width 108px
        height 108px
        border solid 1px #CFCFCF
        border-radius 54px

    .text-field
      margin-top 35px
      padding-right 48px
      padding-left 48px

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
