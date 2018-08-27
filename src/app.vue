<template>
	<div id="app">
		<div class="box">
			<g-cascader
				:options.sync="options"
				:selected="selected"
				:load-data="loadData"
				@update:selected="updateSelected">
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
        options: null
	    }
		},
		mounted() {
	    ajax().then((result) => {
	      result.forEach(item => {
          item.isLeaf = (db.filter(child => child.parent_id === item.id).length > 0)
	      })
        this.options = result
	    })
		},
		methods: {
	    loadData({ id }, callback) {
	      ajax(id).then(result => {
          result.forEach(item => {
            item.isLeaf = (db.filter(child => child.parent_id === item.id).length > 0)
          })
          callback(result)
	      })
	    },
      updateSelected(selected) {
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