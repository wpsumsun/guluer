---
title: Tab
---
### 标签页
`Vuepress`下存在样式问题，稍后解决
123
<g-tabs :selected.sync="current">
    <g-tabs-head>
        <g-tabs-item name="male">male</g-tabs-item>
        <g-tabs-item name="female">female</g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
        <g-tabs-pane name="male">male content</g-tabs-pane>
        <g-tabs-pane name="female">female content</g-tabs-pane>
    </g-tabs-body>
</g-tabs>

<script>
export default {
  data() {
    return {
      current: 'male'
    }
  }
}
</script>


