<template>
<div class="g-input">
  <input 
    type="text" 
    :value="value" 
    :disabled="disabled" 
    :readonly="readonly"
    @change="changeHandler"
    @input="inputHandler"
    @focus="focusHandler"
    @blur="blurHandler">

  <div v-if="error" class="errorMessage"><Icon name="error"></Icon>{{ error }}</div>
</div>
</template>

<script>
  import Icon from './icon.vue'
  export default {
    name: 'g-input',
    components: {
      Icon
    },
    props: {
      value: {
        type: [String, Number],
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
      }
    },
    methods: {
      changeHandler(e) {
        this.$emit('change', 'hi')
      },
      inputHandler(e) {
        this.$emit('input', 'hi')
      },
      focusHandler(e) {
        this.$emit('focus',  'hi')
      },
      blurHandler(e) {
        this.$emit('blur',  'hi')
      },
    },
  }
</script>