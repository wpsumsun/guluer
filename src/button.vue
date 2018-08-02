<template>
  <button class="g-button" :class="{ [`icon-${iconPosition}`]: !!iconPosition }">
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "g-button",
    props: ['icon', 'iconPosition']
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
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
    &.icon-right {
      .icon {
        order: 2;
      }
    }
  }

</style>