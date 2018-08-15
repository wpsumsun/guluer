<template>
	<div class="tabs">
		<slot></slot>
	</div>
</template>

<script>
	export default {
	  name: 'g-tabs',
		props: {
	    selected: {
	      type: String,
		    require: true
	    },
			direction: {
	      type: String,
				default: 'horizontal',
				validator(value) {
				  return ['vertical', 'horizontal'].indexOf(value) !== -1
				}
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>