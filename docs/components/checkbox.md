---
title: Checkbox
---
### 复选框

单独使用<br>
<g-checkbox v-model="value1" label="北京"></g-checkbox>
```
<g-checkbox v-model="value1" label="北京"></g-checkbox>
```
禁用<br>
<g-checkbox v-model="value1" label="禁用" disabled></g-checkbox>
```
<g-checkbox v-model="value1" label="禁用" disabled></g-checkbox>
```

`checkbox-group`使用<br>
<g-checkbox-group v-model="value3" v-on:change="handleChange">
	<g-checkbox label="选项1"></g-checkbox>
	<g-checkbox label="选项2"></g-checkbox>
	<g-checkbox label="选项3"></g-checkbox>
</g-checkbox-group>
```
<g-checkbox-group v-model="value3" @change="handleChange">
	<g-checkbox label="选项1"></g-checkbox>
	<g-checkbox label="选项2"></g-checkbox>
	<g-checkbox label="选项3"></g-checkbox>
</g-checkbox-group>
```

<script>
export default {
  data() {
    return {
      value1: '北京',
      value2: false,
      value3: ['选项2']
    }
  },
	methods: {
    handleChange() {
      console.log(this.value3)
    },
	}
}
</script>
<style lang="scss" scoped>
	.text {
		display: flex;
		margin-top: 15px;
	}
</style>

