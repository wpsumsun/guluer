<template>
	<div class="guluer-table-wrapper">
		<table class="guluer-table" :class="{ bordered, stripe, small: size === 'small' }">
			<thead>
			<tr>
				<th v-if="selectionVisible">
					<input
						:checked="isAllChecked"
						ref="allCheck"
						@change="handleSelectALL"
						type="checkbox"/>
				</th>
				<th v-if="orderVisible">#</th>
				<template v-for="column in columns">
					<th :key="column.title">{{ column.title }}</th>
				</template>
			</tr>
			</thead>
			<tbody>
			<tr :key="item.id" v-for="(item, index) in dataSource">
				<th v-if="selectionVisible">
					<input
						:checked="inSelection(item)"
						@change="handleSelectChange($event, item, index)"
						type="checkbox"/>
				</th>
				<td v-if="orderVisible">{{ index + 1 }}</td>
				<td :key="column.title" v-for="column in columns">
					{{ item[column.prop] }}
				</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
  export default {
    name: 'guluer-table',
	  props: {
      columns: {
        type: Array,
	      required: true
      },
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
      }
	  },
	  watch: {
      selection() {
        const selectionLength = this.selection.length
	      const total = this.dataSource.length
        this.$refs.allCheck.indeterminate = selectionLength > 0 && selectionLength < total
      }
	  },
	  methods: {
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
	}
}
</style>