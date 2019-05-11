<template>
	<div class="guluer-table-column-wrapper">
		<slot></slot>
	</div>
</template>

<script>
  export default {
    name: "table-column",
	  props: {
      prop: {
        type: String
      },
		  title: {
        type: String
		  },
		  width: {
        type: [String, Number]
		  }
	  }
  }
</script>

<style scoped>

</style>