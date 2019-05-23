import Vue from 'vue'
import toast from '@/toast'
import Button from '@/button/button'
import Input from '@/input/input'
import Row from '@/grid/row'
import Col from '@/grid/col'
import Layout from '@/layout/layout'
import Header from '@/layout/header'
import Content from '@/layout/content'
import Footer from '@/layout/footer'
import Sider from '@/layout/sider'
import Tabs from '@/tab/tabs'
import TabsHead from '@/tab/tabs-head'
import TabsItem from '@/tab/tabs-item'
import TabsBody from '@/tab/tabs-body'
import TabsPane from '@/tab/tabs-pane'
import Popover from '@/popover/popover'
import Collapse from '@/collapse/collapse'
import CollapseItem from '@/collapse/collapse-item'
import Icon from '@/icon/icon'

export default ({
  Vue // VuePress 正在使用的 Vue 构造函数
}) => {
  Vue.use(toast)
  Vue.component('g-button', Button)
  Vue.component('g-input', Input)
  Vue.component('g-row', Row)
  Vue.component('g-col', Col)
  Vue.component('g-layout', Layout)
  Vue.component('g-header', Header)
  Vue.component('g-content', Content)
  Vue.component('g-footer', Footer)
  Vue.component('g-sider', Sider)
  Vue.component('g-tabs', Tabs)
  Vue.component('g-tabs-head', TabsHead)
  Vue.component('g-tabs-item', TabsItem)
  Vue.component('g-tabs-body', TabsBody)
  Vue.component('g-tabs-pane', TabsPane)
  Vue.component('g-popover', Popover)
  Vue.component('g-collapse', Collapse)
  Vue.component('g-collapse-item', CollapseItem)
  Vue.component('g-icon', Icon)
}