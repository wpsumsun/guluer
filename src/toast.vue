<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'g-toast'
  }
</script>

<style lang="scss" scoped>
  .toast {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    height: 40px;
    color: #fff;
    align-items: center;
    background: rgba(0,0,0,0.74);
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
    padding: 0 16px;
  }
</style>