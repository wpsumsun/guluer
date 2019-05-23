import Toast from './toast/toast.vue'


let currentToast
const eventHubs = []

function isBrowser() {
  return typeof document === 'object'
}

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

    Vue.directive('click-outside', {
      bind (el, binding) {
        eventHubs.push({ el, callback: binding.value })
      }
    })
  }
}

const onClickDocument = (e) => {
  eventHubs.forEach(item => {
    if (item.el.contains(e.target) || item.el === e.target) {
      return
    } else {
      item.callback()
    }
  })
}
isBrowser() && document.addEventListener('click', onClickDocument)


function createToast({ Vue, message, propsData, onClose }) {
  const Constructor = Vue.extend(Toast)
  const toast = new Constructor({ propsData })
  toast.$slots.default = [message]
  toast.$mount()
  isBrowser() && document.body.appendChild(toast.$el)
  toast.$on('close', onClose)
  return toast
}
