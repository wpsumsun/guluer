<template>
  <div class="guluer-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'g-layout',
    data() {
      return {
        layoutClass: {
          hasSider: false
        }
      }
    },
    mounted() {
      this.$children.forEach(vm => {
        if (vm.$options.name === 'g-sider') {
          this.layoutClass.hasSider = true
        }
      })
    },
  }
</script>

<style lang="scss" scoped>
  .guluer-layout {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &.hasSider {
      flex-direction: row;
    }
  }
</style>