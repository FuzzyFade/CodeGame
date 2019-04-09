<template>
  <div id="app">
    <div @click="slideFade()" class="courses">
      <div class="courses-wrapper">
        <div :class="course.lock ? 'locked' : 'unlocked'"
             :id="'course-'+index"
             @click="runEx(course)"
             v-for="(course,index) in courses">
          <div :id="'image-'+index"
               :style="course.img"
               class="course-img"></div>
          <div class="course-name">{{course.name}}</div>
        </div>
      </div>
    </div>
    <div :id="'window-'+index"
         :key="index"
         :style="course.size"
         class="window"
         v-drag
         v-for="(course,index) in courses"
         v-if="course.show">
      <div class="w-bar">
        <div class="pro">
          <div class="pro-icon-wrapper">
            <i class="pro-icon"></i>
          </div>
          <span class="pro-name">{{course.name}}</span>
        </div>
        <div class="mmc-wrapper">
          <i @click="minimize(course)" class="minimize-button"></i>
          <i @click="maximize(course)" class="maximize-button"></i>
          <i @click="close(course)" class="close-button"></i>
        </div>
      </div>
      <div class="w-body" id="computer" v-if="course.computerPage">
        <div class="os-logo"></div>
        <div class="os-name">996OS Escape</div>
        <div class="version">版本 1.0.1</div>
        <div class="os-info">
          <div class="activeDate">激活日期 2019.4.14</div>
          <div class="cpu">处理器 Null</div>
          <div class="stora">内存 Null</div>
          <div class="gpu">图形卡 Null</div>
        </div>
        <div class="advancedOp">高级设置</div>
      </div>
      <div class="w-body" id="folder" v-if="course.folderPage">
        <div class="folds">
          <div @click="openFold(fold)" class="fold" v-for="(fold,index) in folds">
            <div :id="'fold-icon-'+index" class="fold-icon"></div>
            <div class="fold-name">{{fold.name}}</div>
          </div>
        </div>
      </div>
    </div>
    <div :id="'fwin-'+index"
         :key="index"
         :style="fold.size"
         class="window"
         v-drag
         v-for="(fold,index) in folds"
         v-if="fold.show"
    >
      <div class="w-bar">
        <div class="pro">
          <div class="pro-icon-wrapper">
            <i class="pro-icon"></i>
          </div>
          <span class="pro-name">{{fold.name}}</span>
        </div>
        <div class="mmc-wrapper">
          <i @click="minimize(fold)" class="minimize-button"></i>
          <i @click="maximize(fold)" class="maximize-button"></i>
          <i @click="close(fold)" class="close-button"></i>
        </div>
      </div>
      <div class="w-body"></div>
    </div>
    <transition name="slide-fade">
      <div class="slide" v-if="slideShow">
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
          <div @click="changeWall()" class="slide-item">
            <i id="cPortrait"></i>
            <p>修改头像</p>
          </div>
          <div @click="changePass()" class="slide-item" id="blank-up">
            <i id="cPassword"></i>
            <p>修改密码</p>
          </div>
          <div id="blank"></div>
          <div @click="aboutUs()" class="slide-item">
            <i id="aboutUs"></i>
            <p>关于我们</p>
          </div>
          <div @click="logOut()" class="slide-item">
            <i id="logOut"></i>
            <p>注销</p>
          </div>
          <div @click="shutDown()" class="slide-item" id="last">
            <i id="shutDown"></i>
            <p>关机</p>
          </div>
        </div>
      </div>
    </transition>
    <div class="footer-wrapper">
      <div class="footer">
        <div @click="switchSlide()" class="os-button"></div>
        <div class="local-time">
          {{nowTime}}
        </div>
      </div>
      <div class="mini-tasks">
        <div @click="toSwitch(course)"
             class="mini-task"
             v-for="(course,index) in courses"
             v-if="course.run">
          <div class="icon-wrapper">
            <div :id="'task-'+index" class="task-icon"></div>
          </div>
        </div>
        <div @click="toSwitch(fold)"
             class="mini-task"
             v-for="(fold,index) in fold"
             v-if="fold.run">
          <div class="icon-wrapper">
            <div :id="'ftask-'+index" class="task-icon"></div>
          </div>
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
        name: "此电脑",
        img: "",
        size: {
          top: '',
          left: '',
          width: '',
          height: '',
        },
        initSize: {
          top: '',
          left: '',
          width: '',
          height: '',
        },
        computerPage: false,
        folderPage: false,
        lock: false,
        show: false,
        run: false,
      },
        {
          name: "文档",
          img: "",
          size: {
            top: '',
            left: '',
            width: '',
            height: '',
          },
          initSize: {
            top: '',
            left: '',
            width: '',
            height: '',
          },
          computerPage: false,
          folderPage: false,
          lock: false,
          show: false,
          run: false,
        },
        {
          name: "0.序章",
          img: "",
          size: {
            top: '',
            left: '',
            width: '',
            height: '',
          },
          initSize: {
            top: '',
            left: '',
            width: '',
            height: '',
          },
          computerPage: false,
          folderPage: false,
          lock: true,
          show: false,
          run: false,
        },
      ],
      folds: [
        {
          name: "2219-4-1",
          size: {
            top: '',
            left: '',
            width: '',
            height: '',
          },
          initSize: {
            top: '',
            left: '',
            width: '',
            height: '',
          },
          show: false,
          run: false,
          computerPage: false,
          folderPage: false,
        },
        {
          name: "折返吧",
          size: {
            top: '',
            left: '',
            width: '',
            height: '',
          },
          initSize: {
            top: '',
            left: '',
            width: '',
            height: '',
          },
          show: false,
          run: false,
          computerPage: false,
          folderPage: false,
        },

      ],
      nowTime: "",
      slideShow: false,
      chapter: "",
      userName: "Tony",
      userEmail: "23333@ncuos.com",
      foldOnePage: false,
      foldTwoPage: false,
    }),
    methods: {
      switchSlide() {
        this.slideShow = !this.slideShow
        let backOb = document.getElementsByClassName('courses')[0]
        if (this.slideShow) {
          backOb.style.filter = "blur(1.8px)"
        } else {
          backOb.style.filter = "blur(0px)"
        }
      },
      slideFade() {
        this.slideShow = false
        let backOb = document.getElementsByClassName('courses')[0]
        backOb.style.filter = "blur(0px)"
      },
      getTime() {
        let date = new Date()
        this.nowTime = "2219" + "年" + (date.getMonth() + 1) + "月" + (date.getDay() + 7) + "日"
        setInterval(() => {
          date = new Date()
          this.nowTime = "2219" + "年" + (date.getMonth() + 1) + "月" + (date.getDay() + 7) + "日"
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
      runEx(course) {
        course.run = true
        course.show = true
        if (course.name == '此电脑') {
          course.computerPage = true
        } else if (course.name == '文档') {
          course.folderPage = true
        }
      },
      minimize(course) {
        course.show = false
      },
      maximize(course) {
        let maxHeightNumber = window.innerHeight - 55
        let mh = String(maxHeightNumber)
        course.size.top = '0'
        course.size.left = '0'
        course.size.width = '100vw'
        course.size.height = mh + 'px'
      },
      close(course) {
        let initSize = course.initSize
        course.run = false
        course.show = false
        course.size.width = initSize.width
        course.size.height = initSize.height
        course.size.top = initSize.top
        course.size.left = initSize.left
        if (course.name == '此电脑') {
          course.computerPage = false
        } else if (course.name == '文档') {
          course.folderPage = false
        }
        if (course.name == '2219-4-1') {
          course.foldOnePage = false
        } else if (course.name == '折返吧') {
          course.foldTwoPage = false
        }
      },
      toSwitch(course) {
        course.show = !course.show
      },
      openFold(fold) {
        fold.run = true
        fold.show = true
        if (fold.name == '2219-4-1') {
          fold.foldOnePage = true
        } else if (course.name == '折返吧') {
          fold.foldTwoPage = true
        }
      }
    },
    created() {
      this.getTime()
    },
    directives: {
      drag: {
        bind: function (el) {
          let oDiv = el
          oDiv.onmousedown = function (e) {
            let disX = e.clientX - oDiv.offsetLeft
            let disY = e.clientY - oDiv.offsetTop
            document.onmousemove = function (e) {
              let l = e.clientX - disX
              let t = e.clientY - disY
              oDiv.style.left = l + 'px'
              oDiv.style.top = t + 'px'
            }
            document.onmouseup = function (e) {
              document.onmousemove = null
              document.onmouseup = null
            }
          }
        }
      },
    }
  }
</script>

<style lang="less" scoped>
  @darkColor: #1f1f1f;
  @iconWrapper: #f5f5f5;
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

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(10px);
  }

  #app {
    overflow: hidden;
  }

  .courses {
    height: 100vh;

    .courses-wrapper {
      display: flex;
      flex-direction: column;
      height: 90vh;
      width: 160px;
      flex-wrap: wrap;
      padding-left: 39px;
      padding-top: 40px;

      .locked, .unlocked {
        display: flex;
        height: 86px;
        width: 54px;
        flex-direction: column;
        margin-bottom: 28px;

        .course-img {
          width: 54px;
          height: 54px;
        }

        #image-0 {
          background-image: url("./assets/icons/Desktop/computer.svg");
        }

        #image-1 {
          background-image: url("./assets/icons/Desktop/folder.svg");
          background-repeat: no-repeat;
          background-position: 5px 0px;
        }

        #image-3 {

        }

        .course-name {
          font-size: 16px;
          letter-spacing: 0.9px;
          color: rgba(88, 88, 88, 0.95);
          margin-top: 5px;
          display: flex;
          justify-content: center;
        }
      }

      .locked {

      }

      .unlocked {

      }
    }
  }

  .slide {
    position: fixed;
    bottom: 55px;
    width: 188px;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.12);
    border-radius: 12px 12px 0 0;

    .item-wrapper {
      display: flex;
      flex-direction: column;

      #self-info {
        .info-wrapper {
          border-radius: 12px 12px 0 0;
          height: 92px;
          align-items: center;
          justify-content: center;
          display: flex;
          background-color: @darkColor;

          .portrait {
            width: 41px;
            height: 41px;
            background: url("./assets/avatars/2_00000.png");
            background-size: 100%;
            border-radius: 50%;
            margin-right: 10px;
          }

          .name-email {
            display: flex;
            flex-direction: column;

            .user-name {
              width: 63px;
              height: 36px;
              font-size: 25px;
              color: rgba(255, 255, 255, 0.95);
            }

            .user-email {
              width: 78px;
              height: 11px;
              font-size: 8px;
              -webkit-text-size-adjust: none;
              color: rgba(255, 255, 255, 0.95);
              margin-top: 1px;
            }
          }
        }
      }

      #blank {
        height: 14px;
        background-color: @darkColor;
      }

      .slide-item {
        height: 40px;
        display: flex;
        align-items: center;
        background-color: #2b3034;

        i {
          margin-left: 9px;
          margin-right: 7px;
          width: 23px;
          height: 23px;
          background-color: #b9b9b9;
          border-radius: 5px;
        }

        #cPortrait {
          background: url("./assets/icons/toolbar/修改头像.svg");
        }

        #cPassword {
          background: url("./assets/icons/toolbar/修改密码.svg");
        }

        #aboutUs {
          background: url("./assets/icons/toolbar/关于.svg");
        }

        #logOut {
          background: url("./assets/icons/toolbar/注销.svg");
        }

        #shutDown {
          background: url("./assets/icons/toolbar/关机.svg");
        }

        p {
          height: 39px;
          width: 166px;
          font-size: 14px;
          letter-spacing: 0.8px;
          color: rgba(255, 255, 255, 0.95);
          border-bottom: solid 1px #979797;
          display: flex;
          align-items: center;
        }
      }

      #blank-up p, #last p {
        border: none;
      }
    }
  }

  .window {
    width: 300px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #373c44;

    .w-bar {
      max-height: 41px;
      height: 6.1vh;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: linear-gradient(280deg, rgba(54, 55, 58, 0.8), #373c44, #262a32, black, black);

      .pro {
        display: flex;
        align-items: center;
        width: 120px;

        .pro-icon-wrapper {
          width: 20px;
          height: 20px;
          background-color: @iconWrapper;
          border-radius: 5px;
          margin-right: 10px;
          margin-left: 10px;

          .pro-icon {
            width: 11px;
            height: 12px;
            background-image: url("./assets/icons/Desktop/folder.svg");
            background-repeat: no-repeat;
          }
        }

        .pro-name {
          font-size: 13px;
          letter-spacing: 0.7px;
          color: rgba(236, 236, 236, 0.95);
        }
      }

      .mmc-wrapper {
        width: 95px;
        display: flex;
        align-items: center;

        .minimize-button {
          width: 18px;
          height: 2px;
          background: #ffffff;
        }

        .maximize-button {
          margin-left: 15px;
          width: 12px;
          height: 13px;
          border: 2px solid #ffffff;
        }

        .close-button {
          margin-left: 15px;
          width: 20px;
          height: 20px;
          background: url("./assets/icons/windows/X.svg");
          background-size: 180%;
          background-position: -8.5px -6.5px;
        }
      }

    }

    .w-body {
      flex-grow: 1;
    }

    #computer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .os-logo {
        width: 189px;
        height: 189px;
        background: url("./assets/icons/logo.svg");
        background-size: 100%;
      }

      .os-name {
        margin-top: 5px;
        font-size: 20px;
        letter-spacing: 0.9px;
        color: rgba(255, 255, 255, 0.95);
      }

      .version {
        margin-top: 8px;
        font-size: 10px;
        letter-spacing: 0.6px;
        color: rgba(255, 255, 255, 0.95)
      }

      .os-info {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div {
          margin-bottom: 9px;
        }

        .activeDate {
          font-size: 12px;
          letter-spacing: 0.7px;
          color: rgba(234, 234, 234, 0.95);
        }

        .cpu {
          .activeDate()
        }

        .stora {
          .activeDate()
        }

        .gpu {
          .activeDate()
        }
      }

      .advancedOp {
        margin-top: 30px;
        margin-bottom: 25px;
        font-size: 15px;
        letter-spacing: 0.8px;
        color: rgba(255, 255, 255, 0.95);

      }
    }

    #folder {
      .folds {
        display: flex;
        margin-top: 27px;
        margin-left: px;

        .fold {
          margin-left: 25px;

          .fold-icon {
            width: 56px;
            height: 72px;
            margin-bottom: 15px;
          }

          .fold-name {
            font-size: 11px;
            letter-spacing: 0.6px;
            color: rgba(236, 236, 236, 0.95);
          }

          #fold-icon-0 {
            margin-left: 0;
            background: url("./assets/icons/2_00000.svg");
            background-position: 0 2px;
            background-repeat: no-repeat;
          }

          #fold-icon-1 {
            background-position: 0 3px;
            background-repeat: no-repeat;
            background: url("./assets/icons/system.svg");
          }
        }
      }
    }
  }

  .footer-wrapper {
    border-top: solid 1px #595959;
    z-index: 99;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: linear-gradient(280deg, rgba(54, 55, 58, 0.8), #373c44, #262a32, black, black);

    .footer {
      height: 54px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .os-button {
        margin-left: 14px;
        width: 42px;
        height: 42px;
        background-image: url("./assets/icons/logo.svg");
        background-size: 140%;
        background-position: -8px -8px;
        background-repeat: no-repeat;
      }

      .local-time {
        margin-right: 10px;
        width: 99px;
        font-size: 13px;
        color: rgba(255, 255, 255, 0.95);
        letter-spacing: 0.7px;
      }
    }

    .mini-tasks {
      display: flex;
      flex-wrap: nowrap;
      position: absolute;
      bottom: 0;
      left: 80px;
      height: 55px;
      align-items: center;
      max-width: 45.9vw;

      .mini-task {
        padding-right: 10px;
        flex-shrink: 1;
      }

      .icon-wrapper {
        width: 9.3vw;
        height: 9.3vw;
        max-height: 35px;
        max-width: 35px;
        background-color: #f5f5f5;
        border-radius: 6px;

        #task-0 {
          background-size: 100%;
          background-repeat: no-repeat;
          background-image: url("./assets/icons/Desktop/computer.svg");
        }

        #task-1 {
          background-repeat: no-repeat;
          background-image: url("./assets/icons/Desktop/folder.svg");
        }
      }
    }
  }
</style>
