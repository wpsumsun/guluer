<template>
	<div id="app">
		<div class="box">
			<g-menu :selected.sync="selected">
				<g-menu-item name="home">首页</g-menu-item>
				<g-sub-menu>
					<template slot="title">关于</template>
					<g-menu-item name="culture">文化</g-menu-item>
					<g-menu-item name="haha">哈哈</g-menu-item>
				</g-sub-menu>
				<g-menu-item name="hire">招聘</g-menu-item>
			</g-menu>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'app',
		data() {
	    return {
	      selected: ['home']
	    }
		},
		created() {
		},
		methods: {
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