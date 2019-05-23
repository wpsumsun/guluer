---
title: grid
---
### 网格布局

这里必须加一行文字才能让第一个组件正常显示？Are you kidding me ？
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
```
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
```
同样情况
<g-row gutter="12">
    <g-col class="col-6"><div class="content"></div></g-col>
    <g-col class="col-12"><div class="content"></div></g-col>
    <g-col class="col-6"><div class="content"></div></g-col>
</g-row>
```
<g-row gutter="12">
    <g-col class="col-6"><div class="content"></div></g-col>
    <g-col class="col-12"><div class="content"></div></g-col>
    <g-col class="col-6"><div class="content"></div></g-col>
</g-row>
```
嚯嚯
<g-row gutter="12">
    <g-col class="col-6"><div class="content"></div></g-col>
    <g-col class="col-12"><div class="content"></div></g-col>
    <g-col class="col-6"><div class="content"></div></g-col>
</g-row>
```
<g-row gutter="12">
    <g-col class="col-6"><div class="content"></div></g-col>
    <g-col class="col-12"><div class="content"></div></g-col>
    <g-col class="col-6"><div class="content"></div></g-col>
</g-row>
```
等哥哥找出原因来
<g-row>
    <g-col class="col-6"><div class="content"></div></g-col>
    <g-col class="col-8" offset="4"><div class="content"></div></g-col>
    <g-col class="col-6"><div class="content"></div></g-col>
</g-row>
```
<g-row>
    <g-col class="col-6"><div class="content"></div></g-col>
    <g-col class="col-8" offset="4"><div class="content"></div></g-col>
    <g-col class="col-6"><div class="content"></div></g-col>
</g-row>
```
~~~~(>_<)~~~~
<g-row>
    <g-col class="col-24" :ipad="{ span: 12 }" :pc="{ span: 6 }"></g-col>
    <g-col class="col-24" :ipad="{ span: 12 }" :pc="{ span: 6 }"></g-col>
    <g-col class="col-24" :ipad="{ span: 12 }" :pc="{ span: 6 }"></g-col>
    <g-col class="col-24" :ipad="{ span: 12 }" :pc="{ span: 6 }"></g-col>
</g-row>
```
<g-row>
    <g-col class="col-24" :ipad="{ span: 12 }" :pc="{ span: 6 }"></g-col>
    <g-col class="col-24" :ipad="{ span: 12 }" :pc="{ span: 6 }"></g-col>
    <g-col class="col-24" :ipad="{ span: 12 }" :pc="{ span: 6 }"></g-col>
    <g-col class="col-24" :ipad="{ span: 12 }" :pc="{ span: 6 }"></g-col>
</g-row>
```


<style lang="scss" scoped>
	* {
		box-sizing: border-box;
	}
	.guluer-row {
        height: 50px;
        margin-top: 15px;
        .guluer-col {
            &:nth-child(odd) {
                background: rgba(0, 160, 233, 0.7);
            }
            &:nth-child(even) {
                background: #00a0e9;
            }
        }
    }
    .gutter-box {
        .guluer-col {
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
</style>
