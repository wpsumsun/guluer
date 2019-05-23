---
title: Toast
---
# 提示

<ClientOnly>
<toast-demo></toast-demo>
</ClientOnly>

```
<span class="button" @click="showToast('top')">上面</span>
<span class="button" @click="showToast('middle')">中间</span>
<span class="button" @click="showToast('bottom')">下面</span>

showToast(position) {
    this.$toast('独钓寒江雪', {
      position
    })
}
```


| 参数        | 说明           | 类型  |  可选值  | 默认值 |
| ------------- |:-------------:| -----:|-----:|-----:|
| closeButton      | 关闭按钮设置 | Object |   | `{text: '关闭',callback(toast) {toast.close()}}`|
| enableHtml      | 是否支持html      |   Boolean |   |  false |
| position | 出现位置      |    String |  `top, middle, bottom` | top |

