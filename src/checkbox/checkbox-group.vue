<template>
	<div class="guluer-checkbox-group">
		<slot></slot>
	</div>
</template>

<script>
	import Vue from 'vue'

  export default {
    name: 'guluer-checkbox-group',
	  props: {
      value: {
        type: Array
      },
		  disabled: {
        type: Boolean,
			  default: false
		  }
	  },
	  provide() {
      return {
        eventBus: this.eventBus
      }
	  },
	  data() {
      return {
				children: [],
	      eventBus: new Vue()
      }
	  },
	  created() {
      this.eventBus.$on('change', value => {
        const copy = JSON.parse(JSON.stringify(this.value))
	      const index = copy.findIndex(v => v === value)
        if (index > -1) {
					copy.splice(index, 1)
        } else {
          copy.push(value)
        }
        this.$emit('input', copy)
        this.$emit('change', copy)
      })
	  },
  }
</script>

<style scoped lang="scss">

</style>