<template>
	<div class="g-carousel">
		<div class="window">
			<slot></slot>
		</div>
		<div class="dots-wrapper">
			<span
				class="dot"
				v-for="index in childrenLength"
				:class="{ active: selectedIndex === (index - 1) }"
				@click="select(index-1)">
				{{ index }}
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
			default: 4
		},
	},
	data() {
    return {
      childrenLength: 0,
	    lastSelectedIndex: null,
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
    playAutomatically() {
			const names  = this.names
	    const run = () => {
				let index = names.indexOf(this.getSelected())
	      let newIndex = index + 1
		    if (newIndex === names.length) { newIndex = 0 }
		    if (newIndex === -1) { newIndex = names.length - 1 }
	      this.select(newIndex)
	      setTimeout(run, this.duration * 1000)
	    }
	    setTimeout(run, this.duration * 1000)
    },
    updateChildren() {
      const selected = this.getSelected()
	    this.$children.forEach(vm => {
        vm.reverse = (this.selectedIndex < this.lastSelectedIndex)
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
			&.active {
				background: #42b983;
			}
		}
	}
}
</style>
