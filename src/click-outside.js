const onClickDocument = (e) => {
  eventHubs.forEach(item => {
    if (item.el.contains(e.target) || item.el === e.target) {
      return
    } else {
      item.callback()
    }
  })
}

document.addEventListener('click', onClickDocument)

const eventHubs = []

export default {
  bind: function (el, binding) {
    eventHubs.push({ el, callback: binding.value })
  }
}