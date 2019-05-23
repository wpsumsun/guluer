---
title: Toast
---
# 提示

<g-button class="button" @click="showToast('top')">上面</g-button>
<g-button class="button" @click="showToast('middle')">中间</g-button>
<g-button class="button" @click="showToast('bottom')">下面</g-button>
```
<g-button class="button" @click="showToast('top')">上面</g-button>
<g-button class="button" @click="showToast('middle')">中间</g-button>
<g-button class="button" @click="showToast('bottom')">下面</g-button>

showToast(position) {
    this.$toast('独钓寒江雪', {
      position
    })
}
```

<script>
export default {
  methods: {
      showToast(position) {
          this.$toast('独钓寒江雪', {
            position
          })
      }
  }
}
</script>
| 参数        | 说明           | 类型  |  可选值  | 默认值 |
| ------------- |:-------------:| -----:|-----:|-----:|
| closeButton      | 关闭按钮设置 | Object |   | `{text: '关闭',callback(toast) {toast.close()}}`|
| enableHtml      | 是否支持html      |   Boolean |   |  false |
| position | 出现位置      |    String |  `top, middle, bottom` | top |

