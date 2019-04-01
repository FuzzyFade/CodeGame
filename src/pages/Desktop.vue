<template>
  <div id="app">
    <div class="courses">
      <div v-for="(course,index) in courses" :id="course.name" class="course.lock ? 'locked' : 'unlocked'" @click="course.method">
        <img class="course-img" :src="course.img"></img>
        <div class="course-name" >{{course.name}}</div>
      </div>
    </div>
    <div class="slide" v-if="show">
      <div class="item-wrapper">
        <div id="self-info"></div>
        <div class="slide-item" @click="changeWall()">
          <i></i>
          <p>修改桌面主题</p>
        </div>
        <div class="slide-item" @click="changePass()">
          <i></i>
          <p>修改密码</p>
        </div>
        <div id="blank"></div>
        <div class="slide-item" @click="aboutUs()">
          <i></i>
          <p>关于我们</p>
        </div>
        <div class="slide-item" @click="logOut()">
          <i></i>
          <p>注销</p>
        </div>
        <div class="slide-item" @click="shutDown()">
          <i></i>
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
        method: "",
        lock: true,
      },
      {
        name: "",
        img: "",
        method: "",
        lock: true,
      },
      {
        name: "",
        img: "",
        method: "",
        lock: true,
      },
      ],
      nowTime: "",
      show: false,
      chapter: "",
      }),
    methods: {
      options() {
        this.show = !this.show
        //背景模糊
      },
      getTime() {
        setInterval(() => {
          this.nowTime = new Date().toLocaleDateString()
        }, 1000)
      },
      shutDown() {
        window.close()
      },
      logOut() {
        //清除登陆数据
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
  .locked, .unlocked {

  }
  .locked {

  }
  .unlocked {
    
  }
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