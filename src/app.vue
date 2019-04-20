<template>
	<div id="app">
		{{ selection1 }}
		<g-table :columns="columns" :data-source="dataSource"></g-table>
		<br>
		<g-table :selection.sync="selection1" selectionVisible size="small" stripe bordered orderVisible :columns="columns" :data-source="dataSource"></g-table>
	</div>
</template>

<script>
	export default {
    name: 'app',
    created() {
		},
    data() {
      return {
        selection1: [],
        columns: [
	        { title: '姓名',prop: 'name' },
	        { title: '分数',prop: 'score' }
        ],
	      dataSource: [
		      { id: 1, name: '醒狮', score: 100 },
		      { id: 2, name: '辛弃疾', score: 90 },
		      { id: 3, name: '鲤鱼', score: 80 }
	      ]
      }
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