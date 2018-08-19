<template>
	<div class="popover" @click.stop="toggle">
		<div class="content-wrapper" v-if="visible" @click.stop>
			<slot name="content"></slot>
		</div>
		<slot></slot>
	</div>
</template>

<script>
  export default {
    name: 'g-popover',
	  data() {
      return {
        visible: false
      }
	  },
	  methods: {
      toggle() {
        this.visible = !this.visible
	      this.$nextTick(() => {
          document.addEventListener('click', this.closeHandler)
	      })
      },
		  closeHandler() {
        if (this.visible) {
          this.visible = false
	        document.removeEventListener('click', this.closeHandler)
        }
		  }
	  },
  }
</script>

<style lang="scss" scoped>
	.popover {
		display: inline-flex;
		position: relative;
		.content-wrapper {
			width: 200px;
			position: absolute;
			bottom: 100%;
			left: 0;
			padding: 18px 20px;
			border: 1px solid #ebeef5;
			border-radius: 4px;
			box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
		}
	}
</style>