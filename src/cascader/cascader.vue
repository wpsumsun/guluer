<template>
	<div class="guluer-cascader" ref="cascader" v-click-outside="close">
		<div class="guluer-cascader-trigger" @click="toggle" ref="trigger">
			{{ result }}
		</div>
		<div class="guluer-cascader-popover" ref="popover" v-if="visible">
			<cascaderItem
				:options="options"
				:selected="selected"
				:load-data="loadData"
				:loading-item="loadingItem"
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
			},
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
		    loadingItem: {}
	    }
		},
		methods: {
	    toggle() {
	      this.visible ? this.close() : this.open()
	    },
	    open() {
	      this.visible = true
	    },
			close() {
	      this.visible = false
			},
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
	        this.loadingItem = {}
			    const copy = JSON.parse(JSON.stringify(this.options))
			    const current = deeper(copy, lastSelected)
          this.$set(current, 'children', result)
			    this.$emit('update:options', copy)
        }
        if (!lastSelected.isLeaf) {
          this.loadData && this.loadData(lastSelected, updateOptions)
	        this.loadingItem = lastSelected
        }
        if (!lastSelected.children || !lastSelected.children.length) {
          this.close()
        }
      },
		},
	}
</script>

<style lang="scss" scoped>
	.guluer-cascader {
		position: relative;
		display: inline-block;
		.guluer-cascader-trigger {
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
		.guluer-cascader-popover {
			display: inline-flex;
			overflow: hidden;
			border: 1px solid #e4e7ed;
			border-left: none;
			box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
			position: absolute;
			left: 0;
			top: 100%;
			margin-top: 8px;
			background: #fff;
			z-index: 2000;
		}
	}
</style>
