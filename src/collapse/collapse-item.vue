<template>
	<div class="collapse-item">
		<div class="title" @click="toggle">
			<g-icon class="icon" :class="{ active: open }" name="right"></g-icon>
			{{ title }}
		</div>
		<div class="content-wrapper" :class="{ active : open }">
			<div class="content">
				<slot></slot>
			</div>
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
	@keyframes expand {
		0% {
			height: 0;
		}
		100% {
			height: auto;
		}
	}
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
				transition: all .3s;
				&.active {
					transform: rotate(90deg);
				}
			}
		}
		.content-wrapper {
			box-sizing: content-box;
			overflow: auto;
			color: rgba(0, 0, 0, 0.65);
			background-color: #fff;
			transition: all .3s;
			max-height: 0;
			&.active {
				max-height: 300px;
			}
			.content {
				border-top: 1px solid #d9d9d9;
				padding: 16px;
			}
		}
	}
</style>