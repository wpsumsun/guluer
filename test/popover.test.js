 const expect = chai.expect;
 import Vue from 'vue'
 import Popover from '../src/popover'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Button', () => {
     it('存在.', () => {
         expect(Popover).to.be.ok
     })

     it('接受 position', (done) => {
       Vue.component('g-popover', Popover)
       const div = document.createElement('div')
       document.body.appendChild(div)
       div.innerHTML = `
         <g-popover position="bottom" ref="a">
           <template slot="content">内容啊</template>
           <button>click me</button>
         </g-popover>
       `
       const vm = new Vue({
         el: div,
       })
       vm.$nextTick(() => {
         vm.$el.querySelector('button').click()
         vm.$nextTick(() => {
           const { contentWrapper } = vm.$refs.a.$refs
           expect(contentWrapper.classList.contains('bottom')).to.eq(true)
           done()
         })
       })
     })

   it('接受 trigger', (done) => {
     Vue.component('g-popover', Popover)
     const div = document.createElement('div')
     document.body.appendChild(div)
     div.innerHTML = `
         <g-popover trigger="hover" ref="a">
           <template slot="content">内容啊</template>
           <button>click me</button>
         </g-popover>
       `
     const vm = new Vue({
       el: div,
     })
     vm.$nextTick(() => {
       const popover = vm.$refs.a.$el
       const event = new Event('mouseenter')
       popover.dispatchEvent(event)
       vm.$nextTick(() => {
         const { contentWrapper } = vm.$refs.a.$refs
         expect(contentWrapper).to.exist
         done()
       })
     })
   })
 })