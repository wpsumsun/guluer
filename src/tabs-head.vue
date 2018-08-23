<template>
	<div class="tabs-head">
		<slot></slot>
		<div class="active-line" ref="line"></div>
		<div class="actions-wrapper">
			<slot name="actions"></slot>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'g-tabs-head',
		inject: ['eventBus'],
		mounted() {
	    this.eventBus.$on('update:selected', (selected, vm) => {
		    const { width, left } = vm.$el.getBoundingClientRect()
		    this.$refs.line.style.width = `${width}px`
		    this.$refs.line.style.left = `${left}px`
	    })
		},
	}
</script>

<style lang="scss" scoped>
	@import "var";
	.tabs-head {
		display: flex;
		height: $tabs-height;
		justify-content: flex-start;
		position: relative;
		border-bottom: 1px solid #e8e8e8;
		.actions-wrapper {
			margin-left: auto;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 1em;
		}
		.active-line {
			position: absolute;
			bottom: 0;
			background: #1890ff;
			height: 2px;
			transition: all .2s;
		}
	}
</style>