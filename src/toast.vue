<template>
  <div class="toast">
    <slot></slot>
    <span v-if="closeButton" class="close" @click="closeHandler">
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
      }
    },
    mounted() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.duration * 1000)
      }
    },
    methods: {
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
    height: 40px;
    font-size: 14px;
    color: #fff;
    align-items: center;
    background: rgba(0,0,0,0.74);
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
    padding: 0 8px;
    .close {
      display: inline-flex;
      padding-left: 8px;
      height: 100%;
      border-left: 1px solid #666;
      align-items: center;
      margin-left: 8px;
    }
  }
</style>