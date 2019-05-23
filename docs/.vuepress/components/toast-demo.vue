<template>
	<div class="wrap">
		<div class="box">
			<span class="button" @click="showToast('top')">上面</span>
			<span class="button" @click="showToast('middle')">中间</span>
			<span class="button" @click="showToast('bottom')">下面</span>
			<pre><code>{{ code1 }}</code></pre>
		</div>
	</div>
</template>

<script>
  import Toast from '../../../src/toast/toast.vue'
  export default {
    name: 'button-demo',
    components: {
      'g-toast': Toast,
    },
    data() {
      return {
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
          position
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