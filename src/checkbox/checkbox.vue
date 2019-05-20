<template>
	<label class="guluer-checkbox-wrapper" :class="{ disabled: isDisabled }">
		<span
			class="guluer-checkbox-icon"
			:class="{ checked: value || model, disabled: isDisabled }">
		</span>
		<input
			v-if="group"
			type="checkbox"
			hidden
			:checked="model"
			:disabled="disabled"
			@change="onChange">
		<input
			v-else
			type="checkbox"
			hidden
			:checked="value"
			:disabled="disabled"
			@change="onChange">
		<span class="guluer-checkbox-label" :class="{ checked: value || model, disabled: isDisabled }">
			<slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
		</span>
	</label>
</template>

<script>
	export default {
	  name: 'guluer-checkbox',
		inject: {
      eventBus: {
        default: null
      }
		},
		props: {
      checked: {
        type: Boolean
      },
			value: {
        type: [String, Number, Boolean]
			},
			label: {
        type: [String, Number]
			},
      disabled: {
        type: Boolean,
				default: false
			}
		},
		computed: {
	    model: {
	      get() {
          return this.group ? this.$parent.value.indexOf(this.label) > -1 : ''
	      },
	      set(val) {
          this.currentValue = val
	      }
	    },
			isDisabled() {
	      return this.group ? this.$parent.disabled || this.disabled : this.disabled
			}
		},
		data() {
			return {
        parent: null,
				group: false,
				currentValue: this.value
			}
		},
		mounted() {
      this.parent = this.$parent
			if (this.parent.$options.name === 'guluer-checkbox-group') {
			  this.group = true
      }
    },
		methods: {
      onChange(e) {
        if (!this.group) {
          this.$emit('input', e.target.checked)
          this.$emit('change', e.target.checked)
        } else {
          this.eventBus && this.eventBus.$emit('change', this.label)
        }
      }
		}
	}
</script>

<style lang="scss">
	@import "~@/styles/var.scss";
	.guluer-checkbox-wrapper {
		display: inline-flex;
		align-items: center;
		font-size: 14px;
		color: $basic-black;
		&.disabled {
			cursor: not-allowed;
		}
		.guluer-checkbox-icon {
			display: inline-block;
			position: relative;
			border: 1px solid #dcdfe6;
			border-radius: 2px;
			box-sizing: border-box;
			width: 14px;
			height: 14px;
			background-color: #fff;
			transition: all .3s;
			margin-right: 5px;
			&:after {
				content: '';
				display: inline-flex;
				width: 3px;
				height: 7px;
				border-right: 1px solid transparent;
				border-bottom: 1px solid transparent;
				position: absolute;
				left: 4px;
				top: 1px;
				transform: rotate(45deg) scale(0);
				transition: all .4s;
			}
			&.checked {
				background-color: $basic-blue;
				border-color: $basic-blue;
				&:after {
					border-color: #fff;
					transform: rotate(45deg) scale(1);
				}
			}
			&.disabled {
				cursor: not-allowed;
				background: $disabled-color;
				border-color: #dcdfe6;
				&:after {
					border-color: #c0c4cc;
				}
			}
		}
		.guluer-checkbox-label {
			&.checked {
				color: $basic-blue;
			}
			&.disabled {
				color: #c0c4cc;
			}
		}
		& + & {
			margin-left: 12px;
		}
	}
</style>