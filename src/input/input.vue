<template>
<div class="wrapper" :class="{ error: error, tips: tips }">
  <input
    ref="input"
    type="text" 
    :value="value" 
    :disabled="disabled" 
    :readonly="readonly"
    @change="changeHandler"
    @input="inputHandler"
    @focus="focusHandler"
    @blur="blurHandler">

  <template v-if="error">
    <Icon name="error" class="icon-warning"></Icon>
    <span class="errorMessage">{{ error }}</span>
  </template>
  <template v-if="tips">
    <Icon name="info" class="icon-info"></Icon>
    <span class="tipsMessage">{{ tips }}</span>
  </template>
</div>
</template>

<script>
  import Icon from '../icon/icon.vue'
  export default {
    name: 'g-input',
    components: {
      Icon
    },
    props: {
      value: {
        type: [String, Number, Date],
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      error: {
        type: String
      },
      tips: {
        type: String
      }
    },
    methods: {
      setRawValue(value) {
        this.$refs.input.value = value
      },
      changeHandler(e) {
        this.$emit('change', e.target.value)
      },
      inputHandler(e) {
        this.$emit('input', e.target.value)
      },
      focusHandler(e) {
        this.$emit('focus', e.target.value)
      },
      blurHandler(e) {
        this.$emit('blur', e.target.value)
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import "var";
  .wrapper {
    display: inline-flex;
    align-items: center;
    > *:not(:last-child) {
      margin-right: .4em;
    }
    > input {
      height: $height;
      padding: 0 8px;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      font-size: inherit;
      &:hover {
        border-color: $border-color-hover;
      }
      &:focus {
        outline: none;
        box-shadow: inset 0 1px 3px $box-shadow-color;
      }
      &[disabled], &[readonly] {
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
      }
    }
    &.error {
      input {
        border-color: $red;
        &:hover {
          border-color: $red;
        }
        &:focus {
          outline: none;
          box-shadow: inset 0 1px 3px $red;
        }
      }
      .icon-warning {
        fill: $red;
      }
      .errorMessage {
        color: $red;
      }
    }
    &.tips {
      .icon-info {
        fill: $tipsColor;
      }
      .tipsMessage {
        color: $tipsColor;
      }
    }
  }
</style>