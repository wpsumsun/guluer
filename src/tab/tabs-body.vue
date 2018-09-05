<template>
	<div class="tabs-body">
		<slot></slot>
	</div>
</template>

<script>
	export default {
	  name: 'g-tabs-body',
		inject: ['eventBus'],
		created() {
		},
	}
</script>

<style lang="scss" scoped>

</style>