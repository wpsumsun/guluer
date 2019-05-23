<template>
	<div>
		<g-input v-model="value"/> {{ value }}
		<g-input class="text" v-model="value" disabled/>
		<g-input class="text" v-model="value" readonly/>
		<g-input class="text" v-model="value" error="出错了"/>
		<g-input class="text" v-model="value" tips="我是提示呀"/>
		<pre><code>{{ code }}</code></pre>
	</div>
</template>

<script>
	import Input from '../../../src/input/input'
	export default {
	  name: 'input-demo',
		components: {
	    'g-input': Input
		},
		data() {
	    return {
				value: '双向绑定',
		    code: ` <g-input v-model="value"/> {{ value }}
				<g-input v-model="value" disabled/>
				<g-input v-model="value" readonly/>
				<g-input v-model="value" error="出错了"/>
				<g-input v-model="value" tips="我是提示呀"/>
		    `.replace(/\t+| +/g, ' ')
	    }
		},
	}
</script>

<style lang="scss" scoped>
	.text {
		display: flex;
		margin-top: 15px;
	}
</style>