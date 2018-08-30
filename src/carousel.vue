<template>
	<div
		class="g-carousel"
		@mouseenter="mouseHandler('enter')"
		@mouseleave="mouseHandler('leave')"
		@touchstart="onTouchStart"
		@touchmove="onTouchMove"
		@touchend="onTouchEnd">
		<div class="window">
			<slot></slot>
		</div>
		<transition name="left-fade">
			<div
				v-if="arrow !== 'never'"
				v-show="arrow === 'always' || visible"
				class="pre-btn btn-wrapper"
				@click="onClickPre">
				<g-icon name="left" class="icon"></g-icon>
			</div>
		</transition>
		<transition name="right-fade">
			<div
				v-if="arrow !== 'never'"
				v-show="arrow === 'always' || visible"
				class="next-btn btn-wrapper"
				@click="onClickNext">
				<g-icon name="right" class="icon"></g-icon>
			</div>
		</transition>
		<div class="dots-wrapper">
			<span
				class="dot"
				v-for="index in childrenLength"
				:class="{ active: selectedIndex === (index - 1) }"
				@click="select(index-1)">
			</span>
		</div>
	</div>
</template>

<script>
import Icon from './icon'

export default {
  name: 'g-carousel',
	components: {
    'g-icon': Icon
	},
	props: {
    selected: {
      type: String
    },
		autoPlay: {
      type: Boolean,
			default: true
		},
		duration: {
      type: [Number, String],
			default: 3
		},
		arrow: {
      type: String,
			default: 'always',
			validator(value) {
			  return ['always', 'never', 'hover'].indexOf(value) > -1
			}
		}
	},
	data() {
    return {
      childrenLength: 0,
	    lastSelectedIndex: null,
	    timerId: null,
	    startPoint: null,
      isArrowOperate: false,
	    visible: false
    }
	},
	computed: {
    selectedIndex() {
      return this.names.indexOf(this.getSelected())
    },
		names() {
      return this.items.map(vm => vm.name)
		},
		items() {
      return this.$children.filter(vm => vm.$options.name === 'g-carousel-item')
		},
	},
	mounted() {
    this.isMobile()
    this.playAutomatically()
    this.updateChildren()
    this.childrenLength = this.items.length
  },
  updated() {
    this.updateChildren()
  },
	methods: {
    onClickPre() {
      this.isArrowOperate = true
      this.select(this.selectedIndex - 1)
    },
    onClickNext() {
      this.isArrowOperate = true
      this.select(this.selectedIndex + 1)
    },
    onTouchStart(e) {
      if (e.touches.length > 1) { return }
      this.startPoint = e.touches[0]
	    this.pause()
    },
    onTouchMove(e) {
    },
    onTouchEnd(e) {
      const { clientX: x1, clientY: y1 } = this.startPoint
	    const { clientX: x2, clientY: y2 } = e.changedTouches[0]
      const deltaY = Math.abs(y1 - y2)
	    const distance = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))
	    if ((distance / deltaY) > 2) {
		    if (x2 > x1) {
		      this.select(this.selectedIndex - 1)
		    } else {
          this.select(this.selectedIndex + 1)
		    }
	    }
	    this.$nextTick(() => {
	      this.playAutomatically()
	    })
    },
    mouseHandler(type) {
      if (type === 'enter') {
        this.visible = true
				this.pause()
	      return
      }
      this.visible = false
      this.playAutomatically()
    },
		pause() {
      clearTimeout(this.timerId)
			this.timerId = null
		},
    playAutomatically() {
      if (this.timerId) {
        return
      }
			const names  = this.names
	    const run = () => {
				let index = names.indexOf(this.getSelected())
	      let newIndex = index + 1
	      this.select(newIndex)
	      this.timerId = setTimeout(run, this.duration * 1000)
	    }
	    this.timerId = setTimeout(run, this.duration * 1000)
    },
    updateChildren() {
      const selected = this.getSelected()
	    this.items.forEach(vm => {
        let reverse = (this.selectedIndex < this.lastSelectedIndex)
        if (this.timerId || this.isMobile() || this.isArrowOperate) {
          if (this.selectedIndex === 0 && this.lastSelectedIndex === this.items.length - 1) {
            reverse = false
          }
          if (this.selectedIndex === this.items.length - 1 && this.lastSelectedIndex === 0) {
            reverse = true
          }
		    }
		    vm.reverse = reverse
        this.$nextTick(() => {
          this.isArrowOperate = false
          vm.selected = selected
        })
	    })
    },
		select(newIndex) {
      if (newIndex === this.names.length) { newIndex = 0 }
      if (newIndex === -1) { newIndex = this.names.length - 1 }
      this.lastSelectedIndex = this.selectedIndex
      this.$emit('update:selected', this.names[newIndex])
		},
    getSelected() {
      return this.selected || this.items[0].name
    },
		isMobile() {
      const reg = /Android|webOS|iPhone|iPod|BlackBerry/i
      return reg.test(navigator.userAgent)
    }
	}
}
</script>

<style lang="scss" scoped>
.g-carousel {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	overflow: hidden;
	position: relative;
	border: 1px solid #67c23a;
	.window {
		width: 100%;
		height: 100%;
	}
	.btn-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		width: 36px;
		height: 36px;
		top: 50%;
		margin-top: -18px;
		background-color: rgba(31,45,61,.11);
		border-radius: 50%;
		cursor: pointer;
		&:hover {
			background-color: rgba(31,45,61,.23);
		}
		.icon {
			fill: #fff;
		}
		&.pre-btn {
			left: 16px;
		}
		&.next-btn {
			right: 16px;
		}
	}
	.dots-wrapper {
		position: absolute;
		bottom: 12px;
		left: 50%;
		transform: translateX(-50%);
		.dot {
			display: inline-block;
			width: 16px;
			height: 3px;
			margin: 0 3px;
			opacity: 0.3;
			background: #fff;
			cursor: pointer;
			&:hover {
				opacity: 1;
			}
			&.active {
				transition: all .3s;
				width: 24px;
				opacity: 1;
			}
		}
	}
	.left-fade-enter-active,
	.left-fade-leave-active,
	.right-fade-enter-active,
	.right-fade-leave-active {
		transition: all .3s;
	}
	.left-fade-enter{
		transform: translateX(-16px);
		opacity: 0;
	}
	.right-fade-enter{
		transform: translateX(16px);
		opacity: 0;
	}
}
</style>
