<template>
	<div id="app">
		<g-date-picker :value="value" @input="value=$event"></g-date-picker>
		<g-date-picker type="daterange" :value="value2" @input="value2=$event"></g-date-picker>
	</div>
</template>

<script>
  export default {
    name: 'app',
    created() {
		},
    data() {
      return {
        value: new Date(2019, 4, 22),
	      value2: ''
      }
    },
    methods: {

    }
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