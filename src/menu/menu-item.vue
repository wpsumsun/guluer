<template>
	<div class="menu-item" :class="{ active: selected }" @click="onClick">
		<slot></slot>
	</div>
</template>

<script>
  export default {
    name: "g-menu",
	  props: {
      name: {
        type: String,
	      require: true
      }
	  },
	  inject: ['root'],
	  data() {
      return {
        selected: false
      }
	  },
	  created() {
      this.root.findChildren(this)
	  },
	  methods: {
      onClick() {
        this.root.namePath = []
        this.root.namePath.push(this.name)
        this.$parent.updateNamePath && this.$parent.updateNamePath()
        this.$parent.close && this.$parent.close()
        this.$emit('add:selected', this.name)
      },
	  },
  }
</script>

<style lang="scss" scoped>
@import "var";
.menu-item {
	padding: 10px 20px;
	cursor: pointer;
	&.active {
		border-bottom: 2px solid $blue-light;
		color: #303133;
	}
}
</style>