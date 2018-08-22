<template>
	<div class="wrap">
		<div class="box">
			<g-layout>
				<g-header></g-header>
				<g-content></g-content>
				<g-footer></g-footer>
			</g-layout>
			<pre><code>{{ code1 }}</code></pre>
		</div>
		<div class="box">
			<g-layout>
				<g-header></g-header>
				<g-layout>
					<g-sider></g-sider>
					<g-content></g-content>
				</g-layout>
				<g-footer></g-footer>
			</g-layout>
			<pre><code>{{ code2 }}</code></pre>
		</div>
		<div class="box">
			<g-layout>
				<g-header></g-header>
				<g-layout>
					<g-content></g-content>
					<g-sider></g-sider>
				</g-layout>
				<g-footer></g-footer>
			</g-layout>
			<pre><code>{{ code3 }}</code></pre>
		</div>
		<div class="box">
			<g-layout>
				<g-sider></g-sider>
				<g-layout>
					<g-header></g-header>
					<g-content></g-content>
					<g-footer></g-footer>
				</g-layout>
			</g-layout>
			<pre><code>{{ code4 }}</code></pre>
		</div>
	</div>
</template>

<script>
  import Layout from '../../../src/layout'
  import Header from '../../../src/header'
  import Content from '../../../src/content'
  import Footer from '../../../src/footer'
  import Sider from '../../../src/sider'
  export default {
    name: 'button-demo',
    components: {
      'g-layout': Layout,
      'g-header': Header,
      'g-content': Content,
      'g-sider': Sider,
      'g-footer': Footer,
    },
    data() {
      return {
        code1: `<g-layout>
				<g-header></g-header>
				<g-content></g-content>
				<g-footer></g-footer>
			</g-layout>
					`.replace(/\t+| +/g, ' '),
        code2: `<g-layout>
				<g-header></g-header>
				<g-layout>
					<g-sider></g-sider>
					<g-content></g-content>
				</g-layout>
				<g-footer></g-footer>
			</g-layout>
					`.replace(/\t+| +/g, ' '),
	      code3: `<g-layout>
				<g-header></g-header>
				<g-layout>
					<g-content></g-content>
					<g-sider></g-sider>
				</g-layout>
				<g-footer></g-footer>
			</g-layout>
					`.replace(/\t+| +/g, ' '),
	      code4: `<g-layout>
				<g-sider></g-sider>
				<g-layout>
					<g-header></g-header>
					<g-content></g-content>
					<g-footer></g-footer>
				</g-layout>
			</g-layout>
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
			.layout {
				height: 250px;
			}
			margin-top: 20px;
			.header,.footer {
				background: #7dbcea;
				height: 50px;
			}
			.content {
				background: rgba(16, 142, 233, 1);
				margin: 0;
				padding: 0;
			}
			.sider {
				background: #3ba0e9;
				width: 100px;
			}
		}
	}
</style>