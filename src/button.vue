<template>
  <button class="g-button" :class="{ [`icon-${iconPosition}`]: !!iconPosition }">
    <g-icon class="icon" v-if="icon" :name="icon"></g-icon>
    <g-icon class="loading" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    name: "g-button",
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return (value === 'left' || value === 'right')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @keyframes spin{
    0 {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .g-button {
    height: var(--button-height);
    line-height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    background: var(--button-bg);
    color: var(--color);
    border: 1px solid var(--border-color);
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
    &.icon-left {
      .icon {
        order: 1;
        margin-right: .2em;
      }
      .content {
        order: 2;
      }
    }
    &.icon-right {
      .icon {
        order: 2;
        margin-left: .2em;
      }
      .content {
        order: 1;
      }
    }
    .loading {
      animation: spin 1.5s infinite linear;
    }
  }

</style>