<template>
  <div 
    class="col" 
    :class="colClass"
    :style="colStyle">
    <div class="col-box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'g-col',
    props: {
      span: {
        type: [String, Number]
      },
      offset: {
        type: [String, Number]
      },
    },
    computed: {
      colClass() {
        const { span, offset } = this
        return { 
          [`col-${span}`]: !!span, 
          [`offset-${offset}`]: !!offset,  
        }
      },
      colStyle() {
        const { gutter } = this
        return { 
          paddingLeft: `${gutter/2}px`, 
          paddingRight: `${gutter/2}px` 
        }
      },
    },
    data() {
      return {
        gutter: 0
      }
    },
  }
</script>

<style lang="scss" scoped>
  .col {
    width: 50%;
    .col-box {
      height: 100%;
      width: 100%;
    }
    &:nth-child(odd) .col-box{
      background: rgba(0, 160, 233, 0.7);
    }
    &:nth-child(even) .col-box{
      background: #00a0e9;
    }

    $classprefix: col-;
    @for $n from 1 through 24 {
      &.#{$classprefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $classprefix: offset-;
    @for $n from 1 through 24 {
      &.#{$classprefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
</style>