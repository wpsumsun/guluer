<template>
	<div id="app">
		{{ selection1 }}
		<g-table height="300" :loading="loading" @orderChange="x" :columns.sync="columns" :data-source="dataSource">
		</g-table>
		<br>
		<g-table expand-key="description" :loading="loading" @orderChange="x" height="300" :selection.sync="selection1" selectionVisible size="small" stripe bordered orderVisible :columns="columns" :data-source="dataSource">
			<template slot-scope="scope">
				<button @click="handleEdit(scope)">编辑</button>
				<button @click="handleEdit(scope)">删除</button>
			</template>
		</g-table>
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
	        { title: '姓名',prop: 'name', sortOrder: 'ascend', width: 200 },
	        { title: '分数',prop: 'score', sortOrder: 'descend'}
        ],
	      dataSource: [
		      { id: 1, name: '醒狮', score: 100, description: 'xxxxxxx' },
		      { id: 2, name: '辛弃疾', score: 90 },
		      { id: 3, name: '鲤鱼', score: 80 },
          { id: 4, name: '醒狮', score: 100, description: '阿斯蒂芬阿斯蒂芬' },
          { id: 5, name: '辛弃疾', score: 90 },
          { id: 6, name: '鲤鱼', score: 80 },
          { id: 7, name: '醒狮', score: 100 },
          { id: 8, name: '辛弃疾', score: 90 },
          { id: 9, name: '鲤鱼', score: 80 },
          { id: 10, name: '醒狮', score: 100 },
          { id: 12, name: '辛弃疾', score: 90 },
          { id: 23, name: '鲤鱼', score: 80 },
          { id: 21, name: '醒狮', score: 100 },
          { id: 32, name: '辛弃疾', score: 90 },
          { id: 43, name: '鲤鱼', score: 80 },
          { id: 51, name: '醒狮', score: 100 },
          { id: 222, name: '辛弃疾', score: 90 },
          { id: 333, name: '鲤鱼', score: 80 }
	      ]
      }
    },
    methods: {
      handleEdit(scope) {
        console.log('scope', scope)
      },
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