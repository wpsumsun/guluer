<template>
	<div class="collapse-item">
		<div class="title" @click="toggle">
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
	      open: false
	    }
		},
		mounted() {
      this.eventBus && this.eventBus.$on('update:selected', name => {
	      if (this.name !== name) {
	        this.open = false
	      } else {
	        this.open = true
	      }
	    })
		},
		methods: {
	    toggle() {
	      if(this.open) {
	        this.open = false
	      } else {
          this.eventBus && this.eventBus.$emit('update:selected', this.name)
	      }
	    }
		},
	}
</script>

<style lang="scss" scoped>
	.collapse-item {
		border-bottom: 1px solid #d9d9d9;
		.title {
			line-height: 22px;
			padding: 12px 0 12px 40px;
			color: rgba(0, 0, 0, 0.85);
			cursor: pointer;
			position: relative;
			transition: all .3s;
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