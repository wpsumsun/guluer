<template>
  <div class="g-pagination">
    <span v-for="(page, index) in pages" :key="index">
      {{ page }}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'g-pagination',
    props: {
      total: {
        type: Number,
        require: true
      },
      currentPage: {
        type: Number,
        require: true
      },
      hideOnSinglePage: {
        type: Boolean,
        default: true
      }
    },
    data() {
      let pages = [1, this.total, this.currentPage - 2, this.currentPage - 1, this.currentPage, this.currentPage + 1, this.currentPage + 2]
      pages = this.unique(pages)
      pages.sort((a, b) => a - b)
      pages = pages.reduce((mulator, current, index, array) => {
        mulator.push(current)
        if (array[index + 1]&&array[index + 1] - array[index] > 3) {
          mulator.push('...')
          
        }
        return mulator
      }, [])       
      return {
        pages: pages
      }
    },
    methods: {
      unique(arr) {
        const obj = {}
        arr.map(item => {
          obj[item] = true
        })
        return Object.keys(obj).map(x => parseInt(x, 10))
      }
    }
  }
</script>

<style lang="scss" scoped>
  $animation_duration: .3s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }
  @keyframes slide-down {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 100%;
      transform: translateY(0);
    }
  }
  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 100%;
      transform: translateY(0);
    }
  }
  .wrapper {
    position: fixed;
    left: 50%;
    &.top {
      top: 0;
      transform: translateX(-50%);
      .toast {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slide-down $animation_duration;
      }
    }
    &.bottom {
      bottom: 0;
      transform: translateX(-50%);
      .toast {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: slide-up $animation_duration;
      }
    }
    &.middle {
      top: 50%;
      transform: translate(-50%, -50%);
      .toast {
        animation: fadeIn $animation_duration;
      }
    }
  }
  .toast {
    display: flex;
    min-height: 40px;
    max-width: 400px;
    font-size: 14px;
    line-height: 1.2;
    color: #fff;
    align-items: center;
    background: rgba(0,0,0,0.74);
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
    padding: 0 8px;
    .message {
      padding: 8px 0;
    }
    .close {
      display: inline-flex;
      padding-left: 8px;
      height: 100%;
      border-left: 1px solid #666;
      align-items: center;
      margin-left: 8px;
      flex-shrink: 0;
      cursor: pointer;
    }
  }
</style>