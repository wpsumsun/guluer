---
title: Datepicker
---
### 日期选择器

基本用法<br>
<div class="datepicker">
	<g-date-picker
		:value="value"
		v-on:input="value=$event">
	</g-date-picker>
</div>

```
<g-date-picker
	:value="value"
	v-on:input="value=$event">
</g-date-picker>
```
日期范围选择
<g-date-picker
	type="daterange"
	:value="value2"
	v-on:input="value2=$event">
</g-date-picker>
```
<g-date-picker
	:value="value"
	v-on:input="value=$event">
</g-date-picker>
```

<script>
export default {
  data() {
    return {
      value: new Date(2019, 4, 22),
      value2: [new Date(2019, 3, 11), new Date(2019, 5, 22)]
    }
  },
	methods: {
	}
}
</script>
<style lang="scss" scoped>
	* {
		box-sizing: border-box;
	}
	.box {
		margin: 50px;
		height: 300px;
	}
</style>
<style lang="scss">
	table {
		display: table;
		margin: 0;
		tbody {
			/*display: table !important;*/
		}
		th {
			padding: 0 !important;
		}
		td {
			border: none;
			background: #fff;
		}
		tr {
			border: none;
		}
	}
</style>

