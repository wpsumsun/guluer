---
title: Progress
---
### 进度条
`一开始只是图片上传需要进度条，简单的写了下，后续还要扩展`

普通用法
<g-progress :percentage="value"></g-progress>
```
<g-progress :percentage="value"></g-progress>
```
修改进度条颜色
<g-progress :percentage="30" color="red"></g-progress>
```
<g-progress :percentage="30" color="red"></g-progress>
```

修改进度条宽度
<g-progress :percentage="30" :strokeWidth="12"></g-progress>
```
<g-progress :percentage="30" :strokeWidth="12"></g-progress>
```
不显示进度值
<g-progress :percentage="30" :showText="false"></g-progress>
```
<g-progress :percentage="30" :showText="false"></g-progress>
```


| 参数        | 说明           | 类型  |  可选值  | 默认值 |
| ------------- |:-------------:| -----:|-----:|-----:|
| percentage      | 当前进度 | Number |   | 0~100 |    |
| color      | 进度条颜色      |   String | 颜色值即可  |  #409eff |
| strokeWidth      | 进度条宽度      |   Number |   |  6 |
| showText | 显示进度值  |  Boolean |   | true |
<script>
export default {
  data() {
    return {
      value: 50
    }
  }
}
</script>
<style lang="scss" scoped>
	.text {
		display: flex;
		margin-top: 15px;
	}
</style>

