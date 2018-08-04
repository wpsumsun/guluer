import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import buttonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', buttonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: true,
  }
})

// 单元测试
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
{
  const Constructor = Vue.extend(Button)
  const vm  = new Constructor({
    propsData: {
      icon: 'settings'
    }
  }).$mount()

  const href = vm.$el.querySelector('use').getAttribute('xlink:href')
  expect(href).to.equal('#i-settings')

  vm.$el.remove()
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm  = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  }).$mount()

  const href = vm.$el.querySelector('use').getAttribute('xlink:href')
  expect(href).to.equal('#i-loading')

  vm.$el.remove()
  vm.$destroy()
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)

  const Constructor = Vue.extend(Button)
  const vm  = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  }).$mount(div)

  const { order } = window.getComputedStyle(vm.$el.querySelector('svg'))
  expect(order).to.equal('2')

  vm.$el.remove()
  vm.$destroy()
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)

  const Constructor = Vue.extend(Button)
  const vm  = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  }).$mount(div)

  let spy = chai.spy(function() {})

  vm.$on('click', spy)
  vm.$el.click()
  expect(spy).to.be.have.called()

  vm.$el.remove()
  vm.$destroy()
}