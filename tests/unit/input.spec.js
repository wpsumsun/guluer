import chai, { expect } from "chai";
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from "@vue/test-utils";
import Input from '@/input.vue';


describe('Input', () => {

  it('存在.', () => {
    expect(Input).to.exist
  })


  describe('props', () => {

    it('接收 value', () => {
      const wrapper = mount(Input, {
        propsData: {
          value: '1234'
        }
      })
      const inputElement = wrapper.find('input').element
      expect(inputElement.value).to.equal('1234')
    })

    it('接收 disabled', () => {
      const wrapper = mount(Input, {
        propsData: {
          disabled: true
        }
      })
      const inputElement = wrapper.find('input').element
      expect(inputElement.disabled).to.equal(true)
    })

    it('接收 readonly', () => {
      const wrapper = mount(Input, {
        propsData: {
          readonly: true
        }
      })
      const inputElement = wrapper.find('input').element
      expect(inputElement.readOnly).to.equal(true)
    })

    it('接收 error', () => {
      const wrapper = mount(Input, {
        propsData: {
          error: '你错了'
        }
      })
      const useElement = wrapper.find('use')
      expect(useElement.attributes().href).to.equal('#i-error')
      const errorMessage = wrapper.find('.errorMessage')
      expect(errorMessage.text()).to.equal('你错了')
    })
  })

  describe('事件', () => {
    it('支持 change/input/focus/blur 事件', () => {
      ['change', 'input', 'focus', 'blur']
          .forEach((eventName) => {
            const wrapper = mount(Input)
            const callback = sinon.fake();
            wrapper.vm.$on(eventName, callback)
            let event = new Event(eventName);
            Object.defineProperty(
                event, 'target', {
                  value: {value: 'hi'}, enumerable: true
                }
            )
            let inputElement = wrapper.find('input').element
            inputElement.dispatchEvent(event)
            expect(callback.calledWith('hi')).to.be.ok
          })
    })
  })
})