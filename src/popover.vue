<template>
	<div class="popover" @click="toggle" ref="popover">
		<div class="content-wrapper" v-if="visible" ref="contentWrapper" :class="{ [`${position}`]: !!position }">
			<slot name="content"></slot>
		</div>
		<span class="trigger" ref="trigger">
			<slot></slot>
		</span>
	</div>
</template>

<script>
  export default {
    name: 'g-popover',
	  props: {
      position: {
        type: String,
	      default: 'top',
	      validator(value) {
	        return ['top', 'left', 'right', 'bottom'].indexOf(value) !== -1
	      }
      }
	  },
	  data() {
      return {
        visible: false
      }
	  },
	  methods: {
      getPosition() {
	      const { contentWrapper, trigger } = this.$refs
        document.body.appendChild(contentWrapper)
        const { left, top, height, width } = trigger.getBoundingClientRect()
        const { height: contentHeight } = contentWrapper.getBoundingClientRect()
	      const positions = {
          top: {
            left: left + window.scrollX,
	          top: top + window.scrollY
          },
		      bottom: {
            left: left + window.scrollX,
            top: top + window.scrollY + height
		      },
		      left: {
            left: left + window.scrollX,
            top: top + window.scrollY - (contentHeight - height)/2
		      },
		      right: {
            left: left + window.scrollX + width,
            top: top + window.scrollY - (contentHeight - height)/2
		      },
	      }

        contentWrapper.style.left = `${positions[this.position].left}px`
        contentWrapper.style.top = `${positions[this.position].top}px`

      },
      toggle(event) {
        if (this.$refs.trigger.contains(event.target)) {
          this.visible = !this.visible
          if (this.visible) {
            this.$nextTick(() => {
              this.getPosition()
              document.addEventListener('click', this.closeHandler)
            })
          } else {
            this.close()
          }
        }
      },
		  closeHandler(event) {
        if (this.$refs.popover
		        && (this.$refs.popover.contains(event.target) || this.$refs.popover === event.target)
            || (this.$refs.contentWrapper
				        && (this.$refs.contentWrapper === event.target || this.$refs.contentWrapper.contains(event.target)))) {
          return
        }
        this.close()
		  },
		  close() {
        this.visible = false
        document.removeEventListener('click', this.closeHandler)
		  }
	  },
  }
</script>

<style lang="scss" scoped>
	.popover {
		display: inline-flex;
		position: relative;
	}
	.content-wrapper {
		width: 200px;
		position: absolute;
		padding: 18px 20px;
		border: 1px solid #ebeef5;
		border-radius: 4px;
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
		max-width: 20em;
		word-break: break-all;
		background: #fff;
		&:before {
			content: '';
			display: inline-block;
			width: 0;
			height: 0;
			position: absolute;
		}
		&.top {
			transform: translateY(-100%);
			margin-top: -10px;
			&:before {
				border-top: 6px solid #fff;
				border-left: 6px solid transparent;
				border-right: 6px solid transparent;
				top: 100%;
				left: 10px;
			}
		}
		&.bottom {
			margin-top: 10px;
			&:before {
				border-bottom: 6px solid #fff;
				border-left: 6px solid transparent;
				border-right: 6px solid transparent;
				top: -5px;
				left: 10px;

			}
		}
		&.left {
			transform: translateX(-100%);
			margin-left: -10px;
			&:before {
				border-bottom: 6px solid transparent;
				border-left: 6px solid #fff;
				border-top: 6px solid transparent;
				top: calc(50% - 4px);
				left: 100%;
			}
		}
		&.right {
			margin-left: 10px;
			&:before {
				border-bottom: 6px solid transparent;
				border-right: 6px solid #fff;
				border-top: 6px solid transparent;
				top: calc(50% - 4px);
				right: 100%;
			}
		}
	}
</style>
