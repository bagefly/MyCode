<!-- TOC -->

- [1. CSS](#1-css)
    - [1.1. 种常见选择器](#11-种常见选择器)
    - [1.2. 书写位置](#12-书写位置)
    - [1.3. 常见css属性](#13-常见css属性)
- [js](#js)

<!-- /TOC -->
# 1. CSS
Cascading Style Sheets
层叠 样式 表

层叠： 属性会叠加，而且会覆盖

## 1.1. 种常见选择器

Tag < class < id

## 1.2. 书写位置

1. 内联、行内        html行内样式
2. 内部样式         文件内部样式
3. 外部样式         文件外部样式

**就近优先**

## 1.3. 常见css属性

    尺寸 width height

    边框 border

        border

        border-top border-right border-bottom border-left

        border-color border-style border-width

        默认 上 右 下 左
        当某个值缺失的时候，用对立方位作为值
        只有一个参数的时候，作为所有方向的值

        **展开写法，一定要写在缩写后面**

    颜色 background color

    位置 margin padding float position
        外边距  内边距   浮动

# js

var a; 声明变量
a = 1; 给变量赋值

document.getElementById("IDNAME"); 获取页面元素

onclick
ondblclick

onmouseover 鼠标进入元素 !
onmouseout  鼠标离开元素 ！

<!-- onmouseenter 鼠标进入元素 ！
onmouseleave 鼠标离开元素 ！ -->

onmousemove 鼠标移动 !

onmousedown 鼠标按下
onmouseup 鼠标松开
