import Toast from './toast.vue'


let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = (message, toastOptions) => {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        onClose() {
          currentToast = null
        },
      })
    }
  }
}

function createToast({ Vue, message, propsData, onClose }) {
  const Constructor = Vue.extend(Toast)
  const toast = new Constructor({ propsData })
  toast.$slots.default = [message]
  toast.$mount()
  document.body.appendChild(toast.$el)
  toast.$on('close', onClose)
  return toast
}
