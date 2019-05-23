---
title: Collapse
---
# 手风琴
可展开多项
<g-collapse :selected.sync="currentTab2">
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
```
<g-collapse :selected.sync="currentTab2">
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
```
只展开一项
<g-collapse :selected.sync="currentTab" single>
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
```
<g-collapse :selected.sync="currentTab">
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
```
```
export default {
    name: 'collapse-demo'
    data() {
      return {
        currentTab: [1],
        currentTab2: [1, 2]
      }
    }
}
```

<script>
export default {
    name: 'collapse-demo',
    data() {
      return {
        currentTab: [1],
        currentTab2: [1, 2]
      }
    }
}
</script>

