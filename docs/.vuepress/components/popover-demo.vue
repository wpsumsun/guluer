<template>
	<div class="wrap">
		<div class="box">
			<g-popover>
				<template slot="content">风雪夜归人</template>
				<span class="button">上面</span>
			</g-popover>
			<g-popover position="bottom">
				<template slot="content">风雪夜归人</template>
				<span class="button">上面</span>
			</g-popover>
			<g-popover position="right">
				<template slot="content">风雪夜归人</template>
				<span class="button">上面</span>
			</g-popover>
			<g-popover position="left">
				<template slot="content">风雪夜归人</template>
				<span class="button">上面</span>
			</g-popover>
			<g-popover trigger="hover">
				<template slot="content">风雪夜归人</template>
				<span class="button">上面</span>
			</g-popover>
			<g-popover position="bottom" trigger="hover">
				<template slot="content">风雪夜归人</template>
				<span class="button">上面</span>
			</g-popover>
			<g-popover position="right" trigger="hover">
				<template slot="content">风雪夜归人</template>
				<span class="button">上面</span>
			</g-popover>
			<g-popover position="left" trigger="hover">
				<template slot="content">风雪夜归人</template>
				<span class="button">上面</span>
			</g-popover>
			<pre><code>{{ code1 }}</code></pre>
		</div>
	</div>
</template>

<script>
  import Popover from '../../../src/popover/popover'
  export default {
    name: 'button-demo',
    components: {
      'g-popover': Popover,
    },
    data() {
      return {
        code1: `<g-popover>
				<template slot="content">风雪夜归人</template>
				<span class="button">上面</span>
			</g-popover>
			<g-popover position="bottom">
				<template slot="content">风雪夜归人</template>
				<span class="button">上面</span>
			</g-popover>
			<g-popover position="right">
				<template slot="content">风雪夜归人</template>
				<span class="button">上面</span>
			</g-popover>
			<g-popover position="left">
				<template slot="content">风雪夜归人</template>
				<span class="button">上面</span>
			</g-popover>
			<g-popover trigger="hover">
				<template slot="content">风雪夜归人</template>
				<span class="button">上面</span>
			</g-popover>
			<g-popover position="bottom" trigger="hover">
				<template slot="content">风雪夜归人</template>
				<span class="button">上面</span>
			</g-popover>
			<g-popover position="right" trigger="hover">
				<template slot="content">风雪夜归人</template>
				<span class="button">上面</span>
			</g-popover>
			<g-popover position="left" trigger="hover">
				<template slot="content">风雪夜归人</template>
				<span class="button">上面</span>
			</g-popover>
					`.replace(/\t+| +/g, ' '),
      }
    }
  }
</script>

<style lang="scss" scoped>
	* {
		box-sizing: border-box;
	}
	.wrap {
		.box {
			.button {
				display: inline-block;
				padding: 0 1.5em;
				height: 36px;
				line-height: 36px;
				cursor: pointer;
				border: 1px solid #999;
				border-radius: 4px;
			}
		}
	}
</style>