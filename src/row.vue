<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'g-row',
    props: {
      gutter: {
        type: [String, Number]
      }
    },
    computed: {
      rowStyle() {
        const { gutter } = this
        return { 
          marginLeft: `${-gutter/2}px`, 
          marginRight: `${-gutter/2}px` 
        }
      }
    },
    mounted() {
      this.$children.forEach(vm => vm.gutter = this.gutter)
    },
  }
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
    height: 100px;
  }
</style>