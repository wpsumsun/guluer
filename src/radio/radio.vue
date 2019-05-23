<template>
	<label
		class="radio-wrapper"
		:class="{ active: model === label, disabled, }">
		<span
			class="radio-dot">
			<input
				type="radio"
				:value="label"
				@change="change"
				aria-hidden="true"
				:disabled="disabled"
				v-model="model">
		</span>
		<span class="slot-wrapper">
			<slot></slot>
		</span>
	</label>
</template>

<script>
  export default {
    name: "g-radio",
	  props: {
      value: {
        type: [String, Number, Boolean],
	      require: true
      },
		  label: {
        type: [String, Number, Boolean],
			  require: true
		  },
		  disabled: {
        type: Boolean,
			  default: false
		  }
	  },
	  inject: {
      eventBus: {
        default: null
      }
	  },
	  data() {
      return {
        radioGroup: null
      }
	  },
	  created() {
    },
	  computed: {
      isGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.name !== 'g-radio-group') {
            parent = parent.$parent;
          } else {
            this.radioGroup = parent;
            return true;
          }
        }
        return false;
      },
      model: {
        get() {
          return this.isGroup ? this.radioGroup.value : this.value
        },
	      set(val) {
          this.$emit('input', val);
	      }
      },
	  },
	  methods: {
      change() {
        this.$emit('change', this.label)
        this.isGroup && this.eventBus.$emit('change', this.label)
      },
	  },
  }
</script>

<style lang="scss" scoped>
@import "~@/styles/var";
.radio-wrapper {
	color: #606266;
	line-height: 1;
	position: relative;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	white-space: nowrap;
	outline: none;
	font-size: 14px;
	&.active {
		color: $blue-light;
		.radio-dot {
			border-color: $blue-light;
			position: relative;
			&::before {
				opacity: 0;
				animation: radioEffect .3s linear;
			}
			&::after {
				transform: translate(-50%, -50%) scale(1);
				background: $blue-light;
			}
		}
	}
	&.disabled {
		cursor: not-allowed;
		.slot-wrapper {
			color: #c0c4cc;
		}
		.radio-dot {
			background-color: #f5f7fa;
			border-color: #e4e7ed;
			pointer-events: none;
			&:after {
				background-color: #c0c4cc
			}
		}
	}
	.radio-dot {
		display: inline-block;
		width: 14px;
		height: 14px;
		border: 1px solid #dcdfe6;
		border-radius: 50%;
		background: #fff;
		position: relative;
		&::before {
			content: '';
			display: inline-block;
			width: 100%;
			height: 100%;
			background: transparent;
			position: absolute;
			left: -1px;
			top: -1px;
			border-radius: 50%;
			border: 1px solid $blue-light;
			opacity: 0;
		}
		&::after {
			content: '';
			display: inline-block;
			width: 6px;
			height: 6px;
			background: #fff;
			position: absolute;
			left: 50%;
			top: 50%;
			border-radius: 50%;
			transform: translate(-50%, -50%) scale(0);
			transition: all .3s;
		}
		&:hover {
			border-color: $blue-light;
		}
	}
	.slot-wrapper {
		padding-left: 10px;
	}
	input {
		opacity: 0;
	}
	&+.radio-wrapper {
		margin-left: 30px;
	}
	@keyframes radioEffect {
		0% {
			opacity: 0.5;
			transform: scale(1);
		}
		100% {
			opacity: 0;
			transform: scale(1.6);
		}
	}
}
</style>