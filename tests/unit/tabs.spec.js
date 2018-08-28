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


describe('Tabs', () => {
  it('存在', () => {
    expect(Tabs).to.exist
  })

  xit('接收 selected 属性', () => {
    Vue.component('g-tabs', Tabs)
    Vue.component('g-tabs-head', TabsHead)
    Vue.component('g-tabs-item', TabsItem)
    Vue.component('g-tabs-body', TabsBody)
    Vue.component('g-tabs-pane', TabsPane)
    const div = document.createElement('div')
    div.innerHTML = `
      <g-tabs selected="middle">
        <g-tabs-head>
          <g-tabs-item name="left">左</g-tabs-item>
          <g-tabs-item name="middle">中</g-tabs-item>
          <g-tabs-item name="right">右</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="left">左手</g-tabs-pane>
          <g-tabs-pane name="middle">中间</g-tabs-pane>
          <g-tabs-pane name="right">右手</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    `
    let vm = new Vue({
      el: div,
    })
    vm.$nextTick(() => {
      const current = vm.$el.querySelector('.tabs-item[data-name="middle"]')
      expect(current.classList.contains('active')).to.eq(true)
    })
  })
})