<template>
	<div class="cascader">
		<div class="trigger" @click="visible = !visible" ref="trigger">
			{{ result }}
		</div>
		<div class="popover" ref="popover" v-if="visible">
			<cascaderItem
				:options="options"
				:selected="selected"
				:load-data="loadData"
				@update:selected="updateSelected">
			</cascaderItem>
		</div>
	</div>
</template>

<script>
	import cascaderItem from './cascader-item'
	export default {
	  name: 'g-cascader',
		props: {
	    options: {
	      type: Array
	    },
			selected: {
	      type: Array,
				default() { return [] }
			},
			loadData: {
	      type: Function
			}
		},
		components: {
	    cascaderItem
		},
		computed: {
	    result() {
	      return this.selected.map(item => item.label).join('/')
	    }
		},
		data() {
	    return {
	      visible: false,
	    }
		},
		methods: {
	    updateSelected(selected) {
	      this.$emit('update:selected', selected)
		    const lastSelected = selected[selected.length - 1]
		    const simplest = (array, target) => {
          return array.filter(item => item.id === target.id)[0]
		    }
		    const deeper = (array, target) => {
			    const noChildren = []
			    const hasChildren = []
			    let current
			    array.forEach((option) => {
						if (option.children) {
						  hasChildren.push(option)
						}	else {
						  noChildren.push(option)
						}
			    })
					current = simplest(noChildren, lastSelected)
			    if (current) {
			      return current
			    } else {
            current = simplest(array, target)
				    if (current) {
				      return current
				    } else {
				      for (let i = 0; i < hasChildren.length; i++) {
                current = deeper(hasChildren[i].children, target)
		          }
				    }
			    }
			    return current
		    }
		    const updateOptions = (result) => {
			    const copy = JSON.parse(JSON.stringify(this.options))
			    const current = deeper(copy, lastSelected)
          this.$set(current, 'children', result)
			    this.$emit('update:options', copy)
        }
        this.loadData && this.loadData(lastSelected, updateOptions)
	    },
		},
	}
</script>

<style lang="scss" scoped>
	.cascader {
		position: relative;
		.trigger {
			width: 200px;
			height: 32px;
			border: 1px solid #dcdfe6;
			line-height: 32px;
			padding-left: 1em;
			border-radius: 4px;
			cursor: pointer;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.popover {
			display: inline-flex;
			overflow: hidden;
			border: 1px solid #e4e7ed;
			border-left: none;
			box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
			margin-top: 8px;
		}
	}
</style>
