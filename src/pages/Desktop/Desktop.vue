<template>
  <div id="app">
    <bg></bg>
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
         v-getMaxHeight
         v-for="(course,index) in courses"
         v-if="course.show">
      <div class="w-bar">
        <div class="pro">
          <div class="pro-icon-wrapper">
            <i class="pro-icon" :id="'wpi-'+index"></i>
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
      <div class="w-body" id="chapter-1" v-if="course.chapterOne">
        <div class="page" id="c1-p1" v-if="course.nowPage == '1'" @click="nextPage(course)">
          <div class="titile-wrapper" id="tw1">
            <div class="title">第一章 起点</div>
            <div class="subt">回顾旧日向往</div>
          </div>
          <div class="tap-tip"><span>点击屏幕以继续</span></div>
        </div>
        <div class="page" id="c1-p6" v-if="course.nowPage == '2'" @click="nextPage(course)">
          <div class="c1-passages-wrapper">
            <div class="c1-passage" id="c1-pa-1">
              “在你学习一门新的 编程语言 时，有一项传统，
            </div>
            <div class="c1-passage">
              你所编写并运行的 <strong>第一个程序</strong> 应该是‘hello world’程序，
            </div>
            <div class="c1-passage">
              -- 它所做的全部工作便是宣言你所运行的‘hello world’这句话。”
            </div>
          </div>
          <div class="c1-tap-tip">[Y]是的我知道了</div>
        </div>
        <div class="page" id="c1-p2" v-if="course.nowPage == '3'" @click="nextPage(course)">
          <div class="titile-wrapper" id="tw2">
            <div class="titile" id="t2">print()</div>
            <div class="subt-wrapper">
              <div class="subt" id="s2-1">print() 方法用于打印输出，时python中最常见的一个【函数】。</div>
              <div class="subt" id="s2-2">它可以输出多种类型的变量。</div>
              <div class="subt" id="s2-3">变量就是储存在【内存】中的值，它可以指定不同的【数据类型】。</div>
            </div>
          </div>
          <div class="tap-tip">[Y]好，我懂了</div>
        </div>
        <div class="page" id="c1-p3" v-if="course.nowPage == '4'" @click="nextPage(course)">
          <div id="content-wrapper">
            <div class="title">Python的五个标准的数据类型</div>
            <div class="list">
              <span>Numbers (数字)</span>
              <span>String (字符串，往往使用引号('或")来创建字符串)</span>
              <span>List (列表)</span>
              <span>Tuple (元组)</span>
              <span>Dictionary (字典)</span>
            </div>
            <div class="tip">数字和字符串是最基础的数据类型，而剩下的则会在以后的学习中接触到。</div>
          </div>
          <div class="tap-tip">[Y]好好好，下一步</div>
        </div>
        <div class="page" id="c1-p4" v-if="course.nowPage == '5'">
          <div class="code-block">
            <div class="code">
              <span class="keyw">print</span><span class="qh">(</span><span class="string">"HELLO WORLD"</span><span class="qh">)</span>
            </div>
          </div>
          <div class="tip">//点击 RUN 运行上面的代码</div>
          <div class="run-btn" @click="nextPage(course)"><div class="run">[R]RUN</div></div>
        </div>
        <div class="page" id="c1-p5" v-if="course.nowPage == '6'">
          <div class="title" id="c1-result">
            <div id="HELLO">HELLO</div>
            <div id="WORLD">WORLD</div>
          </div>
          <div class="tap-tip" id="c1-over"><span>over</span></div>
        </div>
      </div>
      <div class="w-body" id="chapter-2" v-if="course.chapterTwo">
        <div class="page" id="c2-p2" v-if="course.nowPage == '1'" @click="nextPage(course)">
          <div id="c2-w2">
            <div id="c2-ww">
              <div id="c2-t">第二章 游戏</div>
              <div id="subt">数与编程之舞</div>
            </div>
          </div>
          <div class="c2-tip">
            — — — — —  点击屏幕以继续  — — — — —
          </div>
        </div>
        <div class="page" id="c2-p3" v-if="course.nowPage == '2'" @click="nextPage(course)">
          <div class="passages-wrapper">
            <div>“现在你所使用的编程语言叫做Python，</div>
            <div>人们用“简洁优雅”来形容它的语言风格</div>
            <div>它可以用于系统编程、数值计算......甚至成为了百年后世界的基石。</div>
            <div>在一切开始之前，我们现在玩个游戏吧。”</div>
          </div>
          <div id="c2-p3-tap">
            — — — — —  点击屏幕以继续  — — — — —
          </div>
        </div>
        <div class="page" id="c2-p4" v-if="course.nowPage == '3'">
          <div class="game-title" id="gt1">
            <div id="gt1-wrapper">
              a是0到100之间的某一个整数，请进行猜测。（#号后皆为注释）
            </div>
          </div>
          <div class="answer-area" id="aa1">
            <div class="answer-wrapper">
              a= <input v-model="course.inputValue" class="answer-input"></input> #a为变量，利用=对a进行赋值print(result)
            </div>
          </div>
          <div class="run-area" id="ra1">
            <div class="run-asw">
              <span class="run-as" v-for="result in course.results">{{result}}</span>
            </div>
          </div>
          <div class="run-btn" id="grb1" @click="chaTwoRun(course)">
            运行 <span class="run-icon"></span>
          </div>
        </div>
        <div clas="page" id="c2-p5" v-if="course.nowPage == '4'">
          <div id="gt2">
            <div class="gt2-wrapper">
              恭喜你成功猜出来a=36，那么接下来让我们用一些简单的运算符号来判断大小关系吧。
            </div>
          </div>
          <div class="answer-area" id="aa2">
            <div class="answer-wrapper">
              32 <input disabled="disabled" v-model="course.inputValue" class="answer-input"/>
              a <input disabled="disabled" v-model="course.secInputValue" class="answer-input"/>
              36</br>
              a!=32<span class="warn-tip">#!=在Python表示不等于的意思</span>
            </div>
          </div>
          <div class="op-area">
            <div class="op-btn" v-for="(oper,index) in course.operations" :id="'oper-'+index" @click="sigOper(course, index)">{{oper}}</div>
          </div>
          <div class="run-btn" id="grb2" @click="runSecGame(course)" v-if="(!course.errorTip)&&(!course.rigthTip)">
            运行 <span class="run-icon"></span>
          </div>
          <div class="s-f-warn-area-wrong" v-if="course.errorTip == true">
            <div class="error">ERROR</div>
            <div class="tttips-wrapper" id="wrong">
              <div class="dot-wrapper">
                <span class="dot">.</span>
                <span class="dot">.</span>
              </div>
              <div class="tttips">
                <div class="tttip">Python中&gt;和&lt;分别表示大于和小于，&ge;和&le;则表现大于等于和小于等于</div>
                <div class="tttip">==在Python中表示两端对象相等，而=仅表示赋值</div>
              </div>
            </div>
          </div>
          <div class="s-f-warn-area-right" v-if="course.rigthTip == true">
            <div class="right">RIGHT</div>
            <div class="tttips-wrapper" id="right">
              <div class="right-tip">回答正确 √</div>
              <div class="gou"></div>
            </div>
          </div>
        </div>
        <div clas="page" id="c2-p6" v-if="course.nowPage == '5'">
          <div class="p6tw">
            <div class="p6t">
              Python中除了上述介绍的比较运算符，还包括运算符，还包括了赋值运算符，利用这些运算符我们可以进行一些算术计算。
            </div>
          </div>
          <div class="p6li">
            <div class="col-1 col">
              <div class="row">运算符</div>
              <div class="row">+</div>
              <div class="row">—</div>
              <div class="row">*</div>
              <div class="row">/</div>
              <div class="row">%</div>
              <div class="row">**</div>
              <div class="row">//</div>
            </div>
            <div class="col-2 col">
              <div class="row">描述</div>
              <div class="row">加法赋值运算符</div>
              <div class="row">减法赋值运算符</div>
              <div class="row">乘法赋值运算符</div>
              <div class="row">除法赋值运算符</div>
              <div class="row">取余赋值运算符</div>
              <div class="row">幂赋值运算符</div>
              <div class="row">取整除赋值运算符</div>
            </div>
            <div class="col-3 col">
              <div class="row">实例</div>
              <div class="row">print(2+3),则结果是5</div>
              <div class="row">print(3-2),则结果是1</div>
              <div class="row">print(2*3),则结果是6</div>
              <div class="row">print(6/3),则结果是2</div>
              <div class="row">print(5/3),则结果是2</div>
              <div class="row">print(3**2),则结果是9</div>
              <div class="row">print(5//2),则结果是2</div>
            </div>
          </div>
          <div class="next-step">[Y]下一步(over..)</div>
        </div>
      </div>
    </div>
    <div
      :id="'fwin-'+index"
      :key="index"
      :style="fold.size"
      class="window"
      v-drag
      v-getMaxHeight
      v-for="(fold,index) in folds"
      v-if="fold.show">
      <div class="w-bar">
        <div class="pro">
          <div class="pro-icon-wrapper">
            <i class="pro-icon" :id="'fwpi-'+ index"></i>
          </div>
          <span class="pro-name">{{fold.name}}</span>
        </div>
        <div class="mmc-wrapper">
          <i @click="minimize(fold)" class="minimize-button"></i>
          <i @click="maximize(fold)" class="maximize-button"></i>
          <i @click="close(fold)" class="close-button"></i>
        </div>
      </div>
      <div class="w-body" id="fold-0" v-if="fold.foldOnePage">
        <div class="passage-wrapper">
          <div class="passage" v-for="(passage,index) in fold.content" :id="'passage-'+index">{{passage}}</div>
        </div>
      </div>
      <div class="w-body" id="fold-1" v-if="fold.foldTwoPage">
        hellowGays
      </div>
    </div>
    <transition name="slide-fade">
      <div class="slide" v-if="slideShow">
        <div class="item-wrapper">
          <div id="self-info">
            <div class="info-wrapper">
              <div class="portrait">
                <avatar size="41px" :state="loginForm.icon"></avatar>
              </div>
              <div class="name-email">
                <div class="user-name">{{loginForm.username}}</div>
                <div class="user-email">{{"你是真滴帅"}}</div>
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
      <div v-getMiniTasksWidth class="mini-tasks" id="mini-tasks">
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
             v-for="(fold,index) in folds"
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
  import bg from '@/components/BackGround'
  import {mapState} from 'vuex'
  import Avatar from '@/components/Avatar'
  export default {
    name: "Desktop",
    components:{
      Avatar,
      bg
    },
    data: () => ({
      courses: [{
        name: "此电脑",
        img: "",
        size: {
          top: '',
          left: '',
          width: '',
          height: '',
          borderRadius: '',
        },
        initSize: {
          top: '',
          left: '',
          width: '',
          height: '',
          borderRadius: '',
        },
        computerPage: false,
        folderPage: false,
        chapterOne: false,
        chapterTwo: false,
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
            borderRadius: '',
          },
          initSize: {
            top: '',
            left: '',
            width: '',
            height: '',
            borderRadius: '',
          },
          computerPage: false,
          folderPage: false,
          chapterOne: false,
          chapterTwo: false,
          lock: false,
          show: false,
          run: false,
        },
        {
          name: "第一章",
          img: "",
          size: {
            top: '',
            left: '',
            width: '375px',
            height: '612px',
            borderRadius: '',
          },
          initSize: {
            top: '',
            left: '',
            width: '375px',
            height: '612px',
            borderRadius: '',
          },
          initPage: '1',
          nowPage: '1',
          computerPage: false,
          folderPage: false,
          chapterOne: true,
          chapterTwo: false,
          chapterThree: false,
          lock: true,
          show: false,
          run: false,
        },
        {
          name: "第二章",
          img: "",
          size: {
            top: '',
            left: '',
            width: '375px',
            height: '612px',
            borderRadius: '',
          },
          initSize: {
            top: '',
            left: '',
            width: '375px',
            height: '612px',
            borderRadius: '',
          },
          initPage: '1',
          nowPage: '1',
          computerPage: false,
          folderPage: false,
          chapterOne: false,
          chapterTwo: true,
          chapterThree: false,
          lock: true,
          show: false,
          run: false,
          inputValue: '',
          runResultType: {
            success: 'a = 36 回答正确',
            bigger: '大了大了',
            smaller: '小了小了',
          },
          results: [],
          checkTime: '1',
          secInputValue: '',
          operations: [">","<","=","==","!=","<=","删除",">=","清空"],
          rigthTip: false,
          errorTip: false,
          errorTimes: '0',
        },
        {
          name: "第三章",
          img: "",
          size: {
            top: '',
            left: '',
            width: '375px',
            height: '612px',
            borderRadius: '',
          },
          initSize: {
            top: '',
            left: '',
            width: '375px',
            height: '612px',
            borderRadius: '',
          },
          initPage: '1',
          nowPage: '1',
          computerPage: false,
          folderPage: false,
          chapterOne: false,
          chapterTwo: false,
          chapterThree: true,
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
            borderRadius: '',
          },
          initSize: {
            top: '',
            left: '',
            width: '',
            height: '',
            borderRadius: '',
          },
          show: false,
          run: false,
          foldTwoPage: false,
          foldOnePage: false,
          content: [
            "”是哪儿？“",
            "环顾四周，满是破铜烂铁以及废弃的新材料试验品，还有一些尚可辨认的机器人残体。",
            "你发现自己似乎处在一个堆放机器人废品的工厂，",
            "抬腕看向检测自己及周围环境的ID手环，似乎并没有信号",
            "前方某个角落有一丝光亮",
            "你不由得向着那个方向走去，就像黑暗中遇光的飞蛾",
            "当你看不见发光物的全貌时，你的大脑开始高速运转起来",
            "这是一台太过沧桑的机器，但毋庸置疑的是，它身上有现代机器的雏形",
            "一台两百多年前的计算机出现在你的眼前，屏幕在黑暗中发出幽幽的光亮",
          ],
        },
        {
          name: "折返吧",
          size: {
            top: '',
            left: '',
            width: '',
            height: '',
            borderRadius: '',
          },
          initSize: {
            top: '',
            left: '',
            width: '',
            height: '',
            borderRadius: '',
          },
          show: false,
          run: false,
          foldOnePage: false,
          foldTwoPage: false,
        },

      ],
      nowTime: "",
      slideShow: false,
      chapter: "",
      userName: "Tony",
      userEmail: "23333@ncuos.com",
    }),
    computed:{
      ...mapState({
        loginForm: state => state.login
      }),
    },
    methods: {
      switchSlide() {
        this.slideShow = !this.slideShow;
        let backOb = document.getElementsByClassName('courses')[0];
        if (this.slideShow) {
          backOb.style.filter = "blur(1.8px)"
        } else {
          backOb.style.filter = "blur(0px)"
        }
      },
      slideFade() {
        this.slideShow = false;
        let backOb = document.getElementsByClassName('courses')[0];
        backOb.style.filter = "blur(0px)"
      },
      getTime() {
        let date = new Date();
        this.nowTime = "2219" + "年" + (date.getMonth() + 1) + "月" + (date.getDay() + 7) + "日";
        setInterval(() => {
          date = new Date();
          this.nowTime = "2219" + "年" + (date.getMonth() + 1) + "月" + (date.getDay() + 7) + "日"
        }, 3600000)
      },
      logOut() {

      },
      aboutUs() {

      },
      changePass() {

      },
      changeWall() {

      },
      runEx(course) {
        course.run = true;
        course.show = true;
        if (course.name == '此电脑') {
          course.computerPage = true
        }
        else if (course.name == '文档') {
          course.folderPage = true
        }
        else if (course.name == '第一章') {
          course.chapterOne = true
        }
        else if (course.name == '第二章') {
          course.chapterTwo = true
        }
        else if(course.name == '第三章') {
          course.chapterThree = true
        }
      },
      minimize(course) {
        course.show = false
      },
      maximize(course) {
        let maxHeightNumber = window.innerHeight - 55;
        let mh = String(maxHeightNumber);
        course.size.top = '0';
        course.size.left = '0';
        course.size.width = '100vw';
        course.size.height = mh + 'px';
        course.size.borderRadius = '0'
      },
      close(course) {
        let initSize = course.initSize;
        course.run = false;
        course.show = false;
        course.size.width = initSize.width;
        course.size.height = initSize.height;
        course.size.top = initSize.top;
        course.size.left = initSize.left;
        course.size.borderRadius = initSize.borderRadius;
        if (course.name == '此电脑') {
          course.computerPage = false
        } else if (course.name == '文档') {
          course.folderPage = false
        }
        else if (course.name == '第一章') {
          course.chapterOne = false;
          course.nowPage = course.initPage
        }
        else if (course.name == '第二章') {
          course.chapterTwo = false;
          course.nowPage = course.initPage;
          course.inputValue = '';
          course.results = [];
          course.secInputValue = '';
          course.checkTime = '1';
          course.errorTip = false;
          course.rigthTip = false
        }
        else if (course.name == '第三章') {
          course.chapterThree = false;
          course.nowPage = course.initPage
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
        fold.run = true;
        fold.show = true;
        if (fold.name == '2219-4-1') {
          fold.foldOnePage = true
        } else if (fold.name == '折返吧') {
          fold.foldTwoPage = true
        }
      },
      nextPage(course) {
        course.nowPage ++
      },
      chaTwoRun(course) {
        if(course.inputValue > '36') {
          course.inputValue = '';
          course.secInputValue = '';
          course.results.push(course.runResultType.bigger)
        }
        else if (course.inputValue < '36') {
          course.inputValue = '';
          course.secInputValue = '';
          course.results.push(course.runResultType.smaller)
        }
        else if(course.inputValue == '36'){
          course.inputValue = '';
          course.secInputValue = '';
          course.results.push(course.runResultType.success);
          let next = setTimeout(function(){
            if(course.nowPage<=3){course.nowPage ++}}, 2000)
        }
      },
      sigOper(course, index) {
        if (index == 0) {
          console.log(index);
          console.log(course.checkTime);
          if (course.checkTime == '1'){
          course.inputValue = '>';
          course.checkTime = '2'
          }else {
            course.secInputValue = '>'
          }
        }
        else if (index == 1) {

         if (course.checkTime == '1'){
          course.inputValue = '<';
          course.checkTime = '2'
          }else {
            course.secInputValue = '<'
          }
        }
        else if (index == 2) {
          if (course.checkTime == '1'){
          course.inputValue = '=';
          course.checkTime = '2'
          }else {
            course.secInputValue = '='
          }
        }
        else if (index == 3) {
          if (course.checkTime == '1'){
          course.inputValue = '==';
          course.checkTime = '2'
          }else {
            course.secInputValue = '=='
          }
        }
        else if (index == 4) {
          if (course.checkTime == '1'){
          course.inputValue = '!=';
          course.checkTime = '2'
          }else {
            course.secInputValue = '!='
          }
        }
        else if (index == 5) {
          if (course.checkTime == '1'){
          course.inputValue = '<=';
          course.checkTime = '2'
          }else {
            course.secInputValue = '<='
          }
        }
        else if (index == 6) {
          if (course.checkTime == '1'){
          course.inputValue = ''
          }else {
            course.checkTime = '1';
            course.secInputValue = ''
          }
        }
        else if (index == 7) {
          if (course.checkTime == '1'){
          course.inputValue = '>=';
          course.checkTime = '2'
          }else {
            course.secInputValue = '>='
          }
        }
        else if (index == 8) {
          course.checkTime = '1';
          course.inputValue = '';
          course.secInputValue = ''
        }
      },
      runSecGame(course) {
        if (course.inputValue == '<' && course.secInputValue == '=') {
          course.inputValue = '';
          course.secInputValue = '';
          course.checkTime = '1';
          course.rigthTip = true;
          let next = setTimeout(function(){
            if(course.nowPage<=4){course.nowPage ++}}, 3000)
        }
        else {
          course.inputValue = '';
          course.secInputValue = '';
          course.checkTime = '1';
          course.errorTip = true;
          let next = setTimeout(function(){
            if(course.nowPage<=4){course.errorTip = false}}, 4000)
        }
      }
    },
    created() {
      this.getTime()
    },
    directives: {
      drag: {
        bind: function (el) {
          let oDiv = el;
          oDiv.onmousedown = function (e) {
            let disX = e.clientX - oDiv.offsetLeft;
            let disY = e.clientY - oDiv.offsetTop;
            document.onmousemove = function (e) {
              let l = e.clientX - disX;
              let t = e.clientY - disY;
              oDiv.style.left = l + 'px';
              oDiv.style.top = t + 'px'
            };
            document.onmouseup = function () {
              document.onmousemove = null;
              document.onmouseup = null
            }
          }
        }
      },
      getMiniTasksWidth: {
        bind: function(el) {
          let maxWidthNumber = window.innerWidth -199;
          let maxWdith = String(maxWidthNumber) + 'px';
          el.style.width = maxWdith
        }
      },
      getMaxHeight: {
        bind: function(el) {
          let maxHeightNumber = window.innerHeight - 55;
          let maxHeight = String(maxHeightNumber) + 'px';
          el.style.maxHeight = maxHeight
        }
      }
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

      .locked, .unlocked {
        display: flex;
        height: 86px;
        width: 54px;
        flex-direction: column;
        margin: 21px 0 0 21px;
        .course-img {
          width: 54px;
          height: 54px;
        }

        #image-0 {
          background-image: url("../../assets/icons/Desktop/computer.svg");
        }

        #image-1 {
          background-image: url("../../assets/icons/Desktop/folder.svg");
          background-repeat: no-repeat;
          background-position: 5px 0;
        }
        #image-2 {
          background: url("../../assets/icons/Desktop/第一关_00000.png");
          background-size: 100%;
        }
        #image-3 {
          background: url("../../assets/icons/Desktop/第二关_00000.png");
          background-size: 100%;
        }
        #image-4 {
          background: url("../../assets/icons/Desktop/第三关_00000.png");
          background-size: 100%;
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
          background: url("../../assets/icons/toolbar/修改头像.svg");
        }

        #cPassword {
          background: url("../../assets/icons/toolbar/修改密码.svg");
        }

        #aboutUs {
          background: url("../../assets/icons/toolbar/关于.svg");
        }

        #logOut {
          background: url("../../assets/icons/toolbar/注销.svg");
        }

        #shutDown {
          background: url("../../assets/icons/toolbar/关机.svg");
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
    box-shadow: 0px 2px 10px 0px
		rgba(0, 0, 0, 0.26);
    border-radius: 9px;
    overflow: hidden;
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
          display: flex;
          justify-content: center;
          align-items: center;
          .pro-icon {
            display: block;
            width: 11px;
            height: 12px;
            background-repeat: no-repeat;
          }
          #fwpi-0 {
            background: url("../../assets/icons/2_00000.svg");
            background-size: 100%;
          }
          #fwpi-1 {
            background: url("../../assets/icons/system.svg");
            background-size: 100%;
          }
          #wpi-0 {
            background: url("../../assets/icons/Desktop/computer.svg");
            background-size: 100%;
          }
          #wpi-1 {
            background: url("../../assets/icons/Desktop/folder.svg");
            background-size: 100%;
          }
          #wpi-2 {
            background: url("../../assets/icons/Desktop/第一关_00000.png");
            background-size: 100%;
          }
          #wpi-3 {
            background: url("../../assets/icons/Desktop/第二关_00000.png");
            background-size: 100%;
          }
          #wpi-4 {
            background: url("../../assets/icons/Desktop/第三关_00000.png");
            background-size: 100%;
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
          background-size: 180%;
          background: url("../../assets/icons/windows/X.svg") -8.5px -6.5px;
        }
      }

    }

    .w-body {
      overflow: auto;
      flex-grow: 1;
      .passage-wrapper {
        margin: 32px 19px 27px 19px;
        .passage {
          color: #ffffff;
          font-size: 12px;
        }
        #passage-0 {
          margin-bottom: 45px;
        }
        #passage-1 {
          margin-bottom: 45px;
        }
        #passage-2 {
          margin-bottom: 29px;
        }
        #passage-3 {
          margin-bottom: 44px;
        }
        #passage-4 {
          margin-bottom: 17px;
        }
        #passage-5 {
          margin-bottom: 45 px;
        }
        #passage-6 {
          margin-bottom: 18px;
        }
        #passage-7 {
          margin-bottom: 45px;
        }
        #passage-8 {

        }
      }

    }

    #computer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .os-logo {
        width: 189px;
        height: 189px;
        background: url("../../assets/icons/logo.svg");
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
            background: url("../../assets/icons/2_00000.svg") no-repeat 0 2px;
          }
          #fold-icon-1 {
            background: url("../../assets/icons/system.svg") no-repeat 0 3px;
          }
        }
      }
    }

    #chapter-1 {
      background: #ffffff;
      .page {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
      }
      #c1-p1 {
        #tw1 {
          margin-top: 200px;
          margin-bottom: 200px;
          width: 217px;
          height: 117px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: url("../../assets/line/2.png");
        }
        .titile {
	        font-size: 23px;
	        letter-spacing: 1.6px;
	        color: rgba(0, 0, 0, 0.95);
        }
        .subt {
          margin-top: 20px;
          letter-spacing: 1px;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.95);
        }
        .tap-tip {
          width: 100%;
          display: flex;
          justify-content: center;
           & span {
            font-size: 14px;
            letter-spacing: 1px;
	          color: rgba(71, 71, 71, 0.95);
          }
        }
      }
      #c1-p2 {
        #tw2 {
          width: 270px;
          margin-bottom: 100px;
          margin-top: 150px;
          background: url("../../assets/line/3.svg");
          background-size: 100%;
          #t2 {
            height: 55px;
            font-size: 23px;
	          letter-spacing: 1px;
	          color: rgba(71, 71, 71, 0.95);
          }
          .subt-wrapper {
            .subt {
              font-size: 14px;
              letter-spacing: 1px;
              color: rgba(71, 71, 71, 0.95);
            }
            #s2-1 {
              margin-top: 10px;
            }
            #s2-2 {
              margin-top: 24px;
            }
            #s2-3 {
              #s2-2();
              margin-bottom: 18px;
            }
          }
        }
        .tap-tip {
          	font-size: 14px;
            letter-spacing: 1px;
            color: rgba(71, 71, 71, 0.95);
        }
      }
      #c1-p3 {
        #content-wrapper {
          width: 275px;
          height: 365px;
          margin-bottom: 20px;
          margin-top: 90px;
          background: url("../../assets/line/4.svg");
          background-size: 130%;
          background-position: -10px -40px;
        }
        .title {
          font-size: 17px;
          color: rgba(71,71,71,0.95);
          letter-spacing: 1px;

        }
        .list {
          font-size: 14px;
          color: rgba(71,71,71,0.95);
          letter-spacing: 1px;
          display: flex;
          flex-direction: column;
          margin-top: 44px;
          margin-bottom: 37px;
        }
        .tip {
          margin-top: 25px;
          margin-bottom: 28px;
          font-size: 14px;
          color: rgba(71,71,71,0.95);
          letter-spacing: 1px;
        }
        .tap-tip {
          	font-size: 14px;
            letter-spacing: 1px;
            color: rgba(71, 71, 71, 0.95);
        }
      }
      #c1-p4 {
        .code-block {
          margin-top: 135px;
          background: #333333;
          border-radius: 7px;
          width: 336px;
          height: 193px;
          .code {
            margin-top: 22px;
            margin-left: 17px;
            width: 234px;
	          height: 26px;
            font-size: 14px;
            letter-spacing: 1px;
            .keyw {
              color: rgba(10,205,255,0.95);
            }
            .qh {
              color: rgba(255,255,255,0.95);
            }
            .string {
              color: #5ddca4;
            }
          }
        }
        .tip {
          margin-top: 30px;
          width: 195px;
          height: 20px;
          font-size: 14px;
          letter-spacing: 1px;
          color: rgba(65, 65, 65, 0.95);
        }
        .run-btn {
          margin-top: 40px;
          width: 331px;
	        height: 46px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: solid 1px #3a3a3a;
          .run {
            font-size: 14px;
            letter-spacing: 1px;
            color: rgba(33, 33, 33, 0.95);
          }
        }
      }
      #c1-p5 {
        #c1-result {
          margin-top: 160px;
          margin-bottom: 167px;
          width: 316px;
          height: 160px;
          font-size: 77px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #c1-over {
          & span {
            width: 39px;
            height: 24px;
            font-size: 17px;
            letter-spacing: 1.2px;
	          color: rgba(0, 0, 0, 0.95);
          }
        }
      }
      #c1-p6 {
        display: flex;
        flex-direction: column;
        align-items: center;

      }
      .c1-passages-wrapper {
        margin-top: 150px;
        margin-bottom: 110px;
        width: 276px;
        #c1-pa-1 {
          margin-top: 25px;
          margin-bottom: 25px;
        }
        .c1-passage {
          font-size: 14px;
          color: rgba(71,71,71,0.95);
          letter-spacing: 1px;
          margin-bottom: 25px;
        }
      }
      .c1-tap-tip {
        font-size: 14px;
        letter-spacing: 1px;
        color: rgba(71, 71, 71, 0.95);
      }
    }
    #chapter-2 {
      background: #ffffff;
      .page {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      #c2-w2 {
        margin-top: 188px;
        margin-bottom: 179px;
        #c2-ww {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 20px;
          width: 215px;
          background: url("../../assets/line/B/1.svg");
          background-size: 100%;
          background-position: 0 -2px;
          #c2-t {
            font-size: 23px;
            letter-spacing: 1.6px;
            color: rgba(0, 0, 0, 0.95);
            margin-top: 22px;
            margin-bottom: 29px;
          }
          #subt {
            font-size: 14px;
            letter-spacing: 1px;
	          color: rgba(0, 0, 0, 0.95);
          }
        }
      }
      .c2-tip {
        font-size: 14px;
	      letter-spacing: 1px;
	      color: rgba(71, 71, 71, 0.95);
      }
      #c2-p3 {
        .passages-wrapper {
          background: url("../../assets/line/B/2.svg");
          background-size: 110%;
          background-position: -30px -2px;
          margin-top: 165px;
          margin-bottom: 102px;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 294px;
          & div {
            margin-bottom: 25px;
            font-size: 15px;
            letter-spacing: 1.1px;
          }

        }
        #c2-p3-tap {
          .c2-tip();
        }
      }
      #c2-p4 {
        display: flex;
        flex-direction: column;
        align-items: center;
        #gt1 {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 335px;
          height: 102px;
          font-size: 14px;
          letter-spacing: 1px;
          color: rgba(0, 0, 0, 0.95);
          background: url("../../assets/line/B/3large.svg");
          background-size: 100%;
          background-position: 0 -5px;
          &-wrapper {
            width: 305px;
          }
        }
        .answer-area {
          margin-top: 33px;
          box-shadow: 0px 2px 8px 0px
		        rgba(0, 0, 0, 0.16);
          border-radius: 7px;
          width: 329px;
          height: 79px;
          margin-bottom: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          .answer-wrapper {
            width: 305px;
            font-size: 14px;
            letter-spacing: 1px;
            color: rgba(0, 0, 0, 0.95);
            .answer-input {
              width: 42px;
              height: 16px;
              border-radius: 3px;
              border: solid 1px #bfbfbf;
            }
          }
        }
        .run-area {
          margin-bottom: 17px;
          width: 336px;
          height: 219px;
          background-color: #333333;
          border-radius: 7px;
          display: flex;
          justify-content: center;
          .run-asw {
            margin-top: 21px;
            width: 267px;
            height: 177px;
            overflow: auto;
            font-size: 15px;
            letter-spacing: 1.1px;
            color: rgba(204, 204, 204, 0.95);
            display: flex;
            flex-direction: column;
            &::-webkit-scrollbar {
              width: 2px;
              border-radius: 5px;
              background-color: #bfbfbf;
            }
          }
        }
        .run-btn {
          font-size: 16px;
	        color: rgba(55, 55, 55, 0.95);
          border-radius: 23.5px;
          border: solid 1px #737373;
          width: 332px;
          height: 47px;
          display: flex;
          justify-content: center;
          align-items: center;
          .run-icon {
            width: 9px;
          	height: 17px;
            background: url("../../assets/line/B/continue.svg");
            background-size: 100%;
            background-repeat: no-repeat;
            margin-left: 7px;
            background-position: 0 3px;
          }
        }
      }
      #c2-p5 {
        display: flex;
        flex-direction: column;
        align-items: center;
        #gt2 {
          width: 335px;
          height: 107px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: url("../../assets/line/B/3svg.svg");
          background-size: 100%;
          background-position: -10px 10px;
          margin-top: 35px;

          .gt2-wrapper {
            font-size: 14px;
            letter-spacing: 1px;
            color: rgba(0, 0, 0, 0.95);
          }
        }
        #aa2 {
          margin-top: 30px;
          box-shadow: 0px 2px 8px 0px
		        rgba(0, 0, 0, 0.16);
          border-radius: 7px;
          width: 329px;
          height: 79px;
          margin-bottom: 29px;
          display: flex;
          justify-content: center;
          align-items: center;
          .answer-wrapper {
            width: 305px;
            font-size: 14px;
            letter-spacing: 1px;
            color: rgba(0, 0, 0, 0.95);
            .answer-input {
              width: 42px;
              height: 16px;
              border-radius: 3px;
              border: solid 1px #bfbfbf;
            }
            .warn-tip {
              font-size: 14px;
              letter-spacing: 1px;
              color: rgba(248, 83, 0, 0.95);
            }
          }
        }
        .op-area {
          width: 304px;
          height: 192px;
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 14px;
          .op-btn {
            width: 69px;
            height: 35px;
            background-color: #686868;
            box-shadow: 0px 2px 9px 0px
              rgba(0, 0, 0, 0.27);
            border-radius: 8px;
            font-size: 14px;
            letter-spacing: 1px;
            color: rgba(255, 255, 255, 0.95);
            margin-left: 45px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          #oper-0 {
            font-size: 24px;
            margin-left: 0;
          }
          #oper-1 {
            font-size: 24px;
          }
          #oper-2 {
            font-size: 24px;
          }
          #oper-3 {
            font-size: 24px;
            margin-left: 0;
          }
          #oper-4 {
            font-size: 24px;
          }
          #oper-5 {
            font-size: 24px;
          }
          #oper-6 {
            margin-left: 0;
          }
          #oper-7 {
            font-size: 24px;
          }
        }
        .run-btn {
          font-size: 16px;
	        color: rgba(55, 55, 55, 0.95);
          width: 332px;
          height: 43px;
          border-radius: 23.5px;
          border: solid 1px #737373;
          display: flex;
          justify-content: center;
          align-items: center;
          .run-icon {
            width: 9px;
          	height: 17px;
            background: url("../../assets/line/B/continue.svg");
            background-size: 100%;
            background-repeat: no-repeat;
            margin-left: 7px;
            background-position: 0 3px;
          }
        }
        .s-f-warn-area-wrong {
          border-top: solid 4px #d23333;
          height: 81px;
          width: 100%;
          background: #ff5252;
          display: flex;
          align-items: center;
          justify-content: center;
          .error {
            margin-left: 20px;
            width: 61px;
            height: 20px;
            border: solid 2px #ffffff;
            font-size: 11px;
            letter-spacing: 1.3px;
            color: rgba(255, 255, 255, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .tttips-wrapper {
            display: flex;
            margin-left: 27px;
            margin-right: 25px;
            .dot-wrapper {
              margin-right: 5px;
              height: 28px;
              width: 5px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              .dot {
                width: 5px;
                height: 5px;
                color: #ffffff;
              }
            }
            .tttips {
              display: flex;
              flex-direction: column;
              .tttip {
                font-size: 9px;
                letter-spacing: 0.7px;
                color: rgba(255, 255, 255, 0.95)
              }
            }
          }
        }
        .s-f-warn-area-right {
          border-top: solid 4px #08c806;
          height: 81px;
          width: 100%;
          background: #24de59;
          display: flex;
          align-items: center;
          .right {
            margin-left: 20px;
            width: 61px;
            height: 20px;
            border: solid 2px #ffffff;
            font-size: 11px;
            letter-spacing: 1.3px;
            color: rgba(255, 255, 255, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          #right {
            margin-left: 75px;
            .right-tip {
              font-size: 21px;
              letter-spacing: 1.5px;
	            color: rgba(255, 255, 255, 0.95);
            }
            .gou {

            }
          }
        }
      }
      #c2-p6 {
        display: flex;
        flex-direction: column;
        align-items: center;
        .p6tw {
          width: 336px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: url("../../assets/line/B/3svg.svg");
          background-size: 100%;
          background-position: 0 10px;
          margin-top: 34px;
          margin-bottom: 68px;
          .p6t {
            width: 270px;
            height: 60px;
            font-size: 14px;
            letter-spacing: 1px;
	          color: rgba(0, 0, 0, 0.95);
          }
        }
        .p6li {
          background: url("../../assets/line/B/4.svg");
          background-size: 100%;
          font-size: 11px;
          color: #000000;
          display: flex;
          margin-bottom: 81px;
          .col-1 {
            width: 60px;
            .row {
              height: 27px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
          .col-2 {
            width: 118px;
            .row {
              height: 27px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
          .col-3 {
            width: 145px;
            .row {
              height: 27px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
        .next-step {
          font-size: 12px;
          letter-spacing: 0.9px;
          color: #000000;
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
        background-image: url("../../assets/icons/logo.svg");
        background-size: 140%;
        background-position: -8px -8px;
        background-repeat: no-repeat;
      }

      .local-time {
        margin-right: 10px;
        width: 99px;
        font-size: 12.9px;
        color: rgba(255, 255, 255, 0.95);
        letter-spacing: 0.7px;
      }
    }

    .mini-tasks {
      overflow: hidden;
      display: flex;
      flex-wrap: nowrap;
      position: absolute;
      bottom: 0;
      left: 80px;
      height: 55px;
      align-items: center;
      .mini-task {
        padding-right: 10px;
        flex-shrink: 1;
      }

      .icon-wrapper {
        .task-icon {
          background-color: #f5f5f5;
          border-radius: 6px;
          width: 9.3vw;
          height: 9.3vw;
          max-height: 35px;
          max-width: 35px;
        }
        #task-0 {
          background-size: 100%;
          background-repeat: no-repeat;
          background-image: url("../../assets/icons/Desktop/computer.svg");
        }
        #task-1 {
          background-size: 100%;
          background-repeat: no-repeat;
          background-image: url("../../assets/icons/Desktop/folder.svg");
        }
        #task-2 {
          background-size: 100%;
          background-repeat: no-repeat;
          background-image: url("../../assets/icons/Desktop/第一关_00000.png");
        }
        #task-3 {
          background-size: 100%;
          background-repeat: no-repeat;
          background-image: url("../../assets/icons/Desktop/第二关_00000.png");
        }
        #task-4 {
          background-size: 100%;
          background-repeat: no-repeat;
          background-image: url("../../assets/icons/Desktop/第三关_00000.png");
        }
        #ftask-0 {
          background-size: 75%;
          background-position: 3.5px 0.5px;
          background-repeat: no-repeat;
          background-image: url("../../assets/icons/2_00000.svg");
        }
        #ftask-1 {
          background-size: 75%;
          background-position: 3px 0.5px;
          background-repeat: no-repeat;
          background-image: url("../../assets/icons/system.svg");
        }
      }
    }
  }
</style>
