<template>
	<div class="menu" :class="{ vertical }">
		<slot></slot>
		{{ namePath }}
	</div>
</template>

<script>
  export default {
    name: "g-menu",
	  props: {
      selected: {
        type: Array,
	      default() { return [] },
      },
		  multiple: {
        type: Boolean,
			  default: false
		  },
		  vertical: {
        type: Boolean,
			  default: false
		  }
	  },
	  data() {
      return {
        children: [],
	      namePath: []
      }
	  },
	  provide() {
      return {
        root: this,
	      vertical: this.vertical
      }
	  },
	  mounted() {
      this.updateChildrenStatus()
		  this.listenToChildren()
    },
	  updated() {
      this.updateChildrenStatus()
	  },
	  methods: {
      findChildren(vm) {
        this.children.push(vm)
      },
		  updateChildrenStatus() {
        this.children.forEach(vm => {
          vm.selected = this.selected.indexOf(vm.name) > -1
        })
		  },
      listenToChildren() {
        this.children.forEach(vm => {
          vm.$on('add:selected', (name) => {
            if (this.multiple) {
              if (this.selected.indexOf(name) < 0) {
                const copy = JSON.parse(JSON.stringify(this.selected))
	              copy.push(name)
	              this.$emit("update:selected", copy)
              }
            } else {
              this.$emit('update:selected', [name])
            }
          })
        })
      },
	  }
  }
</script>

<style lang="scss" scoped>
@import "var";
.menu {
	display: flex;
	border-bottom: 1px solid $gray-light;
	color: #909399;
	&.vertical {
		flex-direction: column;
	}

}
</style>