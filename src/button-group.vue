<template>
	<div class="g-button-group">
		<slot></slot>
	</div>
</template>

<script>
  export default {
    name: "button-group",
	  mounted() {
      for(let node of this.$el.children) {
        if (node.nodeName.toLowerCase() !== 'button') {
          console.warn('g-button-group 的子元素应为 g-button,否则会有样式问题')
        }
      }
	  },
  }
</script>

<style scoped lang="scss">
@import "var";
.g-button-group {
	display: inline-flex;
	vertical-align: middle;
	.g-button {
		&:not(:first-child) {
			margin-left: -1px;
		}
		border-radius: 0;
		&:first-child {
			border-top-left-radius: $border-radius;
			border-bottom-left-radius: $border-radius;
		}
		&:last-child {
			border-top-right-radius: $border-radius;
			border-bottom-right-radius: $border-radius;
		}
		&:hover {
			position: relative;
			z-index: 1;
		}
	}
}
</style>