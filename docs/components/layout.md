---
title: Layout
---
# 布局
三行布局
<g-layout>
    <g-header></g-header>
    <g-content></g-content>
    <g-footer></g-footer>
</g-layout>
```
<g-layout>
    <g-header></g-header>
    <g-content></g-content>
    <g-footer></g-footer>
</g-layout>
```
带侧边栏
<g-layout>
    <g-header></g-header>
    <g-layout>
        <g-sider></g-sider>
        <g-content></g-content>
    </g-layout>
    <g-footer></g-footer>
</g-layout>
```
<g-layout>
    <g-header></g-header>
    <g-layout>
        <g-sider></g-sider>
        <g-content></g-content>
    </g-layout>
    <g-footer></g-footer>
</g-layout>
```
侧边栏在右侧
<g-layout>
    <g-header></g-header>
    <g-layout>
        <g-content></g-content>
        <g-sider></g-sider>
    </g-layout>
    <g-footer></g-footer>
</g-layout>
```
<g-layout>
    <g-header></g-header>
    <g-layout>
        <g-content></g-content>
        <g-sider></g-sider>
    </g-layout>
    <g-footer></g-footer>
</g-layout>
```
左右两列布局
<g-layout>
    <g-sider></g-sider>
    <g-layout>
        <g-header></g-header>
        <g-content></g-content>
        <g-footer></g-footer>
    </g-layout>
</g-layout>
```
<g-layout>
    <g-sider></g-sider>
    <g-layout>
        <g-header></g-header>
        <g-content></g-content>
        <g-footer></g-footer>
    </g-layout>
</g-layout>
```


<style lang="scss" scoped>
.guluer-layout {
    height: 250px;
}
.guluer-layout-header,.guluer-layout-footer {
    background: #7dbcea;
    height: 50px;
}
.guluer-layout-content {
    background: rgba(16, 142, 233, 1);
    margin: 0;
    padding: 0;
}
.guluer-layout-sider {
    background: #3ba0e9;
    width: 100px;
}
</style>