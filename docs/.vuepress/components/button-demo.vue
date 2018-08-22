<template>
	<div>
		<g-button>默认</g-button>
		<g-button icon="settings">带有icon</g-button>
		<g-button icon="settings" iconPosition="right">选择icon位置</g-button>
		<g-button loading>带有loading</g-button>
		<g-button disable>禁用</g-button>
		<pre><code>{{ code }}</code></pre>
	</div>
</template>

<script>
	import Button from '../../../src/button'
  import ButtonGroup from '../../../src/button-group'
	export default {
	  name: 'button-demo',
		components: {
	    'g-button': Button,
			'g-button-group': ButtonGroup
		},
		data() {
	    return {
	      code: `  <g-button>默认</g-button>
					<g-button icon="settings">带有icon</g-button>
					<g-button icon="settings" iconPosition="right">选择icon位置</g-button>
					<g-button loading>带有loading</g-button>
					<g-button disable>禁用</g-button>
					`.replace(/\t+| +/g, ' ')
	    }
		}
	}
</script>