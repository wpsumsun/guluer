<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'g-row',
    props: {
      gutter: {
        type: [String, Number]
      },
      align: {
        type: String
      }
    },
    computed: {
      rowStyle() {
        const { gutter } = this
        return { 
          marginLeft: `${-gutter/2}px`, 
          marginRight: `${-gutter/2}px` 
        }
      },
      rowClass() {
        const { align } = this
        return !!align ? [`align-${align}`] : []
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
    flex-wrap: wrap;
    &.align-center {
      justify-content: center;
    }
    &.align-left {
      justify-content: flex-start;
    }
    &.align-right {
      justify-content: flex-end;
    }
  }
</style>