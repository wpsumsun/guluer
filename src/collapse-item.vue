<template>
	<div class="collapse-item">
		<div class="title" @click="toggle">
			<g-icon class="icon" name="right"></g-icon>
			{{ title }}
		</div>
		<div class="content" v-show="open">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'g-collapse-item',
		props: {
	    title: {
	      type: String,
		    require: true
	    },
			name: {
	      type: String
			}
		},
		inject: ['eventBus'],
		data() {
	    return {
	      open: false,
		    single: false
	    }
		},
		mounted() {
      this.eventBus && this.eventBus.$on('update:selected', names => {
	      this.open = names.indexOf(this.name) !== -1
	    })
		},
		methods: {
	    toggle() {
		    const eventName = this.open ? 'update:removeSelected' : 'update:addSelected'
        this.eventBus && this.eventBus.$emit(eventName, this.name)
	    }
		},
	}
</script>

<style lang="scss" scoped>
	.collapse-item {
		border-bottom: 1px solid #d9d9d9;
		.title {
			height: 22px;
			display: flex;
			align-items: center;
			padding: 12px 0 12px 40px;
			color: rgba(0, 0, 0, 0.85);
			cursor: pointer;
			position: relative;
			transition: all .3s;
			position: relative;
			.icon {
				fill: rgba(0, 0, 0, 0.85);
				width: 12px;
				position: absolute;
				left: 16px;
			}
		}
		.content {
			padding: 16px;
			overflow: hidden;
			color: rgba(0, 0, 0, 0.65);
			background-color: #fff;
			border-top: 1px solid #d9d9d9;
		}
	}
</style>