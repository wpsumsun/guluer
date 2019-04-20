<template>
	<div id="app">
		{{ selection }}
		<g-table :columns="columns" :data-source="dataSource"></g-table>
		<br>
		<g-table @handleSelectChange="handleSelectChange" selection size="small" stripe bordered orderVisible :columns="columns" :data-source="dataSource"></g-table>
	</div>
</template>

<script>
	export default {
    name: 'app',
    created() {
		},
    data() {
      return {
        selection: [],
        columns: [
	        { title: '姓名',prop: 'name' },
	        { title: '分数',prop: 'score' }
        ],
	      dataSource: [
		      { name: '醒狮', score: 100 },
		      { name: '辛弃疾', score: 90 },
		      { name: '鲤鱼', score: 80 }
	      ]
      }
    },
    methods: {
      handleSelectChange({ checked, item, index }) {
        if (checked) {
          this.selection.push(item)
        } else {
          this.selection.splice(index, 1)
        }
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