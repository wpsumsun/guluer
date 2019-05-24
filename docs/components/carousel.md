---
title: Carousel
---
### 轮播图

基本用法
<div class="box">
	<g-carousel :selected.sync="selected" class="carousel">
		<g-carousel-item name="1">
			<div>1</div>
		</g-carousel-item>
		<g-carousel-item name="2">
			<div>2</div>
		</g-carousel-item>
		<g-carousel-item name="3">
			<div>3</div>
		</g-carousel-item>
	</g-carousel>
</div>
```
<g-carousel :selected.sync="selected" class="carousel">
	<g-carousel-item name="1">
		<div>1</div>
	</g-carousel-item>
	<g-carousel-item name="2">
		<div>2</div>
	</g-carousel-item>
	<g-carousel-item name="3">
		<div>3</div>
	</g-carousel-item>
</g-carousel>

export default {
	data() {
		return {
			selected: '1'
		}
	}
}
```
禁止自动播放
<div class="box">
	<g-carousel
		:selected.sync="selected2"
		:auto-play="false"
		class="carousel">
		<g-carousel-item name="1">
			<div>1</div>
		</g-carousel-item>
		<g-carousel-item name="2">
			<div>2</div>
		</g-carousel-item>
		<g-carousel-item name="3">
			<div>3</div>
		</g-carousel-item>
	</g-carousel>
</div>
```
<g-carousel
	:selected.sync="selected2"
	:auto-play="false"
	class="carousel">
	<g-carousel-item name="1">
		<div>1</div>
	</g-carousel-item>
	<g-carousel-item name="2">
		<div>2</div>
	</g-carousel-item>
	<g-carousel-item name="3">
		<div>3</div>
	</g-carousel-item>
</g-carousel>
export default {
	data() {
		return {
			selected2: '2'
		}
	}
}
```
轮播时间间隔
<div class="box">
	<g-carousel
		:selected.sync="selected3"
		:duration="4"
		class="carousel">
		<g-carousel-item name="1">
			<div>1</div>
		</g-carousel-item>
		<g-carousel-item name="2">
			<div>2</div>
		</g-carousel-item>
		<g-carousel-item name="3">
			<div>3</div>
		</g-carousel-item>
	</g-carousel>
</div>
```
<g-carousel
	:selected.sync="selected3"
	:duration="4"
	class="carousel">
	<g-carousel-item name="1">
		<div>1</div>
	</g-carousel-item>
	<g-carousel-item name="2">
		<div>2</div>
	</g-carousel-item>
	<g-carousel-item name="3">
		<div>3</div>
	</g-carousel-item>
</g-carousel>
```
箭头出现方式
<div class="box">
	<g-carousel
		:selected.sync="selected4"
		arrow="hover"
		class="carousel">
		<g-carousel-item name="1">
			<div>1</div>
		</g-carousel-item>
		<g-carousel-item name="2">
			<div>2</div>
		</g-carousel-item>
		<g-carousel-item name="3">
			<div>3</div>
		</g-carousel-item>
	</g-carousel>
</div>

```
<g-progress :percentage="30" :showText="false"></g-progress>
```


| 参数        | 说明           | 类型  |  可选值  | 默认值 |
| ------------- |:-------------:| -----:|-----:|-----:|
| selected      | 当前显示页面 | String |   |  |    |
| autoPlay      | 自动播放      |   Boolean |   |  true |
| duration      | 轮播时间间隔      |   Number， String |   |  5 |
| arrow | 箭头出现方式  |  always, never, hover |   | always |
<script>
export default {
  data() {
    return {
      value: 50,
      selected: '1',
      selected2: '2',
      selected3: '1',
      selected4: '1'
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

