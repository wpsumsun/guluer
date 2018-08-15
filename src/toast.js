import Toast from './toast.vue'


let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = (message, toastOptions) => {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({ Vue, message, propsData: toastOptions })
    }
  }
}

function createToast({ Vue, message, propsData }) {
  const Constructor = Vue.extend(Toast)
  const toast = new Constructor({ propsData })
  toast.$slots.default = [message]
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}
