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
	    }
		},
		data() {
	    return {
	      eventBus: new Vue(),
	    }
		},
		provide() {
	    if (this.single) {
        return {
          eventBus: this.eventBus
        }
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