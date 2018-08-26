<template>
	<div id="app">
		<div class="box">
			<g-cascader
				:options.sync="options"
				:selected="selected"
				@update:selected="updateSelected"
				:load-data="loadData">
			</g-cascader>
			{{ selected }}
		</div>
	</div>
</template>

<script>
	import db from './db'

	function ajax(parentId = 0) {
	  return new Promise((resolve, reject)=> {
      setTimeout(() => {
        const result = db.filter(item => item.parent_id === parentId)
        resolve(result)
      }, 1000)
	  })
  }

	export default {
	  name: 'app',
		data() {
	    return {
	      selected: [],
        options: null,
	    }
		},
		mounted() {
	    ajax().then((result) => {
        this.options = result
	    })
		},
		methods: {
	    loadData({ id }, callback) {
	      ajax(id).then(result => {
          callback(result)
	      })
	    },
      updateSelected(selected) {
        console.log(selected);
        this.selected = selected
      }
		},
	}
</script>

<style>
	* {
		box-sizing: border-box;
	}
</style>