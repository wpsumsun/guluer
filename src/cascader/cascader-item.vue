<template>
	<div class="guluer-cascader-item">
		<div class="guluer-cascader-item-left guluer-cascader-item-wrapper">
			<div class="guluer-cascader-item-content">
				<div
					class="guluer-cascader-item-row"
					:class="{ active: selected[level]&&selected[level].label === option.label }"
					v-for="(option, index) in options"
					@click="select(option)"
					:key="index">
					{{ option.label }}
					<g-icon name="loading" class="guluer-cascader-item-loading" v-if="loadData&&loadingItem.label === option.label"></g-icon>
					<template v-else>
						<g-icon
							v-if="showRightArrow(option)"
							name="right"
							class="guluer-cascader-item-icon">
						</g-icon>
					</template>
				</div>
			</div>
		</div>
		<div class="guluer-cascader-item-right guluer-cascader-item-wrapper" v-if="nextLevel&&nextLevel.length">
			<g-cascader-item
				:options="nextLevel"
				:selected="selected"
				:level="level+1"
				:load-data="loadData"
				:loading-item="loadingItem"
				@update:selected="updateSelected">
			</g-cascader-item>
		</div>
	</div>
</template>

<script>
import Icon from '../icon/icon'

export default {
  name: 'g-cascader-item',
	props: {
    options: {
      type: Array
    },
		selected: {
      type: Array,
		},
		level: {
      type: Number,
			default: 0,
		},
		loadData: {
      type: Function
		},
		loadingItem: {
      type: Object
		}
	},
	components: {
    'g-icon': Icon
	},
	data() {
    return {
    }
	},
	computed: {
    nextLevel() {
      if (this.selected[this.level]) {
        let selected = this.options.filter(option => option.label === this.selected[this.level].label)
        if (selected && selected[0].children && selected[0].children.length > 0) {
          return selected[0].children
        }
      }
    },
	},
	methods: {
    select(option) {
      const copy = JSON.parse(JSON.stringify(this.selected))
	    copy[this.level] = option
	    copy.splice(this.level + 1)
      this.$emit('update:selected', copy)
    },
    updateSelected(selected) {
      this.$emit('update:selected', selected)
    },
		showRightArrow(option) {
      return this.loadData ? !option.isLeaf : option.children
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "~@/styles/var";
	.guluer-cascader-item {
		display: flex;
		flex-direction: row;
		overflow: hidden;
		.guluer-cascader-item-wrapper {
			display: inline-flex;
			min-width: 160px;
			height: 200px;
			border-radius: 2px;
			flex-direction: column;
			overflow-x: hidden;
			overflow-y: auto;
			border-left: 1px solid #e4e7ed;
			.guluer-cascader-item-content {
				padding: 6px 0;
			}
			.guluer-cascader-item-row {
				padding: 8px 20px;
				color: #606266;
				cursor: pointer;
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-shrink: 0;
				&.active {
					background: $gray-light;
					color: $blue-light;
				}
				.guluer-cascader-item-icon {
					width: 12px;
					fill: #bfcbd9;
				}
				.guluer-cascader-item-loading {
					fill: #bfcbd9;
					animation: spin 1.5s infinite linear;
				}
				&:hover {
					background: $gray-light;
				}
			}
		}
	}
</style>
