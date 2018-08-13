import Toast from './toast.vue'

export default {
  install(Vue, options) {
    Vue.prototype.$toast = (message) => {
      const Constructor = Vue.extend(Toast)
      const toast = new Constructor()
      console.log('toast', toast)
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}