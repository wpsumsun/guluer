<template>
	<div class="sub-menu" v-click-outside="close">
		<span class="title" @click="toggle" :class="{ active }">
			<slot name="title"></slot>
			<span class="arrow" :class="{ open: visible }">
				<g-icon name="right" class="icon"></g-icon>
			</span>
		</span>
		<div class="popover" v-show="visible">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import Icon from '../icon/icon'

  export default {
    name: "g-sub-menu",
	  components: {
      'g-icon': Icon
	  },
	  props: {
      name: {
        type: String,
	      require: true
      }
	  },
	  inject: ['root'],
	  computed: {
      active() {
        return this.root.namePath.indexOf(this.name) > -1
      },
	  },
	  data() {
      return {
        visible: false,
      }
	  },
	  methods: {
      toggle() {
        this.visible = !this.visible
      },
      updateNamePath() {
        this.root.namePath.unshift(this.name)
        this.$parent.updateNamePath && this.$parent.updateNamePath()
        this.$parent.close && this.$parent.close()
      },

		  close() {
        this.visible = false
		  },
	  }
  }
</script>

<style lang="scss" scoped>
@import "var";
.sub-menu {
	position: relative;
	.title {
		padding: 10px 20px;
		display: inline-block;
		vertical-align: middle;
		cursor: pointer;
		&.active {
			border-bottom: 2px solid $blue-light;
			color: #303133;
		}
	}
	.arrow {
		display: none;
	}
	.popover {
		position: absolute;
		left: 0;
		top: 100%;
		white-space: nowrap;
		border-radius: 2px;
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
		color: #909399;
		.title {
			border: none;
			min-width: 150px;
			box-sizing: border-box;
			display: inline-flex;
			align-items: center;
			justify-content: space-between;
			&:hover {
				color: #303133;
				.icon {
					fill: #303133;
				}
			}
		}
		.arrow {
			display: inline-flex;
			transition: all .5s;
			.icon {
				fill: #909399;
			}
			&.open {
				transform: rotate(180deg);
			}
		}
		.menu-item {
			min-width: 150px;
			&:hover {
				color: #303133;
			}
			&.active {
				border: none;
			}
		}
		.popover {
			position: absolute;
			left: 100%;
			top: 0;
			margin-left: 8px;
		}
	}
}
</style>