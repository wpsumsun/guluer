import chai, { expect } from "chai";
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from "@vue/test-utils";
import Popover from '@/popover/popover.vue';

describe('Popover', () => {
   it('存在.', () => {
       expect(Popover).to.be.ok
   })

   it('接受 position', () => {
     const wrapper = mount(Popover, {
       slots: {
         default: '<button>click me</button>',
         content: '内容啊',
       },
       propsData: {
         position: 'bottom'
       }
     })
     wrapper.find('button').trigger('click')
     expect(wrapper.find('.content-wrapper').classes()).contains('bottom')
   })

 it('接受 trigger', () => {
   const wrapper = mount(Popover, {
     slots: {
       default: '<button>click me</button>',
       content: '<div>内容啊</div>',
     },
     propsData: {
       position: 'bottom',
       trigger: 'hover'
     }
   })
   expect(wrapper.find('.content-wrapper').element).to.not.exist
   wrapper.find('.popover').trigger('mouseenter')
   expect(wrapper.find('.content-wrapper').element).to.exist
 })
})