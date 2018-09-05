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
      console.log('xxxxxxx', this.root);
      this.root.findChildren(this)
	  },
	  methods: {
      onClick() {
        this.$emit('add:selected', this.name)
      },
	  },
  }
</script>

<style lang="scss" scoped>
.menu-item {
	padding: 10px 20px;
	&.active {
		background: #00a0e9;
	}
}
</style>