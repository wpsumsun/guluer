<template>
	<div class="wrap">
		<div class="box">
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
			<pre><code>{{ code1 }}</code></pre>
		</div>
	</div>
</template>

<script>
  import Tab from '../../../src/tab/tabs'
  import TabsHead from '../../../src/tab/tabs-head'
  import TabsBody from '../../../src/tab/tabs-body'
  import TabsItem from '../../../src/tab/tabs-item'
  import TabPane from '../../../src/tab/tabs-pane'
  export default {
    name: 'button-demo',
    components: {
      'g-tabs': Tab,
      'g-tabs-head': TabsHead,
      'g-tabs-pane': TabPane,
      'g-tabs-body': TabsBody,
      'g-tabs-item': TabsItem,
    },
    data() {
      return {
        current: 'male',
        code1: `<g-layout>
				<g-header></g-header>
				<g-content></g-content>
				<g-footer></g-footer>
			</g-layout>
					`.replace(/\t+| +/g, ' '),
      }
    },
    methods: {
      showToast(position) {
        this.$toast('独钓寒江雪', {
          position,
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
	* {
		box-sizing: border-box;
	}
	.wrap {
	}
</style>