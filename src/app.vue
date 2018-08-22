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
		<g-tabs :selected.sync="current">
			<g-tabs-head>
				<g-tabs-item name="male">male</g-tabs-item>
				<g-tabs-item name="female">female</g-tabs-item>
			</g-tabs-head>
			<g-tabs-body>
				<g-tabs-pane name="male">male content</g-tabs-pane>
				<g-tabs-pane name="female">female content</g-tabs-pane>
			</g-tabs-body>
		</g-tabs>
	</div>
</template>

<script>
	export default {
	  name: 'app',
		data() {
	    return {
        currentTab: ['2', '3'],
        current: 'male'
	    }
		},
	}
</script>