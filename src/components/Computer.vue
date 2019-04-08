<template>
  <div id="computer">
    <div class="os-logo"></div>
    <div class="os-name">996OS Escape</div>
    <div class="version">版本 1.0.1</div>
    <div class="os-info">
      <div class="activeDate">激活日期 2019.4.14</div>
      <div class="cpu">
        <span>处理器 </span>
        <span>{{cpu}}</span>
      </div>
      <div class="stora">
        <span>内存 </span>
        <span>{{stora}}</span>
      </div>
      <div class="gpu">
        <span>图形卡 </span>
        <span>{{gpu}}</span>
      </div>
    </div>
    <v-btn class="advancedOp" flat>高级设置</v-btn>
  </div>
</template>

<script>
  export default {
    name: "Computer",
    props: {
      cpu: String,
      stora: String,
      gpu: String,
    }
  }
</script>

<style lang="less" scoped>
  #computer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .os-logo {
      width: 189px;
      height: 189px;
      background: url("../assets/icons/logo.svg");
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
</style>
