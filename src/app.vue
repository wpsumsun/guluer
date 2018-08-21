<template>
	<div id="app">
		<div class="box">
			<g-collapse :selected.sync="currentTab">
				<g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
				<g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
				<g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
			</g-collapse>
			{{ currentTab }}
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'app',
		data() {
	    return {
        currentTab: ['2', '3']
	    }
		},
	}
</script>