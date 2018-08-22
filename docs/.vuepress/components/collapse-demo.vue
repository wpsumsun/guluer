<template>
	<div class="wrap">
		<div class="box">
			<g-collapse :selected.sync="currentTab2">
				<g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
				<g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
				<g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
			</g-collapse>
			<pre><code>{{ code1 }}</code></pre>
		</div>
		<div class="box">
			<g-collapse :selected.sync="currentTab1" single>
				<g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
				<g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
				<g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
			</g-collapse>
			<pre><code>{{ code1 }}</code></pre>
		</div>
	</div>
</template>

<script>
  import Collapse from '../../../src/collapse'
  import CollapseItem from '../../../src/collapse-item'
  export default {
    name: 'button-demo',
    components: {
      'g-collapse': Collapse,
      'g-collapse-item': CollapseItem,
    },
    data() {
      return {
        currentTab: [1],
        currentTab2: [1, 2],
        code1: `<g-collapse :selected.sync="currentTab">
				<g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
				<g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
				<g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
			</g-collapse>
					`.replace(/\t+| +/g, ' '),
	      code1: `<g-collapse :selected.sync="currentTab" single>
				<g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
				<g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
				<g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
			</g-collapse>
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