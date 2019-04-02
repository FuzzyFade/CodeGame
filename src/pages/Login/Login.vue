<template>
  <div>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "Login"
  }
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-enter-active {
    transition: opacity .6s;
  }

  .fade-leave-active {
    opacity: 0;
    transition: opacity .2s;
  }
</style>
