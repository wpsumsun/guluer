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
	      type: Array
			},
		},
		data() {
	    return {
	      eventBus: new Vue(),
	    }
		},
		mounted() {
	    this.eventBus.$emit('update:selected', this.selected)
			this.eventBus.$on('update:addSelected', name => {
			  let selectedCopy = JSON.parse(JSON.stringify(this.selected))
			  if (this.single) {
			    selectedCopy = [name]
			  } else {
					selectedCopy.push(name)
			  }
        this.eventBus.$emit('update:selected', selectedCopy)
			  this.$emit('update:selected', selectedCopy)
			})
			this.eventBus.$on('update:removeSelected', name => {
			  const selectedCopy = JSON.parse(JSON.stringify(this.selected))
				const index = selectedCopy.indexOf(name)
				selectedCopy.splice(index, 1)
        this.eventBus.$emit('update:selected', selectedCopy)
        this.$emit('update:selected', selectedCopy)
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