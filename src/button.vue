<template>
  <button class="g-button">按钮</button>
</template>

<script>
  export default {
    name: "button"
  }
</script>

<style scoped lang="scss">
  .g-button {
    height: var(--button-height);
    line-height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    background: var(--button-bg);
    color: var(--color);
    border: 1px solid var(--border-color);
    cursor: pointer;
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
  }
</style>