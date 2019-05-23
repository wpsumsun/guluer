import Vue from 'vue'
import toast from '@/toast'
import Button from '@/button/button'

export default ({
  Vue // VuePress 正在使用的 Vue 构造函数
}) => {
  Vue.use(toast)
  Vue.component('g-button', Button)
}