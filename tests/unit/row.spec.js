import chai, { expect } from "chai";
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from "@vue/test-utils";
import Row from '@/row.vue';
import Col from '@/col.vue';

describe('Row', () => {
  it('存在', () => {
    expect(Row).to.be.ok
  })

  xit('接收 gutter 属性', (done) => {
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
  xit('接收 align 属性', () => {
    const wrapper = mount(Row, {
      propsData: {
        align: 'center',
      },
      attachToDocument: true
    })
    console.log(wrapper.html());
    console.log(getComputedStyle(wrapper.vm.$el));
    expect(getComputedStyle(wrapper.vm.$el).justifyContent).to.equal('center')
  })
})