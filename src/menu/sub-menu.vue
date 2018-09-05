<template>
	<div class="sub-menu">
		<span class="title">
			<slot name="title"></slot>
		</span>
		<div class="popover">
			<slot></slot>
		</div>
	</div>
</template>

<script>
  export default {
    name: "g-menu"
  }
</script>

<style lang="scss" scoped>
.sub-menu {
	padding: 10px 20px;
	position: relative;
	.popover {
		position: absolute;
		left: 0;
		top: 100%;
	}
}
</style>