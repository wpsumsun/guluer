<template>
  <div class="toast" ref="toast">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <span 
      v-if="closeButton" 
      class="close"
      @click="closeHandler" 
      ref="close">
      {{ closeButton.text }}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'g-toast',
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      duration: {
        type: [Number, String],
        default: 3,
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
      }
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
          }, this.duration * 1000)
        }
      },
      close() {
        this.$el.remove()
        this.$destroy()
      },
      closeHandler() {
        this.close()
        this.closeButton.callback(this)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .toast {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
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