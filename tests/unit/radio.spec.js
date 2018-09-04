import chai, { expect } from "chai";
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from "@vue/test-utils";
import Radio from '@/radio.vue';
import Vue from 'vue'

chai.use(sinonChai);

describe("Radio", () => {

  it('存在', () => {
    expect(Radio).to.exist
  })

  it('根据 value 判断是否选中', () => {
    const wrapper = mount(Radio, {
      propsData: {
        value: '1',
        label: '1',
      },
      slot: {
        default: 'radio'
      }
    })
    expect(wrapper.classes()).to.contains('active')
  })

  it('触发 change 事件', () => {
    const callback = sinon.fake()
    const wrapper = mount(Radio, {
      propsData: {
        value: '',
        label: '1',
      },
      slot: {
        default: 'radio'
      },
      listeners: {
        change: callback
      }
    })
    wrapper.find('input').trigger('change')
    expect(callback).to.have.been.calledWith(wrapper.props().label)
  })

  it('触发 input 事件改变 value', () => {
    // v-model
    const wrapper = mount({
      data () {
        return {
          radio: '',
        }
      },
      template: '<div> <g-radio v-model="radio" label="xx"></g-radio> </div>',
      components: { 'g-radio': Radio }
    })
    const input = wrapper.find('input');
    input.setChecked()
    expect(wrapper.vm.radio).to.eq('xx');
  })

  it('接受 disabled', () => {
    const callback = sinon.fake()
    const wrapper  = mount(Radio, {
      propsData: {
        disabled: true
      },
      listeners: {
        change: callback
      }
    })

    wrapper.find('input').trigger('change')
    expect(callback).to.have.been.not.called
  })

});
