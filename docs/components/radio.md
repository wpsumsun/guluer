---
title: Radio
---
### 单选

当`label`与`value`值一致时会被选中<br>
<g-radio v-model="value1" label="北京">北京</g-radio>
<g-radio v-model="value1" label="上海">上海</g-radio>
```
<g-radio v-model="value1" label="北京">北京</g-radio>
<g-radio v-model="value1" label="上海">上海</g-radio>
```
禁用<br>
<g-radio v-model="value2" :label="false" disabled>禁用</g-radio>
```
<g-radio v-model="value2" label="北京" disabled>北京</g-radio>
```

`radio-group`使用<br>
<g-radio-group v-model="value3">
	<g-radio label="选项1">选项1</g-radio>
	<g-radio label="选项2">选项2</g-radio>
	<g-radio label="选项3">选项3</g-radio>
</g-radio-group>
```
<g-radio-group v-model="value3">
	<g-radio label="选项1">选项1</g-radio>
	<g-radio label="选项2">选项2</g-radio>
	<g-radio label="选项3">选项3</g-radio>
</g-radio-group>
```


| 参数        | 说明           | 类型  |  可选值  | 默认值 |
| ------------- |:-------------:| -----:|-----:|-----:|
| value      | `v-model`绑定的值 | Number, String, Boolean |   |  |    |
| label      | 与`v-model`绑定的值对应的值，一致时为选中状态      |   Number, String, Boolean |   |   |
| disabled      | 禁用      |   Boolean |   |  false |
| change | 状态改变触发  |  Function |   |  |
<script>
export default {
  data() {
    return {
      value1: '北京',
      value2: false,
      value3: '选项2'
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

