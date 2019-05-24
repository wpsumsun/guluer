---
title: Cascader
---
### 级联选择

基本用法<br>
<g-cascader
	:options.sync="options"
	:selected="selected"
	v-on:update:selected="updateSelected">
</g-cascader>

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
```
<script>
export default {
  data() {
    return {
      value: 50,
      selected: [],
      options: [
	      {
	        value: 'shagnhai',
		      label: '上海',
		      children: [
			      { value: 'xuhui', label: '徐汇', children: [{ value: 'where', label: '我在哪' }] },
			      { value: 'putuo', label: '普陀' },
			      { value: 'pudong', label: '浦东' },
			      { value: 'chongming', label: '崇明' }
		      ]
	      },
        {
          value: 'beijing',
          label: '北京',
          children: [
            { value: 'chaoyang', label: '朝阳', children: [{ value: 'where', label: '目的地' }] },
            { value: 'tongzhou', label: '通州' },
            { value: 'dongcheng', label: '东城' }
          ]
        },
      ],
      selected2: '2',
      selected3: '1',
      selected4: '1'
    }
  },
	methods: {
    updateSelected(selected) {
      this.selected = selected
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

