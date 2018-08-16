<template>
	<div class="tabs">
		<slot></slot>
	</div>
</template>

<script>
	import Vue from 'vue'
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
		data() {
	    return {
	      eventBus: new Vue(),
	    }
		},
		provide() {
	    return {
        eventBus: this.eventBus
	    }
		},
		created() {
	    console.log('this.eventBus', this)
		}
	}
</script>

<style lang="scss" scoped>

</style>