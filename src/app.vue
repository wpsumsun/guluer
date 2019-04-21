<template>
	<div id="app">
		{{ selection1 }}
		<g-table :loading="loading" @orderChange="x":columns.sync="columns" :data-source="dataSource"></g-table>
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
        loading: false,
        selection1: [{ id: 2, name: '辛弃疾', score: 90 }],
        columns: [
	        { title: '姓名',prop: 'name', sortOrder: 'ascend' },
	        { title: '分数',prop: 'score', sortOrder: 'descend'}
        ],
	      dataSource: [
		      { id: 1, name: '醒狮', score: 100 },
		      { id: 2, name: '辛弃疾', score: 90 },
		      { id: 3, name: '鲤鱼', score: 80 }
	      ]
      }
    },
    methods: {
      x(order) {
        this.loading = true
        setTimeout(() => {
          if (order.sortOrder === 'ascend') {
            this.dataSource.sort((a, b)=>{
              return a[order.prop] - b[order.prop]
            })
          } else {
            this.dataSource.sort((a, b)=>{
              return b[order.prop] - a[order.prop]
            })
          }
          this.loading = false
        }, 2000)
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