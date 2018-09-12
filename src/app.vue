<template>
	<div id="app">
		<div class="box">
			<g-menu :selected.sync="selected" vertical>
				<g-menu-item name="home">首页</g-menu-item>
				<g-sub-menu name="about">
					<template slot="title">关于</template>
					<g-menu-item name="culture">文化</g-menu-item>
					<g-sub-menu name="connect">
						<template slot="title">联系方式</template>
						<g-sub-menu name="connect1">
							<template slot="title">微信</template>
							<g-menu-item name="wechat">1111</g-menu-item>
							<g-menu-item name="qq">2222</g-menu-item>
						</g-sub-menu>
						<g-menu-item name="qq">QQ</g-menu-item>
					</g-sub-menu>
					<g-menu-item name="culture2">文化2</g-menu-item>
				</g-sub-menu>
				<g-menu-item name="hire">招聘</g-menu-item>
			</g-menu>
			123
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'app',
		data() {
	    return {
	      selected: ['home'],
		    value1: true
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