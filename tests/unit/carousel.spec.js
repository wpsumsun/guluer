import chai, { expect } from "chai";
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from "@vue/test-utils";
import Carousel from '@/carousel.vue';
import CarouselItem from '@/carousel-item.vue';
import Vue from 'vue'
Vue.component('g-carousel-item', CarouselItem)

chai.use(sinonChai);
const tmp = `
        <g-carousel-item name="1">
					<div class="box1">1</div>
				</g-carousel-item>
				<g-carousel-item name="2">
					<div class="box2">2</div>
				</g-carousel-item>
				<g-carousel-item name="3">
					<div class="box2">3</div>
				</g-carousel-item>`

describe("Carousel", () => {

  it('存在', () => {
    expect(Carousel).to.exist
  })

  it('接收carouselItem， 默认展示第一个.', () => {
    const wrapper = mount(Carousel, {
      slots: {
        default: tmp,
      }
    })
    expect(wrapper.find('.box1').exists()).to.be.true
  })


  it('不传 selected 默认展示第一个', () => {
    const wrapper = mount(Carousel, {
      slots: {
        default: tmp,
      },
    })
    setTimeout(() => {
      expect(wrapper.findAll('.g-carousel-item').at(0).classes()).to.contains('active')
      expect(wrapper.findAll('.g-carousel-item').at(1).classes()).not.to.contains('active')
      expect(wrapper.findAll('.g-carousel-item').at(2).classes()).not.to.contains('active')
    })
  })

  it('根绝 selected 选中默认展示', (done) => {
    const wrapper = mount(Carousel, {
      slots: {
        default: tmp,
      },
      propsData: {
        selected: '3'
      }
    })
    setTimeout(() => {
      expect(wrapper.findAll('.g-carousel-item').at(2).classes()).to.contains('active')
      expect(wrapper.findAll('.g-carousel-item').at(0).classes()).not.to.contains('active')
      expect(wrapper.findAll('.g-carousel-item').at(1).classes()).not.to.contains('active')
      done()
    })
  })

  it('自动播放', (done) => {
    const callback = sinon.fake()
    const wrapper = mount(Carousel, {
      slots: {
        default: tmp,
      },
      propsData: {
        autoPlay: true,
        duration: 0.1,
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(() => {
      expect(callback).to.have.been.calledWith('2')
      done()
    }, 100)
  })

  it('点击上一张', (done) => {
    const callback = sinon.fake()
    const wrapper = mount(Carousel, {
      slots: {
        default: tmp,
      },
      propsData: {
        autoPlay: true,
        duration: 0.1,
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(() => {
      wrapper.find('.pre-btn').trigger('click')
      expect(callback).to.have.been.calledWith('3')
      done()
    })
  })

  it('点击下一张', (done) => {
    const callback = sinon.fake()
    const wrapper = mount(Carousel, {
      slots: {
        default: tmp,
      },
      propsData: {
        autoPlay: true,
        duration: 0.1,
        selected: '2',
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(() => {
      wrapper.find('.next-btn').trigger('click')
      expect(callback).to.have.been.calledWith('3')
      done()
    })
  })

});
