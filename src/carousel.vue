<template>
	<div class="g-carousel">
		<slot></slot>
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
		reverse: {
      type: Boolean,
			default: false
		}
	},
	mounted() {
    const names = this.$children.map(vm => vm.name)
    let index = names.indexOf(this.getSelected())
    const run = () => {
	    if (index === names.length) { index = 0 }
	    if (index === -1) { index = names.length - 1 }
      this.$emit('update:selected', names[index])
	    if (this.reverse) {
        index --
	    } else {
        index ++
	    }
	    setTimeout(run, this.duration * 1000)
    }
    this.updateChildren()
		setTimeout(run, this.duration * 1000)
  },
  updated() {
    this.updateChildren()
  },
	methods: {
    updateChildren() {
      const selected = this.getSelected()
	    this.$children.forEach(vm => {
		    // const names = this.$children.map(vm => vm.name)
		    // const current = names.indexOf(this.getSelected())
		    // const index = names.indexOf(vm.name)
        vm.reverse = this.reverse
        vm.selected = selected
	    })
    },
    getSelected() {
      return this.selected || this.$children[0].name
    },
	}
}
</script>

<style lang="scss" scoped>
.g-carousel {
	width: 450px;
	height: 150px;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	overflow: hidden;
	position: relative;
	border: 1px solid #67c23a;
	background: #00a0e9;
}
</style>
