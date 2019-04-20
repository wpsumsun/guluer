<template>
	<div class="guluer-table-wrapper">
		<table class="guluer-table" :class="{ bordered, stripe, small: size === 'small' }">
			<thead>
			<tr>
				<th v-if="selection"><input @change="handleSelectChange" type="checkbox"/></th>
				<th v-if="orderVisible">#</th>
				<template v-for="column in columns">
					<th>{{ column.title }}</th>
				</template>
			</tr>
			</thead>
			<tbody>
			<tr v-for="(item, index) in dataSource">
				<th v-if="selection"><input @change="handleSelectChange($event, item, index)" type="checkbox"/></th>
				<td v-if="orderVisible">{{ index + 1 }}</td>
				<td v-for="column in columns">
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
			  required: true
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
		  selection: {
        type: Boolean,
			  default: false
		  }
	  },
	  methods: {
      handleSelectChange(e, item, index) {
        this.$emit('handleSelectChange', { checked: e.target.checked, item, index })
      }
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