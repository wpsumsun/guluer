const expect = chai.expect
import Vue from 'vue'
import Col from '../src/col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
  it('存在', () => {
    expect(Col).to.be.ok
  })
  it('接收 span 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Consructor = Vue.extend(Col)
    const  vm = new Consructor({
      propsData: {
        span: '1',
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-1')).to.equal(true)
    div.remove()
    vm.$destroy()
  })
  it('接收 offset 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Consructor = Vue.extend(Col)
    const  vm = new Consructor({
      propsData: {
        offset: '3',
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('offset-3')).to.equal(true)
    div.remove()
    vm.$destroy()
  })
  it('接收 ipad 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Consructor = Vue.extend(Col)
    const  vm = new Consructor({
      propsData: {
        ipad: { span: 1, offset: 2 },
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-ipad-1')).to.equal(true)
    expect(vm.$el.classList.contains('offset-ipad-2')).to.equal(true)
    div.remove()
    vm.$destroy()
  })
  it('接收 narrow-pc 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Consructor = Vue.extend(Col)
    const  vm = new Consructor({
      propsData: {
        narrowPc: { span: 1, offset: 2 },
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-narrowPc-1')).to.equal(true)
    expect(vm.$el.classList.contains('offset-narrowPc-2')).to.equal(true)
    div.remove()
    vm.$destroy()
  })
  it('接收 pc 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Consructor = Vue.extend(Col)
    const  vm = new Consructor({
      propsData: {
        pc: { span: 1, offset: 2 },
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-pc-1')).to.equal(true)
    expect(vm.$el.classList.contains('offset-pc-2')).to.equal(true)
    div.remove()
    vm.$destroy()
  })
  it('接收 wide-pc 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Consructor = Vue.extend(Col)
    const  vm = new Consructor({
      propsData: {
        widePc: { span: 1, offset: 2 },
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-widePc-1')).to.equal(true)
    expect(vm.$el.classList.contains('offset-widePc-2')).to.equal(true)
    div.remove()
    vm.$destroy()
  })
})