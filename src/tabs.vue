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
		mounted() {
	    if (!this.$children.length) {
        console&&console.warn&&console.warn('Tbas组件的子组件不能为空')
	    }
      this.$children.forEach(vm => {
        if (vm.$options.name === 'g-tabs-head') {
          vm.$children.forEach(childVm => {
            if (childVm.$options.name === 'g-tabs-item' && childVm.name === this.selected) {
	            this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      })
		}
	}
</script>

<style lang="scss" scoped>

</style>