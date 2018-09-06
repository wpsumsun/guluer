<template>
	<div class="sub-menu">
		<span class="title" @click="toggle" :class="{ active }">
			<slot name="title"></slot>
		</span>
		<div class="popover" v-show="visible">
			<slot></slot>
		</div>
	</div>
</template>

<script>
  export default {
    name: "g-sub-menu",
	  props: {
      name: {
        type: String,
	      require: true
      }
	  },
	  inject: ['root'],
	  computed: {
      active() {
        return this.root.namePath.indexOf(this.name) > -1
      },
	  },
	  data() {
      return {
        visible: false,
      }
	  },
	  methods: {
      toggle() {
        this.visible = !this.visible
      },
      updateNamePath() {
        this.root.namePath.unshift(this.name)
        this.$parent.updateNamePath && this.$parent.updateNamePath()
      },
	  }
  }
</script>

<style lang="scss" scoped>
.sub-menu {
	position: relative;
	.title {
		padding: 10px 20px;
		display: inline-block;
		vertical-align: middle;
		&.active {
			background: #00a0e9;
		}
	}
	.popover {
		position: absolute;
		left: 0;
		top: 100%;
		white-space: nowrap;
		border: 1px solid #00a0e9;
		.popover {
			position: absolute;
			left: 100%;
			top: 0;
			margin-left: 8px;
		}
	}
}
</style>