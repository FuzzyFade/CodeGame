<template>
  <p class="security-code-wrap">
    <label for="code">
      <ul class="security-code-container">
        <li :key="index" class="field-wrap" v-for="(item, index) in number">
          <i class="char-field">{{value[index] || placeholder}}</i>
        </li>
      </ul>
    </label>
    <input :maxlength="number"
           @keyup="handleInput($event)"
           autocapitalize="off"
           autocomplete="off"
           autocorrect="off"
           class="input-code"
           id="code" name="code"
           ref="input"
           type="tel"
           v-model="value">
  </p>
</template>

<script>
  export default {
    name: 'SecurityCode',
    // component properties
    props: {
      number: {
        type: Number,
        default: 4
      },
      placeholder: {
        type: String,
        default: ' '
      }
    },
    // variables
    data: () => ({
      value: ''
    }),
    methods: {
      hideKeyboard() {
        // 输入完成隐藏键盘
        document.activeElement.blur();// ios隐藏键盘
        this.$refs.input.blur() // android隐藏键盘
      },
      handleSubmit() {
        this.$emit('input', this.value)
      },
      handleInput() {
        this.$refs.input.value = this.value;
        if (this.value.length >= this.number) {
          this.hideKeyboard()
        }
        this.handleSubmit()
      }
    }
  }

</script>

<style scoped lang="stylus">
  .security-code-wrap
    overflow hidden

  .security-code-container
    margin 0
    padding 0
    display -webkit-flex
    display flex
    justify-content center

    .field-wrap
      border-radius 6px
      list-style none
      display block
      width 50px
      height 50px
      line-height 50px
      font-size 22px
      background-color #e8e8e8
      margin 6.5px
      color #070707

      .char-field
        font-style normal

  .input-code
    position absolute
    left -9999px
    top -99999px
    width 0
    height 0
    opacity 0
    overflow visible
    z-index -1
</style>
