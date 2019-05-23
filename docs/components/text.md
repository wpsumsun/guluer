---
title: Text
---
### 文本输入框

<g-input v-model="value"/> {{ value }}
<g-input class="text" v-model="value" disabled/>
<g-input class="text" v-model="value" readonly/>
<g-input class="text" v-model="value" error="出错了"/>
<g-input class="text" v-model="value" tips="我是提示呀"/>



<script>
export default {
  data() {
    return {
      value: '123'
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

