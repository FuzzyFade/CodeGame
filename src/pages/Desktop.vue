<template>
  <div id="app">
    <div class="courses" @click="slideFade()">
      <div v-for="(course,index) in courses" :id="course.name" class="course.lock ? 'locked' : 'unlocked'" @click="course.method">
        <img class="course-img" :src="course.img"></img>
        <div class="course-name">{{index}}.{{course.name}}</div>
      </div>
    </div>
    <transition name="slide-fade">
      <div class="slide" v-if="show">
        <div class="item-wrapper">
          <div id="self-info">
            <div class="info-wrapper">
              <div class="portrait"></div>
              <div class="name-email">
                <div class="user-name">{{userName}}</div>
                <div class="user-email">{{userEmail}}</div>
              </div>
            </div>
          </div>
          <div class="slide-item" @click="changeWall()">
            <i></i>
            <p>修改桌面主题</p>
          </div>
          <div class="slide-item" @click="changePass()" id="blank-up">
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
    </transition>  
    <div class="footer-wrapper">
      <div class="footer">
        <div class="os-button" @click="options()">button</div>
        <div class="local-time">
          {{nowTime}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Desktop",
    data: () => ({
      courses: [{
        name: "引导",
        img: "",
        method: "",
        lock: true,
      },
      {
        name: "判断",
        img: "",
        method: "",
        lock: true,
      },
      {
        name: "星星",
        img: "",
        method: "",
        lock: true,
      },
      {
        name: "隐藏",
        img: "",
        method: "",
        lock: true,
      },
      {
        name: "兔子",
        img: "",
        method: "",
        lock: true,
      },
      ],
      nowTime: "",
      show: false,
      chapter: "",
      userName: "Tony",
      userEmail: "23333@ncuos.com",
      }),
    methods: {
      options() {
        this.show = !this.show
        //背景模糊?
      },
      slideFade() {
        this.show = false
      },
      getTime() {
        this.nowTime = new Date().toLocaleDateString()
        setInterval(() => {
          this.nowTime = new Date().toLocaleDateString()
        }, 3600000)
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
@darkColor: #545454;
@backColor: #b9b9b9;
* {
  margin: 0;
  padding: 0;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
  opacity: 0;
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateY(10px);
}
.courses {
  display: flex;
  background-color: @backColor;
  height: 100vh;
  .locked, .unlocked {
    display: flex;
    height: 86px;
    width: 54px;
    z-index: 2;
    .course-img {
      width: 54px;
      height: 54px;
      background: #d8d8d8;
      border: solid 1px #979797;
    }
    .course-name {
      font-size: 16px;
      letter-spacing: 0.9px;
    }
  }
  .locked {

  }
  .unlocked {
    
  }
}
.slide {
  position: fixed;
  bottom: 55px;
  width: 188px;
  height: 330px;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.12);
  border-radius: 12px 12px 0 0;
  .item-wrapper {
    display: flex;
    flex-direction: column;
    .self-info {
      height: 92px;
      display: flex;
      flex-direction: column;
      background-color: @darkColor;
      align-items: center;
      justify-content: center; 
      .info-wrapper {
        display: flex;
        .portrait {
          width: 41px;
          height: 41px;
        }
        .name-email {
          .user-name {
            width: 63px;
            height: 36px;
            font-size: 25px;
            letter-spacing: 1.4px;

          }
          .user-email {
            width: 78px;
            height: 11px;
            font-size: 8px;
            letter-spacing: 0.4px;
            color: rgba(255, 255, 255, 0.95);
          }
        }
      }
    }
    #blank {
      height: 14px;
      background-color: #929292;
    }
    .slide-item {
      flex-grow: 0;
      flex-shrink: 0;
      height: 40px;
      display: flex;
      align-items: center;
      background-color: #f5f5f5;
      p {
        height:39px;
        width: 166px;
        font-size: 14px;
        letter-spacing: 0.8px;
        color: rgba(88, 88, 88, 0.95);
        border-bottom: solid 1px #979797;
        text-align: center;
        vertical-align: center;
      }
    }
    #blank-up p {
      border: none;
    }
  }
}
.footer-wrapper {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: @darkColor;
  .footer {
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .os-button {
      width: 154px;
    }
    .local-time {
      width: 99px;
    }
  }
}
</style>