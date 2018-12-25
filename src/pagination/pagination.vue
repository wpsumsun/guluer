<template>
  <div class="g-pagination">
    <span class="g-pagination-item" v-for="(page, index) in pages" :key="index">
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
      let pages = this.unique([1, 
                   this.total, 
                   this.currentPage - 2, 
                   this.currentPage - 1, 
                   this.currentPage, 
                   this.currentPage + 1, 
                   this.currentPage + 2])
                   .sort((a, b) => a - b)
                  .reduce((mulator, current, index, array) => {
                    mulator.push(current)
                    if (array[index + 1]&&array[index + 1] - array[index] > 3) {
                      mulator.push('...')
                      
                    }
                    return mulator
                  }, [])       
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
  .g-pagination {
    .g-pagination-item {
      display: inline-flex;
      height: 32px;
      min-width: 32px;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-right: 8px;
    }
  }
</style>