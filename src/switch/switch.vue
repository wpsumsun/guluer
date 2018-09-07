<template>
	<div class="g-switch" @click="onClick">
		<input type="checkbox" @change="change" :checked="checked">
		<span class="switch" :class="{ checked }"></span>
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
	  methods: {
      onClick() {
        if (!this.disabled) {
          this.change()
        }
      },
      change() {
        this.$emit('input', !this.checked ? this.activeValue : this.inactiveValue)
      }
	  }
  }
</script>

<style lang="scss" scoped>
@import "var";
.g-switch {
	font-size: 14px;
	line-height: 20px;
	height: 20px;
	position: relative;
	box-sizing: border-box;
	input[type="checkbox"] {
		position: absolute;
		width: 0;
		height: 0;
	}
	.switch {
		display: inline-flex;
		width: 40px;
		height: 20px;
		background: $switch-default-color;
		border: 1px solid $switch-default-color;
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
			&::before {
				left: 100%;
				margin-left: -17px;
			}
		}
	}
}
</style>