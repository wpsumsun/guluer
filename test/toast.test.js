const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/toast.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在', () => {
    expect(Toast).to.exist
  })
  describe('props', () => {

    it('接收 autoClose', (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: true,
          duration: 1,
        }
      }).$mount(div)
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.equal(false)
        done()
      })
    })

    it('接收 closeButton', () => {
      const Constructor = Vue.extend(Toast)
      const callback = sinon.fake()
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: '啊哈',
            callback
          }
        }
      }).$mount()
      const closeButton = vm.$el.querySelector('.close')
      expect(closeButton.innerHTML.trim()).to.equal('啊哈')
      closeButton.click()
      expect(callback).to.have.been.called
    })

    it('接收 enableHtml', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          enableHtml: true
        }
      })
      vm.$slots.default = ['<strong id="test">test</strong>>']
      vm.$mount()
      const strong = vm.$el.querySelector('#test')
      expect(strong).to.exist
    })

    it('接收 position', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'middle'
        }
      }).$mount()
      expect(vm.$el.classList.contains('middle')).to.eq(true)
    })

  })
})