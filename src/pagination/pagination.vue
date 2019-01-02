<template>
  <div class="g-pager">
    <span class="g-pager-item icon" :class="{ disable: currentPage === 1 }">
      <g-icon name="left"></g-icon>  
    </span>
    <template  v-for="pager in pages">
      <span class="g-pager-item more" v-if="pager === '...'">
        <g-icon name="more"></g-icon>
      </span>
      <span v-else class="g-pager-item" :class="{ active: pager === currentPage }">
        {{ pager }}
      </span> 
    </template>
    <span class="g-pager-item icon" :class="{ disable: currentPage === total }">
      <g-icon name="right"></g-icon>  
    </span>
  </div>
</template>

<script>
  import GIcon from '../icon/icon'

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
    components: {
      GIcon
    },
    data() {
      let pages = this.unique([1, 
                   this.total, 
                   this.currentPage - 2, 
                   this.currentPage - 1, 
                   this.currentPage, 
                   this.currentPage + 1, 
                   this.currentPage + 2])
                   .filter(n => n >= 1 && n <= this.total)
                   .sort((a, b) => a - b)
                  .reduce((mulator, current, index, array) => {
                    mulator.push(current)
                    if (array[index + 1]&&array[index + 1] - array[index] > 3) {
                      mulator.push('...')
                      
                    }
                    return mulator
                  }, [])    
                  console.log(pages)   
      return {
        pages
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
  $activeColor: #1890ff;
  .g-pager {
    &-item {
      display: inline-flex;
      height: 32px;
      min-width: 32px;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-right: 8px;
      color: rgba(0, 0, 0, 0.6);
      &:hover {
        color: $activeColor;
        border-color: $activeColor;
        .more svg {
          fill: $activeColor;
        }
      }
      &.active {
        color: $activeColor;
        border-color: $activeColor;
      }
      &.icon {
        vertical-align: top;
        svg {
          fill: rgba(0, 0, 0, 0.6);
        }
        &:hover {
          color: $activeColor;
          border-color: $activeColor;
          svg {
            fill: $activeColor;
          }
        }
      }
      &.more {
        border: none;
      }
      &.disable {
        cursor: not-allowed;
        pointer-events: none;
      }
    }
  }
</style>