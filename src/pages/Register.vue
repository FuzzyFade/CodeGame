<template>
  <div>
    <div>
      23333333333
    </div>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data: () => ({

    })
  }
</script>

<style lang="stylus" scoped>
  .container
    display flex
    flex-direction column
    justify-content center

    .AvatarBorder
      margin-top 114px
      margin-bottom 16px

      .avatar
        width 108px
        height 108px
        border solid 1px #979797
        border-radius 54px

  .footer
    width 100%
    height 80px
    position fixed
    bottom 0
    z-index -1

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

      .btn1
        width 54px
        height 54px
        border-radius 27px

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

      .btn2
        width 54px
        height 54px
        border-radius 27px
</style>
