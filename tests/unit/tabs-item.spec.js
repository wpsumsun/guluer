import chai, { expect } from "chai";
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from "@vue/test-utils";
import Tabs from '@/tabs'
import TabsHead from '@/tabs-head'
import TabsItem from '@/tabs-item'
import TabsBody from '@/tabs-body'
import TabsPane from '@/tabs-pane'

chai.use(sinonChai);

describe('TabsItem', () => {

  it('存在', () => {
    expect(TabsItem).to.exist
  })

  it('接收 name 属性', () => {
    const wrapper = mount(TabsItem, {
      propsData: {
        name: 'xxx'
      }
    })
    expect(wrapper.attributes()['data-name']).to.eq('xxx')
  })
  it('接收 disable 属性', () => {
    const wrapper = mount(TabsItem, {
      propsData: {
        disabled: true
      }
    })
    const vm = wrapper.vm
    expect(wrapper.classes()).contains(('disabled'))
    const callback = sinon.fake()
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.not.called
  })
})