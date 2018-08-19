<template>
	<div class="popover" @click="toggle" ref="popover">
		<div class="content-wrapper" v-if="visible" ref="contentWrapper">
			<slot name="content"></slot>
		</div>
		<div class="trigger" ref="trigger">
			<slot></slot>
		</div>
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
      getPosition() {
        document.body.appendChild(this.$refs.contentWrapper)
        const { left, top } = this.$refs.trigger.getBoundingClientRect()
        this.$refs.contentWrapper.style.left = `${left + window.scrollX}px`
        this.$refs.contentWrapper.style.top = `${top + window.scrollY}px`
      },
      toggle(event) {
        if (this.$refs.trigger.contains(event.target)) {
          this.visible = !this.visible
          if (this.visible) {
            this.$nextTick(() => {
              this.getPosition()
              document.addEventListener('click', this.closeHandler)
            })
          } else {
            this.close()
          }
        }
      },
		  closeHandler(event) {
        if (this.$refs.popover
		        && (this.$refs.popover.contains(event.target) || this.$refs.popover === event.target)
            || this.$refs.contentWrapper === event.target) {
          return
        }
        this.close()
		  },
		  close() {
        this.visible = false
        document.removeEventListener('click', this.closeHandler)
		  }
	  },
  }
</script>

<style lang="scss" scoped>
	.popover {
		display: inline-flex;
		position: relative;
	}
	.content-wrapper {
		width: 200px;
		position: absolute;
		padding: 18px 20px;
		border: 1px solid #ebeef5;
		border-radius: 4px;
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
		transform: translateY(-100%);
	}
</style>
