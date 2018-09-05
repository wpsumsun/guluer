<template>
	<div class="wrap">
		<div class="box">
			<g-row>
				<g-col class="col-12"></g-col>
				<g-col class="col-12"></g-col>
			</g-row>
			<g-row>
				<g-col class="col-8"></g-col>
				<g-col class="col-8"></g-col>
				<g-col class="col-8"></g-col>
			</g-row>
			<g-row>
				<g-col class="col-6"></g-col>
				<g-col class="col-6"></g-col>
				<g-col class="col-6"></g-col>
				<g-col class="col-6"></g-col>
			</g-row>
			<g-row>
				<g-col class="col-6"></g-col>
				<g-col class="col-12"></g-col>
				<g-col class="col-6"></g-col>
			</g-row>
			<pre><code>{{ code1 }}</code></pre>
		</div>
		<div class="box gutter-box">
			<g-row gutter="12">
				<g-col class="col-6"><div class="content"></div></g-col>
				<g-col class="col-12"><div class="content"></div></g-col>
				<g-col class="col-6"><div class="content"></div></g-col>
			</g-row>
			<pre><code>{{ code2 }}</code></pre>
		</div>
		<div class="box">
			<g-row gutter="12">
				<g-col class="col-6"><div class="content"></div></g-col>
				<g-col class="col-12"><div class="content"></div></g-col>
				<g-col class="col-6"><div class="content"></div></g-col>
			</g-row>
			<pre><code>{{ code2 }}</code></pre>
		</div>
		<div class="box gutter-box">
			<g-row>
				<g-col class="col-6"><div class="content"></div></g-col>
				<g-col class="col-8" offset="4"><div class="content"></div></g-col>
				<g-col class="col-6"><div class="content"></div></g-col>
			</g-row>
			<pre><code>{{ code3 }}</code></pre>
		</div>
		<div class="box">
			<g-row>
				<g-col class="col-24" :ipad="{ span: 12 }" :pc="{ span: 6 }"></g-col>
				<g-col class="col-24" :ipad="{ span: 12 }" :pc="{ span: 6 }"></g-col>
				<g-col class="col-24" :ipad="{ span: 12 }" :pc="{ span: 6 }"></g-col>
				<g-col class="col-24" :ipad="{ span: 12 }" :pc="{ span: 6 }"></g-col>
			</g-row>
			<pre><code>{{ code4 }}</code></pre>
		</div>
	</div>
</template>

<script>
  import Row from '../../../src/grid/row'
  import Col from '../../../src/grid/col'
  export default {
    name: 'button-demo',
    components: {
      'g-row': Row,
      'g-col': Col
    },
    data() {
      return {
        code1: `  <g-row>
				   <g-col class="col-12"></g-col>
				   <g-col class="col-12"></g-col>
			</g-row>
			<g-row>
				<g-col class="col-8"></g-col>
				<g-col class="col-8"></g-col>
				<g-col class="col-8"></g-col>
			</g-row>
			<g-row>
				<g-col class="col-6"></g-col>
				<g-col class="col-6"></g-col>
				<g-col class="col-6"></g-col>
				<g-col class="col-6"></g-col>
			</g-row>
			<g-row>
				<g-col class="col-6"></g-col>
				<g-col class="col-12"></g-col>
				<g-col class="col-6"></g-col>
			</g-row>
					`.replace(/\t+| +/g, ' '),
        code2: `<g-row gutter="24">
				<g-col class="col-6"></g-col>
				<g-col class="col-12"></g-col>
				<g-col class="col-6"></g-col>
			</g-row>
					`.replace(/\t+| +/g, ' '),
        code3: `<g-row gutter="24">
				<g-col class="col-6"></g-col>
				<g-col class="col-8" offset="4"></g-col>
				<g-col class="col-6"></g-col>
			</g-row>
					`.replace(/\t+| +/g, ' '),
        code4: `<g-row>
				<g-col class="col-24" :ipad="{ span: 12 }" :pc="{ span: 6 }"></g-col>
				<g-col class="col-24" :ipad="{ span: 12 }" :pc="{ span: 6 }"></g-col>
				<g-col class="col-24" :ipad="{ span: 12 }" :pc="{ span: 6 }"></g-col>
				<g-col class="col-24" :ipad="{ span: 12 }" :pc="{ span: 6 }"></g-col>
			</g-row>
					`.replace(/\t+| +/g, ' ')
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
			margin: 15px 0 0 0;
		}
		.row {
			height: 50px;
			margin-top: 15px;
			.col {
				&:nth-child(odd) {
					background: rgba(0, 160, 233, 0.7);
				}
				&:nth-child(even) {
					background: #00a0e9;
				}
			}
		}
		.gutter-box {
			.col {
				background: #fff !important;
			}
			.content {
				width: 100%;
				height: 100%;
				padding: 0;
				&:nth-child(odd) {
					background: rgba(0, 160, 233, 0.7);
				}
				&:nth-child(even) {
					background: #00a0e9;
				}
			}
		}
	}
</style>