<template>
  <div>
    <div class="top"></div>
    <div class="bottom"></div>
    <div class="haas">
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BackGround",
  }
</script>

<style lang="stylus" scoped>
  @import "../CSS/stars.css";
  .bottom
  .top
    display flex
    display -webkit-flex
    flex-direction column
    justify-content start
    position absolute
    bottom 0
    top 0
    left 0
    right 0
    z-index -4
    heigh 100%
    overflow hidden
    background linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, .24))

  .haas
    display flex
    display -webkit-flex
    flex-direction column
    justify-content start
    position absolute
    bottom 0
    top 0
    left 0
    right 0
    z-index -5
    heigh 100%
    background-color #fff
    overflow hidden
</style>
