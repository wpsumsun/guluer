<template>
	<div class="collapse">
		<slot></slot>
	</div>
</template>

<script>
	export default {
	  name: 'g-collapse'
	}
</script>

<style lang="scss" scoped>
	.collapse {
		background-color: #fafafa;
		border-radius: 4px;
		border: 1px solid #d9d9d9;
		border-bottom: 0;
	}
</style>