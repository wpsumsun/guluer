<template>
	<div class="sub-menu" v-click-outside="close" :class="{ vertical }">
		<span class="title" @click="toggle" :class="{ active }">
			<slot name="title"></slot>
			<span class="arrow" :class="{ open: visible }">
				<g-icon name="right" class="icon"></g-icon>
			</span>
		</span>
		<template v-if="vertical">
			<transition @enter="enter" @leave="leave" @after-leave="afterLeave" :css="false">
				<div class="popover" v-show="visible" :class="{ vertical }">
					<slot></slot>
				</div>
			</transition>
		</template>
		<template v-else>
			<div class="popover" v-show="visible">
				<slot></slot>
			</div>
		</template>
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
	  inject: ['root', 'vertical'],
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
      enter(el, done) {
        const { height } = el.getBoundingClientRect()
	      el.style.height = '0px'
	      el.getBoundingClientRect()
	      el.style.height = `${height}px`
        el.addEventListener('transitionend', () => {
          el.style.height = `auto`
          done()
        })
      },
      leave(el, done) {
        const { height } = el.getBoundingClientRect()
        el.style.height = `${height}px`
        el.getBoundingClientRect()
        el.style.height = '0px'
        el.addEventListener('transitionend', () => {
          el.style.height = 'auto'
	        done()
        })
      },
      afterLeave(el) {
        el.style.height = 'auto'
      },
	  }
  }
</script>

<style lang="scss" scoped>
@import "~@/styles/var";
.sub-menu {
	position: relative;
	.title {
		padding: 10px 20px;
		display: inline-block;
		vertical-align: middle;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		justify-content: space-between;
		&.active {
			border-bottom: 2px solid $blue-light;
			color: #303133;
		}
	}
	&.vertical {
		.title {
			&:hover {
				color: $blue-light;
			}
		}
	}
	/*.arrow {*/
		/*display: none;*/
	/*}*/
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
	.popover {
		position: absolute;
		left: 0;
		top: 100%;
		white-space: nowrap;
		border-radius: 2px;
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
		color: #909399;
		z-index: 2000;
		background: #fff;
		&.vertical {
			position: static;
			transition: all .4s;
			/*overflow: hidden;*/
			border-radius: 0;
			box-shadow: none;
			padding-left: 1em;
			.title {
				&:hover {
					color: $blue-light;
				}
			}
		}
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
			&.vertical {
				overflow: hidden;
				position: static;
			}
		}
	}
	&.vertical {
		overflow: hidden;
		.title {
			&.active {
				border-bottom: none;
				color: #00a0e9;
				.icon {
					fill: #00a0e9;
				}
			}
			&:hover {
				color: #409eff;
				.icon {
					fill: #409eff;
				}
			}
		}
		.arrow {
			transform: rotate(-90deg);
			&.open {
				transform: rotate(90deg);
			}
		}
		.popover {
			.title {
				&:hover {
					color: #409eff;
					.icon {
						fill: #409eff;
					}
				}
			}
		}
	}
}
</style>