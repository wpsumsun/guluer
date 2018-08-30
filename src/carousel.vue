<template>
	<div class="g-carousel" @mouseenter="mouseHandler('enter')" @mouseleave="mouseHandler('leave')">
		<div class="window">
			<slot></slot>
		</div>
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
export default {
  name: 'g-carousel',
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
	},
	data() {
    return {
      childrenLength: 0,
	    lastSelectedIndex: null,
	    timerId: null
    }
	},
	computed: {
    selectedIndex() {
      return this.names.indexOf(this.getSelected())
    },
		names() {
      return this.$children.map(vm => vm.name)
		},
	},
	mounted() {
    this.playAutomatically()
    this.updateChildren()
    this.childrenLength = this.$children.length
  },
  updated() {
    this.updateChildren()
  },
	methods: {
    mouseHandler(type) {
      if (type === 'enter') {
				this.pause()
	      return
      }
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
		    if (newIndex === names.length) { newIndex = 0 }
		    if (newIndex === -1) { newIndex = names.length - 1 }
	      this.select(newIndex)
	      this.timerId = setTimeout(run, this.duration * 1000)
	    }
	    this.timerId = setTimeout(run, this.duration * 1000)
    },
    updateChildren() {
      const selected = this.getSelected()
	    this.$children.forEach(vm => {
        let reverse = (this.selectedIndex < this.lastSelectedIndex)
		    if (this.selectedIndex === 0 && this.lastSelectedIndex === this.$children.length - 1) {
		      reverse = false
		    }
		    if (this.selectedIndex === this.$children.length - 1 && this.lastSelectedIndex === 0) {
		      reverse = true
		    }
		    vm.reverse = reverse
        this.$nextTick(() => {
          vm.selected = selected
        })
	    })
    },
		select(index) {
      this.lastSelectedIndex = this.selectedIndex
      this.$emit('update:selected', this.names[index])
		},
    getSelected() {
      return this.selected || this.$children[0].name
    },
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
}
</style>
