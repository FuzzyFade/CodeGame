<template>
  <div id="app">
    <div class="courses">
      <div v-for="course in courses" :id="course.name" class="course-wrapper">
        <img class="course-img" :src="course.img"></img>
        <div class="course-name" >{{course.name}}</div>
      </div>
    </div>
    <div class="slide" v-if="show">
      <div class="item-wrapper">
        <div id="self-info"></div>
        <div class="slide-item" @click="changeWall()">
          <div></div>
          <p>修改桌面主题</p>
        </div>
        <div class="slide-item" @click="changePass()">
          <div></div>
          <p>修改密码</p>
        </div>
        <div id="blank"></div>
        <div class="slide-item" @click="aboutUs()">
          <div></div>
          <p>关于我们</p>
        </div>
        <div class="slide-item" @click="logOut()">
          <div></div>
          <p>注销</p>
        </div>
        <div class="slide-item" @click="shutDown()">
          <div></div>
          <p>关机</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="os-button" @click="options()"></div>
      <div class="local-time">
        {{nowTime}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Desktop",
    data: () => ({
      courses: [{
        name: "",
        img: "",
      },
      {
        name: "",
        img: "",
      },
      {
        name: "",
        img: "",
      }
      ]
      }),
      nowTime: "",
      show: false,
    methods: {
      options() {
        this.show = !this.show
      },
      getTime() {
        setInterval(() => {
          this.nowTime = new Date().toLocaleDateString()
        }, 36000)
      },
      shutDown() {

      },
      logOut() {

      },
      aboutUs() {

      },
      changePass() {

      },
      changeWall() {

      },
    },
    created() {
      this.getTime()
    }
  }
</script>

<style lang="less" scoped>
.courses {
  display: flex;

}
.slide {
  display: absolute;
  bottom: ;
  .item-wrapper {
    display: flex;
    flex-direction: column;
    .slide-item {
      display: flex;

    }
  }
}
.footer {
  display: flex;
}
</style>