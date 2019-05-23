<template>
  <div class="guluer-layout-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'g-content'
  }
</script>

<style lang="scss" scoped>
  .guluer-layout-content {
    flex-grow: 1;
  }
</style>