<template>
	<transition name="slide">
		<div class="g-carousel-item" v-show="visible" :class="{ reverse, active: visible }">
			<slot></slot>
		</div>
	</transition>
</template>

<script>
  export default {
    name: 'g-carousel-item',
	  props: {
      name: {
        type: String,
	      require: true
      }
	  },
	  data() {
      return {
        selected: null,
	      reverse: false
      }
	  },
	  computed: {
      visible() {
        return this.selected === this.name
      }
	  },
  }
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
	transition: all 1s;
}
.slide-enter.reverse {
	transform: translateX(-100%);
}
.slide-leave-to.reverse {
	transform: translateX(100%);
	position: absolute;
	left: 0;
	top: 0;
}
.slide-enter {
	transform: translateX(100%);
}
.slide-leave-to {
	transform: translateX(-100%);
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}
.g-carousel-item {
	width: 100%;
	height: 100%;
	flex-shrink: 0;
	background: red;
}
</style>
