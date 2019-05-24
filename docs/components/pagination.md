---
title: Pagination
---
### 分页

基本用法<br>

<div class="datepicker">
	<g-pagination
		:total="100"
		:current-page.sync="currentPage">
	</g-pagination>
</div>

```
<g-pagination
	:total="100"
	:current-page.sync="currentPage">
</g-pagination>
```

<script>
export default {
  data() {
    return {
      currentPage: 1
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
	table {
		margin: 0 !important;
	}
</style>

