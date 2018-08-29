<template>
	<div id="app">
		<div class="box">
			<g-carousel :selected.sync="selected">
				<g-carousel-item name="1">
					<div>1</div>
				</g-carousel-item>
				<g-carousel-item name="2">
					<div>2</div>
				</g-carousel-item>
				<g-carousel-item name="3">
					<div>3</div>
				</g-carousel-item>
			</g-carousel>
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
	      selected: '1',
	    }
		},
		created() {
		},
		methods: {
		},
	}
</script>

<style>
	* {
		box-sizing: border-box;
	}
</style>