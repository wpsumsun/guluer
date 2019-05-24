---
title: Menu
---
### 菜单

基本用法<br>
<g-menu :selected.sync="selected">
	<g-menu-item name="home">首页</g-menu-item>
	<g-sub-menu name="about">
		<template slot="title">关于</template>
		<g-menu-item name="culture">文化</g-menu-item>
		<g-sub-menu name="connect">
			<template slot="title">联系方式</template>
			<g-sub-menu name="connect1">
				<template slot="title">微信</template>
				<g-menu-item name="wechat">1111</g-menu-item>
				<g-menu-item name="qq">2222</g-menu-item>
			</g-sub-menu>
			<g-menu-item name="qq">QQ</g-menu-item>
		</g-sub-menu>
		<g-menu-item name="culture2">文化2</g-menu-item>
	</g-sub-menu>
	<g-menu-item name="hire">招聘</g-menu-item>
</g-menu>
{{ selected }}
```
<g-menu :selected.sync="selected">
	<g-menu-item name="home">首页</g-menu-item>
	<g-sub-menu name="about">
		<template slot="title">关于</template>
		<g-menu-item name="culture">文化</g-menu-item>
		<g-sub-menu name="connect">
			<template slot="title">联系方式</template>
			<g-sub-menu name="connect1">
				<template slot="title">微信</template>
				<g-menu-item name="wechat">1111</g-menu-item>
				<g-menu-item name="qq">2222</g-menu-item>
			</g-sub-menu>
			<g-menu-item name="qq">QQ</g-menu-item>
		</g-sub-menu>
		<g-menu-item name="culture2">文化2</g-menu-item>
	</g-sub-menu>
	<g-menu-item name="hire">招聘</g-menu-item>
</g-menu>
```
竖直菜单<br>
<div class="box">
	<g-menu :selected.sync="selected2" vertical>
		<g-menu-item name="home">首页</g-menu-item>
		<g-sub-menu name="about">
			<template slot="title">关于</template>
			<g-menu-item name="culture">文化</g-menu-item>
			<g-sub-menu name="connect">
				<template slot="title">联系方式</template>
				<g-sub-menu name="connect1">
					<template slot="title">微信</template>
					<g-menu-item name="wechat">1111</g-menu-item>
					<g-menu-item name="qq">2222</g-menu-item>
				</g-sub-menu>
				<g-menu-item name="qq">QQ</g-menu-item>
			</g-sub-menu>
			<g-menu-item name="culture2">文化2</g-menu-item>
		</g-sub-menu>
		<g-menu-item name="hire">招聘</g-menu-item>
	</g-menu>
</div>
```
<g-menu :selected.sync="selected" vertical>
	<g-menu-item name="home">首页</g-menu-item>
	<g-sub-menu name="about">
		<template slot="title">关于</template>
		<g-menu-item name="culture">文化</g-menu-item>
		<g-sub-menu name="connect">
			<template slot="title">联系方式</template>
			<g-sub-menu name="connect1">
				<template slot="title">微信</template>
				<g-menu-item name="wechat">1111</g-menu-item>
				<g-menu-item name="qq">2222</g-menu-item>
			</g-sub-menu>
			<g-menu-item name="qq">QQ</g-menu-item>
		</g-sub-menu>
		<g-menu-item name="culture2">文化2</g-menu-item>
	</g-sub-menu>
	<g-menu-item name="hire">招聘</g-menu-item>
</g-menu>
```



<script>
export default {
  data() {
    return {
      selected: ['home'],
      selected2: ['home'],
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
</style>

