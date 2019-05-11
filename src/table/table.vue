<template>
	<div class="guluer-table-wrapper" ref="wrapper">
		<div :style="{ height: `${height}px`, overflow: 'auto' }">
			<table ref="table" class="guluer-table" :class="{ bordered, stripe, small: size === 'small' }">
				<thead>
				<tr>
					<th v-if="expandKey" :style="{ width: '50px' }"></th>
					<th :style="{ width: '50px' }" v-if="selectionVisible">
						<input
							:checked="isAllChecked"
							ref="allCheck"
							@change="handleSelectALL"
							type="checkbox"/>
					</th>
					<th :style="{ width: '50px' }" v-if="orderVisible">#</th>
					<template v-for="(column, index) in columns">
						<th :style="{ width: `${column.width}px` }" :key="column.title">
							<div class="guluer-table-header">
								{{ column.title }}
								<span v-if="column.sortOrder" class="guluer-table-sorter" @click="handleSortChange(column, index)">
								<g-icon name="ascend" :class="{ active: column.sortOrder === 'ascend' }"></g-icon>
								<g-icon name="descend" :class="{ active: column.sortOrder === 'descend' }"></g-icon>
							</span>
							</div>
						</th>
					</template>
					<th ref="actionTh" v-if="$scopedSlots.default"></th>
				</tr>
				</thead>
				<tbody>
					<template v-for="(item, index) in dataSource">
						<tr :key="item.id">
							<td v-if="expandKey" class="guluer-table-expand-wrapper" :style="{ width: '50px' }">
								<g-icon :class="{ active: inExpandIds(item.id) }" @click="handleExpand(item.id)" name="right" v-if="expandKey && item[expandKey]"></g-icon>
							</td>
							<td :style="{ width: '50px' }" v-if="selectionVisible">
								<input
									:checked="inSelection(item)"
									@change="handleSelectChange($event, item, index)"
									type="checkbox"/>
							</td>
							<td :style="{ width: '50px' }" v-if="orderVisible">{{ index + 1 }}</td>
							<td :style="{ width: `${column.width}px` }" :key="column.title" v-for="column in columns">
								<template v-if="column.render">
									<vnodes :vnodes="column.render({ value: item[column.prop] })"/>
								</template>
								<template v-else>
									{{ item[column.prop] }}
								</template>
							</td>
							<td v-if="$scopedSlots.default">
								<div class="action-wrapper" ref="actions">
									<slot :item="item"></slot>
								</div>
							</td>
						</tr>
						<tr class="guluer-table-expand-content" v-if="expandKey && item[expandKey]" v-show="inExpandIds(item.id)">
							<td></td>
							<td :colspan="colspanCount">{{ item[expandKey] }}</td>
						</tr>
					</template>
				</tbody>
			</table>
		</div>
		<div v-if="loading" class="loading-wrapper">
			<g-icon name="loading"></g-icon>
		</div>
	</div>
</template>

