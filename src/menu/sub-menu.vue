<template>
	<div class="sub-menu">
		<span class="title" @click="toggle">
			<slot name="title"></slot>
		</span>
		<div class="popover" v-show="visible">
			<slot></slot>
		</div>
	</div>
</template>

<script>
  export default {
    name: "g-menu",
	  data() {
      return {
        visible: false,
      }
	  },
	  methods: {
      toggle() {
        this.visible = !this.visible
      },
	  }
  }
</script>

<style lang="scss" scoped>
.sub-menu {
	position: relative;
	.title {
		padding: 10px 20px;
		display: inline-block;
		vertical-align: middle;
	}
	.popover {
		position: absolute;
		left: 0;
		top: 100%;
	}
}
</style>