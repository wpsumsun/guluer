<template>
  <svg class="g-icon" @click="$emit('click')">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import './svg'

export default {
  name: 'icon',
  props: ['name']
}
</script>

<style lang="scss" scoped>
  .g-icon {
    width: 1em;
    height: 1em;
  }
</style>