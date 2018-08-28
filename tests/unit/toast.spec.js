import chai, { expect } from "chai";
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from "@vue/test-utils";
import Toast from '@/toast.vue'

chai.use(sinonChai);

describe('Toast', () => {
  it('存在', () => {
    expect(Toast).to.exist
  })
  describe('props', () => {

    it('接收 autoClose', () => {
      const wrapper = mount(Toast, {
        propsData: {
          autoClose: true,
          duration: 1,
        },
        attachToDocument: true
      })
      const vm = wrapper.vm
      vm.$on('close', () => {
        expect(document.body.contains(wrapper.vm.$el)).to.equal(false)
      })
    })

    it('接收 closeButton', () => {
      const wrapper = mount(Toast, {
        propsData: {
          closeButton: {
            text: '啊哈',
          }
        }
      })
      const callback = sinon.fake()
      const closeButton = wrapper.find('.close')
      expect(closeButton.element.innerHTML.trim()).to.equal('啊哈')
      // on 不可以，只能使用 addEventListener
      closeButton.element.addEventListener('click', callback)
      closeButton.element.click()
      expect(callback).to.have.been.called
    })

    xit('接收 enableHtml', () => {
      const wrapper = mount(Toast, {
        propsData: {
          enableHtml: true
        },
      })
      // 存疑
      wrapper.vm.$slots.default = ['<strong id="tests">tests</strong>>']
      const strong = wrapper.find('#tests')
      expect(strong).to.exist
    })

    it('接收 position', () => {
      const wrapper = mount(Toast, {
        propsData: {
          position: 'middle'
        },
      })
      expect(wrapper.classes()).contains('middle')
    })

  })
})