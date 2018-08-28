import chai, { expect } from "chai";
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from "@vue/test-utils";
import Col from '@/col.vue'
import Row from '@/row.vue'

chai.use(sinonChai);

describe('Col', () => {
  it('存在', () => {
    expect(Col).to.be.ok
  })

  it('接收 span 属性', () => {
    const wrapper = mount(Col, {
      propsData: {
        span: '1',
      }
    })
    expect(wrapper.classes()).contains('col-1')
  })

  it('接收 offset 属性', () => {
    const wrapper = mount(Col, {
      propsData: {
        offset: '3',
      }
    })
    expect(wrapper.classes()).contains('offset-3')
  })
  it('接收 ipad 属性', () => {
    const wrapper = mount(Col, {
      propsData: {
        ipad: { span: 1, offset: 2 },
      }
    })
    expect(wrapper.classes()).contains('col-ipad-1')
    expect(wrapper.classes()).contains('offset-ipad-2')
  })
  it('接收 narrow-pc 属性', () => {
    const wrapper = mount(Col, {
      propsData: {
        narrowPc: { span: 1, offset: 2 },
      }
    })
    expect(wrapper.classes()).contains('col-narrowPc-1')
    expect(wrapper.classes()).contains('col-narrowPc-1')
  })
  it('接收 pc 属性', () => {
    const wrapper = mount(Col, {
      propsData: {
        pc: { span: 1, offset: 2 },
      }
    })
    expect(wrapper.classes()).contains('col-pc-1')
    expect(wrapper.classes()).contains('offset-pc-2')
  })
  it('接收 wide-pc 属性', () => {
    const wrapper = mount(Col, {
      propsData: {
        widePc: { span: 1, offset: 2 },
      }
    })
    expect(wrapper.classes()).contains('col-widePc-1')
    expect(wrapper.classes()).contains('offset-widePc-2')
  })
})