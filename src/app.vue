<template>
	<div id="app">
		{{ selection1 }}
		<g-cascader
			:options.sync="options"
			:selected="selected"
			@update:selected="updateSelected">
		</g-cascader>
		<g-tabs :selected.sync="current">
			<g-tabs-head>
				<g-tabs-item name="male">male</g-tabs-item>
				<g-tabs-item name="female">female</g-tabs-item>
			</g-tabs-head>
			<g-tabs-body>
				<g-tabs-pane name="male">male content</g-tabs-pane>
				<g-tabs-pane name="female">female content</g-tabs-pane>
			</g-tabs-body>
		</g-tabs>
		<g-button>xxx</g-button>
		<g-table @selectionChange="selectionChange" :selection.sync="selection1" selectionVisible :columns="columns" height="300" :loading="loading" @orderChange="x" :data-source="dataSource">
			<template slot-scope="{ row }" slot="name">{{ row.name }}</template>
		</g-table>
		<br>
		<!--<g-table expand-key="description" :loading="loading" @orderChange="x" height="300" :selection.sync="selection1" selectionVisible size="small" stripe bordered orderVisible :columns="columns" :data-source="dataSource"></g-table>-->
	</div>
</template>

<script>
  export default {
    name: 'app',
    created() {
    },
    data() {
      return {
        selected: [],
        options: [
          {
            value: 'shagnhai',
            label: '上海',
            children: [
              { value: 'xuhui', label: '徐汇' },
              { value: 'putuo', label: '普陀' },
              { value: 'pudong', label: '浦东' },
              { value: 'chongming', label: '崇明' }
            ]
          },
          {
            value: 'beijing',
            label: '北京',
            children: [
              { value: 'chaoyang', label: '朝阳' },
              { value: 'tongzhou', label: '通州' },
              { value: 'dongcheng', label: '东城' }
            ]
          },
        ],
        loading: false,
	      current: 'male',
        selection1: [{ id: 2, name: '辛弃疾', score: 90 }],
        columns: [
          { title: '姓名',prop: 'name', sortOrder: 'ascend', width: 200, slot: 'name' },
          {
            title: '分数',
	          prop: 'score',
	          sortOrder: 'descend',
            render: (h, params) => {
              return h('div', [
                h('strong', this.xx())
              ]);
            }
          },
	        {
	          title: '操作',
		        width: 200,
		        render: (h, params) => {
	            return h('div', [
	                h('g-button',
			                {
                        on: {
                          click: () => console.log('params', params)
                        }
			                },
			                '编辑'
	                ),
	                h('g-button', '删除')
	            ])
		        }
	        }
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
      selectionChange() {
        console.log(this.selection1)
      },
      xx() {
        return 'xx'
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