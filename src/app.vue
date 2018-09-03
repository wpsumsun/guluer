<template>
	<div id="app">
		<div class="box">
			<g-radio v-model="radio" label="1" @change="change" disabled="">备选项1</g-radio>
			<g-radio v-model="radio" label="2" @change="change">备选项2</g-radio>
		</div>
		<div class="box">
			<g-radio-group v-model="radio2" @change="change">
				<g-radio label="1" disabled="">备选项1</g-radio>
				<g-radio label="2">备选项2</g-radio>
				<g-radio label="3" disabled="">备选项2</g-radio>
			</g-radio-group>
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
	      radio: '1',
	      radio2: '2',
	    }
		},
		created() {
		},
		methods: {
	    change(value) {
        console.log('val', value);
      },
		},
	}
</script>

<style lang="scss" scoped>
	* {
		box-sizing: border-box;
	}
	.box {
		margin: 50px;
		height: 300px;
	}
	.carousel {
		&.g-carousel {
			.g-carousel-item {
				background: #364d79;
				color: #fff;
				font-size: 30px;
				display: flex;
				align-items: center;
				justify-content: center;
				font-weight: bold;
			}
		}
	}
</style>