import Vue from "vue";
import App from "./app.vue";
import Button from './button/button'
import Icon from './icon/icon'
import buttonGroup from './button/button-group'
import Input from './input/input'
import Row from './grid/row'
import Col from './grid/col'
import Layout from './layout/layout'
import Header from './layout/header'
import Content from './layout/content'
import Footer from './layout/footer'
import Sider from './layout/sider'
import Toast from './toast'
import toast from './toast'
import Tabs from './tab/tabs'
import TabsHead from './tab/tabs-head'
import TabsItem from './tab/tabs-item'
import TabsBody from './tab/tabs-body'
import TabsPane from './tab/tabs-pane'
import Popover from './popover/popover'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse/collapse-item'
import Cascader from './cascader/cascader'
import Carousel from './carousel/carousel'
import CarouselItem from './carousel/carousel-item'
import Radio from './radio/radio'
import RadioGroup from './radio/radio-group'
import Menu from './menu/menu'
import MenuItem from './menu/menu-item'
import SubMenu from './menu/sub-menu'
import Switch from './switch/switch'
import Pagination from './pagination/pagination'
import Upload from './upload/upload'
import Progress from './progress/progress'
import Table from './table/table'

Vue.use(toast)

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', buttonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.component('g-cascader', Cascader)
Vue.component('g-carousel', Carousel)
Vue.component('g-carousel-item', CarouselItem)
Vue.component('g-radio', Radio)
Vue.component('g-radio-group', RadioGroup)
Vue.component('g-menu', Menu)
Vue.component('g-menu-item', MenuItem)
Vue.component('g-sub-menu', SubMenu)
Vue.component('g-switch', Switch)
Vue.component('g-pagination', Pagination)
Vue.component('g-upload', Upload)
Vue.component('g-progress', Progress)
Vue.component('g-table', Table)


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount("#app");