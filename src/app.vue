<template>
	<div id="app">
		<g-upload
			action="https://tiny-upload-server.herokuapp.com/upload"
			:parseResponse="parseResponse"
			:before-upload="handleBeforeUpload"
			:on-success="handleSuccess"
			:on-error="handleError"
			:fileLis="fileList">
			<g-button>上传</g-button>
			<div slot="tips">上传文件说明</div>
		</g-upload>
	</div>
</template>

<script>
	export default {
    name: 'app',
    created() {
		},
    data() {
      return {
        percentage: 0,
        fileList: [
          {
            name: 'sulm dunk',
						url: 'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=c422d4ad98cad1c8cfbbfa274f3f67c4/83025aafa40f4bfb0f815ad60e4f78f0f63618db.jpg'
          }
        ]
      }
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
			},
      handleError(error, res, file) {
        console.log('error', error)
        console.log('res', res)
        console.log('file', file)
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