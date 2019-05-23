<template>
  <transition name="fade">
    <div class="guluer-layout-sider" v-show="isVisible">
      <slot></slot>
      <Icon name="close" class="close" @click="isVisible=false"></Icon>
    </div>
  </transition>
</template>

<script>
  import Icon from '../icon/icon.vue'
  export default {
    name: 'g-sider',
    components: {
      Icon,
    },
    data() {
      return {
        isVisible: true
      }
    },
    methods: {
    },
  }
</script>

<style lang="scss" scoped>
  .guluer-layout-sider {
    position: relative;
    &>.close {
      fill: #fff;
      width: 16px;
      position: absolute;
      top: 8px;
      right: 8px;
      cursor: pointer;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter, .fade-leave-to {
    margin-left: -200px;
  }
</style>