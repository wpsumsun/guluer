<template>
	<div class="guluer-switch" @click="onClick" :class="{ disabled }">
		<input hidden type="checkbox" @change="change" :checked="checked">
		<span class="inactive-status" :class="{ checked: value === inactiveValue }">{{ inactiveValue }}</span>
		<span class="switch" :class="{ checked }" ref="switch"></span>
		<span class="active-status" :class="{  checked: value === activeValue  }">{{ activeValue }}</span>
	</div>
</template>

<script>
  export default {
    name: "g-switch",
	  props: {
      value: {
        type: [Boolean, String, Number],
	      default: false
      },
      activeValue: {
        type: [Boolean, String, Number],
        default: true
      },
      inactiveValue: {
        type: [Boolean, String, Number],
        default: false
      },
      activeColor: {
        type: String,
	      default: '#409EFF'
      },
		  inactiveColor: {
        type: String,
	      default: '#dcdfe6'
      },
		  disabled: {
        type: Boolean,
			  default: false
		  }
	  },
	  computed: {
      checked() {
        return this.value === this.activeValue
      },
	  },
	  created() {
      if ([this.activeValue, this.inactiveValue].indexOf(this.value) < 0) {
        this.$emit('input', this.value ? this.activeValue : this.inactiveValue);
      }
	  },
	  mounted() {
      this.setBackgroundColor()
	  },
	  watch: {
      checked() {
        this.setBackgroundColor()
		  },
	  },
	  methods: {
      onClick() {
        if (!this.disabled) {
          this.change()
        }
      },
      change() {
        this.$emit('input', !this.checked ? this.activeValue : this.inactiveValue)
        this.$emit('change', !this.checked ? this.activeValue : this.inactiveValue)
      },
      setBackgroundColor() {
        if (this.activeColor || this.inactiveColor) {
          let color = this.checked ? this.activeColor : this.inactiveColor
	        this.$refs.switch.style.backgroundColor = color
	        this.$refs.switch.style.borderColor = color
        }
       },
	  }
  }
</script>

<style lang="scss" scoped>
@import "~@/styles/var";
.guluer-switch {
	font-size: 14px;
	line-height: 20px;
	height: 20px;
	position: relative;
	box-sizing: border-box;
	display: inline-flex;
	align-items: center;
	&.disabled {
		opacity: .4;
		cursor: not-allowed;
		.switch {
			cursor: not-allowed;
		}
	}
	input[type="checkbox"] {
		position: absolute;
		width: 0;
		height: 0;
	}
	.active-status, .inactive-status {
		display: inline-block;
		color: $text-black;
		&.checked {
			color: $blue-light;
		}
	}
	.active-status {
		margin-left: 10px;
	}
	.inactive-status {
		margin-right: 10px;
	}
	.switch {
		display: inline-flex;
		width: 40px;
		height: 20px;
		background: $switch-default-unchecked-color;
		border: 1px solid $switch-default-unchecked-color;
		border-radius: 20px;
		position: relative;
		cursor: pointer;
		box-sizing: border-box;
		&::before {
			content: '';
			display: inline-block;
			width: 16px;
			height: 16px;
			border-radius: 50%;
			background: #fff;
			position: absolute;
			left: 1px;
			top: 1px;
			transition: all .3s;
		}
		&.checked {
			background: $switch-default-checked-color;
			border-color: $switch-default-checked-color;
			&::before {
				left: 100%;
				margin-left: -17px;
			}
		}
	}
}
</style>