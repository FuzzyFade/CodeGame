<template>
  <div>
    <div class="AvatarBorder">
      <v-avatar color="grey lighten-4"
                :size="size"
      >
        <img alt="avatar" class="avatar" v-if="state === 1" src="../assets/avatars/1.png">
        <img alt="avatar" class="avatar" v-if="state === 2" src="../assets/avatars/2.png">
        <img alt="avatar" class="avatar" v-if="state === 3" src="../assets/avatars/3.png">
      </v-avatar>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Avatar",
    props:{
      state:Number,
      size:String
    }
  }
</script>

<style scoped>

</style>
