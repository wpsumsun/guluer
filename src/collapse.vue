<template>
	<div class="collapse">
		<slot></slot>
	</div>
</template>

<script>
	import  Vue from 'vue'
	export default {
	  name: 'g-collapse',
		props: {
	    single: {
	      type: Boolean,
		    default: false
	    },
			selected: {
	      type: String
			},
		},
		data() {
	    return {
	      eventBus: new Vue(),
	    }
		},
		mounted() {
	    this.eventBus.$emit('update:selected', this.selected)
			this.eventBus.$on('update:selected', name => {
			  this.$emit('update:selected', name)
			})
		},
		provide() {
      return {
        eventBus: this.eventBus
      }
		},
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