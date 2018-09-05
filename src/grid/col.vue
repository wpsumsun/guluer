<template>
  <div 
    class="col" 
    :class="colClass"
    :style="colStyle">
    <slot></slot>
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
        const { span, offset, ipad, narrowPc, pc, widePc, createClass } = this
        return [ 
          ...createClass({ span, offset }),
          ...createClass(ipad, 'ipad-'),
          ...createClass(narrowPc, 'narrowPc-'),
          ...createClass(pc, 'pc-'),
          ...createClass(widePc, 'widePc-'),
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
    methods: {
      createClass(obj, str='') {
        if (!obj) { return [] }
        let array = []
        if(obj.span) {
          array.push(`col-${str}${obj.span}`)
        }
        if(obj.offset) {
          array.push(`offset-${str}${obj.offset}`)
        }
        return array
      }
    },
  }
</script>

<style lang="scss" scoped>
  .col {
    width: 50%;

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