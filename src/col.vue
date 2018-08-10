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
  const validator = (value) => {
    let valid = true
    const defaultKeys = ['span', 'offset']
    Object.keys(value).forEach(key => {
      if (!defaultKeys.includes(key)) {
        valid = false
      }
    })
    return valid
  } 

  export default {
    name: 'g-col',
    props: {
      span: {
        type: [String, Number]
      },
      offset: {
        type: [String, Number]
      },
      ipad: {
        type:Object,
        validator,
      },
      narrowPc: {
        type:Object,
        validator,
      },
      pc: {
        type:Object,
        validator,
      },
      widePc: {
        type:Object,
        validator,
      },
    },
    computed: {
      colClass() {
        const { span, offset, ipad, narrowPc, pc, widePc } = this
        return [ 
          span && [`col-${span}`],
          offset&&[`offset-${offset}`],
          ipad&&[`col-ipad-${ipad.span}`],
          narrowPc&&[`col-narrowPc-${narrowPc.span}`],
          pc&&[`col-pc-${pc.span}`],
          widePc&&[`col-widePc-${widePc.span}`]
        ]
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

    @media (min-width: 576px) {
      $classprefix: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$classprefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $classprefix: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$classprefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      } 
    }
    @media (min-width: 768px) {
      $classprefix: col-narrowPc-;
      @for $n from 1 through 24 {
        &.#{$classprefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $classprefix: offset-narrowPc-;
      @for $n from 1 through 24 {
        &.#{$classprefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      } 
    }
    @media (min-width: 992px) {
      $classprefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$classprefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $classprefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$classprefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      } 
    }
    @media (min-width: 1200px) {
      $classprefix: col-widePc-;
      @for $n from 1 through 24 {
        &.#{$classprefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $classprefix: offset-widePc-;
      @for $n from 1 through 24 {
        &.#{$classprefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      } 
    }
  }
</style>