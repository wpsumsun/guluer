<template>
  <button
    class="g-button"
    :class="{ [`icon-${iconPosition}`]: !!iconPosition }"
    @click="$emit('click')">
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  import gIcon from '../icon/icon.vue'
  export default {
    name: "g-button",
    components: {
      gIcon
    },
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
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
  @import "var";
  .g-button {
    height: $button-height;
    line-height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    background: $button-bg;
    color: $color;
    border: 1px solid $border-color;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    .content {
      padding: 0;
    }
    &:hover {
      border-color: $border-color-hover;
    }
    &:active {
      background: $button-active-bg;
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