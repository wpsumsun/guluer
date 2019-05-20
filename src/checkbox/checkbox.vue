<template>
	<label class="guluer-checkbox-wrapper" :class="{ disabled }">
		<span
			class="guluer-checkbox-icon"
			:class="{ checked: value, disabled }">
		</span>
		<input
			type="checkbox"
			hidden
			:checked="value"
			:disabled="disabled"
			@change="onChange">
		<span class="guluer-checkbox-label" :class="{ checked: value, disabled }">
			<slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
		</span>
	</label>
</template>

<script>
	export default {
	  name: 'guluer-checkbox',
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
		data() {
			return {
			}
		},
		mounted() {
      console.log(this)
    },
		methods: {
      onChange(e) {
        this.$emit('input', e.target.checked)
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