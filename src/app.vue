<template>
	<div id="app">
		<div class="box">
			<g-cascader
				:options="options"
				:selected="selected"
				@update:selected="updateSelected">
			</g-cascader>
		</div>
	</div>
</template>

<script>
	import db from './db'

	function ajax(parentId = 0) {
    return db.filter(item => item.parent_id === parentId)
  }

	export default {
	  name: 'app',
		data() {
	    return {
	      selected: [],
        options: ajax(),
	    }
		},
		methods: {
	    updateSelected(selected) {
	      this.selected = selected
	    }
		}
	}
</script>

<style>
	* {
		box-sizing: border-box;
	}
</style>