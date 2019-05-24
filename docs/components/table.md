---
title: Table
---
### 表格

基本用法<br>

<g-table
	:columns="columns"
	:data-source="dataSource">
</g-table>

```
export default {
data() {
return {
loading: false,
selection1: [{ id: 2, name: '辛弃疾', score: 90 }],
columns: [
	{ title: '姓名',prop: 'name', sortOrder: 'ascend', width: 180 },
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
	{ id: 5, name: '辛弃疾', score: 90 }
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
	}
}
```
可选择
<g-table
	v-on:selectionChange="selectionChange"
	:selection.sync="selection1"
	selectionVisible
	:columns="columns"
	v-on:orderChange="x"
	:data-source="dataSource">
</g-table>
```
<g-table
	v-on:selectionChange="selectionChange"
	:selection.sync="selection1"
	selectionVisible
	:columns="columns"
	v-on:orderChange="x"
	:data-source="dataSource">
</g-table>
```
展开行
<g-table
	expand-key="description"
	:columns="columns"
	:stripe="false"
	:data-source="dataSource">
</g-table>
```
<g-table
	expand-key="description"
	:columns="columns"
	:data-source="dataSource">
</g-table>
```

<script>
export default {
  data() {
    return {
      loading: false,
      selection1: [{ id: 2, name: '辛弃疾', score: 90 }],
      columns: [
        { title: '姓名',prop: 'name', sortOrder: 'ascend', width: 180 },
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
        { id: 5, name: '辛弃疾', score: 90 }
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
	table {
		margin: 0 !important;
	}
</style>

