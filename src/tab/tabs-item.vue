<template>
	<div class="guluer-tabs-item" @click="change" :class="classList" :data-name="name">
		<slot></slot>
	</div>
</template>

<script>
	export default {
	  name: 'g-tabs-item',
		inject: ['eventBus'],
		props: {
	    name: {
	      type: String,
		    require: true
	    },
	    disabled: {
	      type: Boolean,
		    default: false
	    },
		},
		data() {
	    return {
	      active: false
	    }
		},
		computed: {
	    classList() {
	      return {
          active: this.active,
		      disabled: this.disabled
	      }
	    },
		},
		mounted() {
			this.eventBus&&this.eventBus.$on('update:selected', (selected) => {
        this.active = (selected === this.name)
			})
		},
		methods: {
      change() {
        if (!this.disabled) {
          this.eventBus&&this.eventBus.$emit('update:selected', this.name, this)
	        this.$emit('click')
        }
      },
		}
	}
</script>

<style lang="scss" scoped>
	.guluer-tabs-item {
		padding: 0 3em;
		flex-shrink: 0;
		height: 100%;
		display: flex;
		align-items: center;
		cursor: pointer;
		&.active {
			color: #1890ff;
			font-weight: bold;
		}
		&.disabled {
			pointer-events: none;
			color: rgba(0, 0, 0, 0.25);
		}
	}
</style>