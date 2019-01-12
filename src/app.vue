<template>
	<div id="app">
		<g-upload
			accept="image/*"
			action="https://tiny-upload-server.herokuapp.com/upload"
			:parseResponse="parseResponse"
			:before-upload="handleBeforeUpload"
			:on-success="handleSuccess"
			:fileList.sync="fileList">
			<g-button>上传</g-button>
			<div slot="tips">上传文件说明</div>
		</g-upload>
	</div>
</template>

<script>
	export default {
	  name: 'app',
		data() {
	    return {
	      fileList: []
	    }
		},
		created() {
		},
		methods: {
			handleSuccess(res, file, fileList) {
				// file.url =`https://tiny-upload-server.herokuapp.com/preview/${res.filename}`
			},
			handleBeforeUpload(file) {
				console.log('handleBeforeUpload', file)
				return true
			},
			parseResponse(res) {
				const file = JSON.parse(res)
				return `https://tiny-upload-server.herokuapp.com/preview/${file.filename}`
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