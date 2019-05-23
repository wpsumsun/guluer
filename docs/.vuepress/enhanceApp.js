import Vue from 'vue'
import toast from '../../src/toast'

export default ({
  Vue // VuePress 正在使用的 Vue 构造函数
}) => {
  Vue.use(toast)
}