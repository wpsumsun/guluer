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
	    this.eventBus.$on('update:selected', (name) => {
	      console.log('body', name)
	    })
		},
	}
</script>

<style lang="scss" scoped>

</style>