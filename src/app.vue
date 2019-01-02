<template>
	<div id="app">
		<g-pagination :total="1" :current-page.sync="currentPage"></g-pagination>
	</div>
</template>

<script>
	export default {
	  name: 'app',
		data() {
	    return {
	      currentPage: 1
	    }
		},
		created() {
		},
		methods: {
	    print(e) {
        console.log('sdf', e);
      },
			print2(e) {
        console.log('sdf22', e);
      }
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