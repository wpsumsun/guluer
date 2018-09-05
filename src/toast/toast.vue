<template>
  <div class="wrapper" :class="toastClass">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default"></div>
      </div>
      <span
        v-if="closeButton"
        class="close"
        @click="closeHandler"
        ref="close">
        {{ closeButton.text }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'g-toast',
    props: {
      autoClose: {
        type: [Boolean, Number],
        default: true,
        validator(value) {
          return value === true || typeof value === 'number'
        }
      },
      closeButton: {
        type: Object,
        default() {
          return {
            text: '关闭',
            callback(toast) {
              toast.close()
            }
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'middle'].indexOf(value) !== -1
        }
      }
    },
    computed: {
      toastClass() {
        return {
          [`${this.position}`]: !!this.position
        }
      },
    },
    mounted() {
      this.updateLineHeight()
      this.autoCloseHandler()
    },
    methods: {
      updateLineHeight() {
        this.$nextTick(() => {
          this.$refs.close.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      }, 
      autoCloseHandler() {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoClose * 1000)
        }
      },
      close() {
        this.$el.remove()
        this.$emit('close')
        this.$destroy()
      },
      closeHandler() {
        this.close()
        if (this.closeButton.callback) {
          this.closeButton.callback(this)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $animation_duration: .3s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }
  @keyframes slide-down {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 100%;
      transform: translateY(0);
    }
  }
  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 100%;
      transform: translateY(0);
    }
  }
  .wrapper {
    position: fixed;
    left: 50%;
    &.top {
      top: 0;
      transform: translateX(-50%);
      .toast {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slide-down $animation_duration;
      }
    }
    &.bottom {
      bottom: 0;
      transform: translateX(-50%);
      .toast {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: slide-up $animation_duration;
      }
    }
    &.middle {
      top: 50%;
      transform: translate(-50%, -50%);
      .toast {
        animation: fadeIn $animation_duration;
      }
    }
  }
  .toast {
    display: flex;
    min-height: 40px;
    max-width: 400px;
    font-size: 14px;
    line-height: 1.2;
    color: #fff;
    align-items: center;
    background: rgba(0,0,0,0.74);
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
    padding: 0 8px;
    .message {
      padding: 8px 0;
    }
    .close {
      display: inline-flex;
      padding-left: 8px;
      height: 100%;
      border-left: 1px solid #666;
      align-items: center;
      margin-left: 8px;
      flex-shrink: 0;
      cursor: pointer;
    }
  }
</style>