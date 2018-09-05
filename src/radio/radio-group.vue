<template>
	<div class="radio-group">
		<slot></slot>
	</div>
</template>

<script>
	import Vue from 'vue'

  export default {
    name: "g-radio-group",
	  props: {
      value: [String, Number, Boolean],
		  require: true
	  },
	  data() {
      return {
        eventBus: new Vue()
      }
	  },
	  provide() {
      return {
        eventBus: this.eventBus
      }
	  },
	  created() {
      this.eventBus.$on('change', value => {
        this.$emit('input', value);
        this.$emit('change', value);
      })
    },
  }
</script>

<style lang="scss" scoped>

</style>