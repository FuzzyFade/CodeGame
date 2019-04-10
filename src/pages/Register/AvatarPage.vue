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
            <span>请选择您的头像</span>
          </div>
          <div class="ava">
            <div class="ava-field">
              <div @click="switch_ava(1)">
                <div :class="{ ava_active:isActive1 }">
                  <avatar :state="1" size="80px"></avatar>
                </div>
              </div>
              <div @click="switch_ava(2)">
                <div :class="{ ava_active:isActive2 }">
                  <avatar :state="2" size="80px"></avatar>
                </div>
              </div>
              <div @click="switch_ava(3)">
                <div :class="{ ava_active:isActive3 }">
                  <avatar :state="3" size="80px"></avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div :style="{top:(docmHeight-98)+'px'}" class="footer">
          <transition name="fade">
            <v-btn flat style="font-size: 16px" @click="submit">> 选它了</v-btn>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Avatar from "@/components/Avatar";
  import Bg from "@/components/BackGround";
  import axios from "axios"

  export default {
    name: "AvatarPage",
    components: {
      Avatar,
      Bg
    },
    data: () => ({
      isActive1: false,
      isActive2: true,
      isActive3: false,
      docmHeight: document.documentElement.clientHeight,
      loginForm: {
        ava: 2,
        email: '',
        username: '',
        password: ''
      },
      rules: {
        empty_email: value => !!value || '邮箱不可以为空',
        empty_pwd: value => !!value || '密码不可以为空',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || '请输入正确的邮箱地址'
        },
        pwd: value => value.length >= 8 || '长度为8-16个字符'
      }
    }),
    created() {
      this.getForm()
    },
    methods: {
      switch_ava(n) {
        this.loginForm.ava = n;
        (n === 1) && ([this.isActive1, this.isActive2, this.isActive3] = [true, false, false]);
        (n === 2) && ([this.isActive1, this.isActive2, this.isActive3] = [false, true, false]);
        (n === 3) && ([this.isActive1, this.isActive2, this.isActive3] = [false, false, true]);
      },
      getForm() {
        this.loginForm= this.$route.params().loginFrom;
      },
      submit() {

      }
    }
  }
</script>

<style lang="stylus" scoped>
  .ava_active
    border-radius 100%
    animation flash 1600ms infinite
    -webkit-animation flash 1600ms infinite

    @keyframes flash
      from
        box-shadow 0 0 0 2.6px rgb(255, 255, 255), 0 0 0 5.5px rgb(0, 159, 255)
      50%
        box-shadow 0 0 0 2.6px rgb(255, 255, 255), 0 0 0 5.5px rgb(255, 255, 255)
      to
        box-shadow 0 0 0 2.6px rgb(255, 255, 255), 0 0 0 5.5px rgb(0, 159, 255)

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
      font-size 23px
      letter-spacing 1.3px

  .ava
    text-align center

    .ava-field
      display flex
      justify-content space-around
      margin-top 66px

      .atom
        width 81px
        height 81px

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
