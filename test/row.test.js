const expect = chai.expect
import Vue from 'vue'
import Row from '../src/row.vue'
import Col from '../src/col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在', () => {
    expect(Row).to.be.ok
    expect(Col).to.be.ok
  })
  it('接收 gutter 属性', (done) => {
    Vue.component('g-row', Row)
    Vue.component('g-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-row gutter="20">
        <g-col></g-col> 
        <g-col></g-col>
      </g-row>
    `
    const vm = new Vue({
      el: div,
    })
    setTimeout(() => {
      const rowElement = vm.$el.querySelector('.row')
      expect(getComputedStyle(rowElement).marginLeft).to.equal('-10px')
      expect(getComputedStyle(rowElement).marginRight).to.equal('-10px')
      const colElements = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(colElements[0]).paddingRight).to.equal('10px')
      expect(getComputedStyle(colElements[1]).paddingLeft).to.equal('10px')
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })
  it('接收 align 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Consructor = Vue.extend(Row)
    const  vm = new Consructor({
      propsData: {
        align: 'center',
      }
    }).$mount(div)
    expect(getComputedStyle(vm.$el).justifyContent).to.equal('center')
    vm.$destroy()
  })
})