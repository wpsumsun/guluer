<template>
	<div class="tabs-item" @click="change">
		<slot></slot>
	</div>
</template>

<script>
	export default {
	  name: 'g-tabs-item',
		props: {
	    name: {
	      type: String,
		    require: true
	    },
	    disabled: {
	      type: Boolean,
		    default: false
	    },
		},
		inject: ['eventBus'],
		created() {

		},
		methods: {
      change() {
        this.eventBus.$emit('update:selected', this.name)
      },
		}
	}
</script>

<style lang="scss" scoped>
	.tabs-item {
		padding: 0 3em;
		flex-shrink: 0;
	}
</style>