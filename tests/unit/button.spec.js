import chai, { expect } from "chai";
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from "@vue/test-utils";
import Button from '@/button/button.vue';

chai.use(sinonChai);

describe("button", () => {

  it('存在', () => {
    expect(Button).to.exist
  })

  it('可以设置icon.', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings'
      }
    })
    expect(wrapper.find('use').attributes().href).to.eq('#i-settings')
  })

  it('icon 默认的 order 是 1', () => {
    const wrapper = mount(Button, {
      attachToDocument: true,
      propsData: {
        icon: 'settings'
      }
    })

    const vm = wrapper.vm
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('1')
  })

  it('设置 iconPosition 可以改变 order', () => {
    const wrapper = mount(Button, {
      attachToDocument: true,
      propsData: {
        icon: 'settings',
        iconPosition: 'right'
      }
    })

    const vm = wrapper.vm
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('2')
  })

  it('点击 button 触发 click 事件', () => {
    const wrapper = mount(Button)
    const callback = sinon.fake();
    wrapper.vm.$on('click', callback)
    wrapper.vm.$el.click()
    expect(callback).to.have.been.called

  })

});