<script>
	import gIcon from '../icon/icon'
  export default {
    name: 'guluer-table',
	  components: {
      gIcon,
      Vnodes: {
        functional: true,
        render: (h, ctx) => ctx.props.vnodes
      }
	  },
	  props: {
		  dataSource: {
        type: Array,
			  required: true,
        validator(arr) {
          return !arr.filter(v => v.id === undefined).length
        }
		  },
		  orderVisible: {
        type: Boolean,
			  default: false
		  },
		  bordered: {
        type: Boolean,
			  default: false
		  },
      stripe: {
        type: Boolean,
	      default: false
      },
		  size: {
        type: String
		  },
		  selectionVisible: {
        type: Boolean,
			  default: false
		  },
		  selection: {
        type: Array
		  },
		  loading: {
        type: Boolean,
			  default: false
		  },
		  height: {
        type: [String, Number]
		  },
      expandKey: {
        type: String
		  }
	  },
	  data() {
      return {
        cloneTable: null,
	      expandIds: [],
	      columns: [],
      }
	  },
	  computed: {
      isAllChecked() {
        const arr1 = this.dataSource.map(v=>v.id).sort((a, b)=>a-b)
        const arr2 = this.selection.map(v=>v.id).sort((a, b)=>a-b)
	      if (arr1.length !== arr2.length) { return false }
	      let equal = true
	      for (let i = 0; i<arr1.length; i++) {
	        if(arr1[i] !== arr2[i]) {
	          equal = false
		        break
	        }
	      }
	      return equal
      },
      colspanCount() {
        const selectCount = this.selectionVisible ? 1 : 0
        const orderCount = this.orderVisible ? 1 : 0
	      return this.columns.length + selectCount + orderCount
      }
	  },
	  watch: {
      selection() {
        const selectionLength = this.selection.length
	      const total = this.dataSource.length
        this.$refs.allCheck.indeterminate = selectionLength > 0 && selectionLength < total
      }
	  },
	  mounted() {
      this.columns = this.$slots.default.map(slot => {
        if (slot.componentOptions.tag === 'g-table-column') {
          const { prop, title, width } = slot.componentOptions.propsData
          const render = slot.data.scopedSlots&&slot.data.scopedSlots.default
          return { prop, title, width, render }
        }
      })
      this.fixedHeader()
      if (this.$scopedSlots.default) {
        const div = this.$refs.actions[0]
        const { width } = div.getBoundingClientRect()
        const parent = div.parentNode
	      const styles = getComputedStyle(parent)
	      const paddingLeft = styles.getPropertyValue('padding-left')
	      const paddingRight = styles.getPropertyValue('padding-right')
	      const borderLeftWidth = styles.getPropertyValue('border-left-width')
	      const borderRightWidth = styles.getPropertyValue('border-right-width')
	      const totalWidth = width + parseInt(paddingLeft) + parseInt(paddingRight) + parseInt(borderLeftWidth) + parseInt(borderRightWidth)
        this.$refs.actionTh.style.width = `${totalWidth}px`
	      this.$refs.actions.map(node => {
          node.parentNode.style.width = `${totalWidth}px`
        })
      }
	  },
	  beforeDestroy() {
		  this.cloneTable.remove()
	  },
	  methods: {
      fixedHeader() {
        this.cloneTable = this.$refs.table.cloneNode()
        this.cloneTable.classList.add('guluer-table-clone')
        const { height } = this.$refs.table.children[0].getBoundingClientRect()
        this.cloneTable.appendChild(this.$refs.table.children[0])
        this.$refs.table.style.marginTop = `${height}px`
        this.$refs.wrapper.appendChild(this.cloneTable)
      },
      inExpandIds(id) {
        return this.expandIds.indexOf(id) > -1
      },
      handleExpand(id) {
        const inExpandIdsIndex = this.expandIds.indexOf(id)
	      if (inExpandIdsIndex > -1) {
	        this.expandIds.splice(inExpandIdsIndex, 1)
	      } else {
	        this.expandIds.push(id)
	      }
      },
      handleSortChange(column, index) {
        let copy = JSON.parse(JSON.stringify(this.columns))
	      const { sortOrder } = column
	      let newSortOrder = sortOrder === 'ascend' ? 'descend' : 'ascend'
	      copy[index].sortOrder = newSortOrder
	      this.$emit('update:columns', copy)
	      this.$emit('orderChange', copy[index])
      },
      handleSelectALL(e) {
        this.$emit('update:selection', e.target.checked ? this.dataSource : [])
      },
      handleSelectChange(e, item, index) {
        let localSelection = JSON.parse(JSON.stringify(this.selection))
	      if (e.target.checked) {
	        localSelection.push(item)
	      } else {
          localSelection = localSelection.filter(v => v.id !== item.id)
	      }
        this.$emit('update:selection', localSelection)
      },
		  inSelection(item) {
        return !!this.selection.filter(v => v.id === item.id).length
		  },
	  }
  }
</script>

<style scoped lang="scss">
@import "../styles/var";
.guluer-table-wrapper {
	position: relative;
	.guluer-table {
		border-collapse: collapse;
		border-spacing: 0;
		width: 100%;
		&.bordered {
			border: 1px solid $border-color;
			td, th {
				border: 1px solid $border-color;
			}
		}
		&.stripe {
			tbody {
				tr:nth-child(even) {
					background: $gray-light;
				}
			}
		}
		&.small {
			td, th {
				padding: 4px;
			}
		}
		td, th {
			border-bottom: 1px solid $border-color;
			padding: 8px;
			text-align: left;
		}
		&-header {
			display: flex;
			align-items: center;
		}
		&-sorter {
			display: inline-flex;
			flex-direction: column;
			flex-wrap: wrap;
			cursor: pointer;
			svg {
				width: 10px;
				height: 10px;
				fill: #bfbfbf;
				&:first-child {
					position: relative;
					bottom: -1px;
				}
				&:last-child {
					position: relative;
					top: -1px;
				}
				&.active {
					fill: $blue-light;
				}
			}
		}
		&-expand-wrapper {
			svg {
				width: 12px;
				transition: all .5s;
				&.active {
					transform: rotate(90deg);
				}
			}
		}
		&-expand-content {
			td {
				border: none !important;
			}
			td:last-child {
				padding-left: 8px;
				word-break: break-word;
			}
		}
	}
	.loading-wrapper {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.7);
		z-index: 2;
		svg {
			animation: spin 1.5s infinite linear;
			width: 30px;
			height: 30px;
			fill: $blue-light;
		}
	}
	.guluer-table-clone {
		position: absolute;
		left: 0;
		top: 0;
		background: #fff;
	}
	.action-wrapper {
		display: inline-block;
	}
}
</style>