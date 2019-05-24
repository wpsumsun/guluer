---
title: Switch
---
### Switch

基本用法<br>
<g-switch
	v-model="value1"
	v-on:change="print"
	inactive-value="按年付费"
	active-value="按月付费">
</g-switch>

```
<g-switch
	v-model="value1"
	v-on:change="print"
	inactive-value="按年付费"
	active-value="按月付费">
</g-switch>
```
自定义颜色<br>
<g-switch
	v-model="value2"
	v-on:change="print"
	activeColor="red"
	inactiveColor="green"
	inactive-value="按年付费"
	active-value="按月付费">
</g-switch>
```
<g-switch
	v-model="value2"
	v-on:change="print"
	activeColor="red"
	inactiveColor="green"
	inactive-value="按年付费"
	active-value="按月付费">
</g-switch>
```
禁用<br>
<g-switch
	v-model="value3"
	v-on:change="print"
	disabled
	inactive-value="按年付费"
	active-value="按月付费">
</g-switch>
```
<g-switch
	v-model="value3"
	v-on:change="print"
	disabled
	inactive-value="按年付费"
	active-value="按月付费">
</g-switch>
```

<script>
export default {
  data() {
    return {
      value1: true,
      value2: true,
      value3: true
    }
  },
	methods: {
    print(e) {
      console.log('sdf', e);
    },
    print2(e) {
      console.log('sdf22', e);
    }
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
	.carousel {
		&.guluer-carousel {
			.g-carousel-item {
				background: #364d79;
				color: #fff;
				font-size: 30px;
				display: flex;
				align-items: center;
				justify-content: center;
				font-weight: bold;
			}
		}
	}
</style>

