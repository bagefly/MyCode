
# 1. 回顾前面知识点

* 标题标签&lt;h1> 默认是有外边距，特殊情况下要清除


* 段落标签

    &lt;p> 默认不换行

* 转义字符，相当于文字，可以按照font设置

* 锚点的设置
    a标签做锚点，name属性做标记
    任何标签做锚点，设置id属性做标记

* form表单input中list属性，结合datalist和option


# 2. float 浮动及其清除

* 默认状态下，浮动的元素撑不开其父元素

* 浮动的元素不占据原来的空间，相似于浮在原有空间的上层

* 浮动元素后方不要直接跟非浮动元素

* 浮动元素之间，产生排版影响

* 元素设置float属性，必须清除浮动


## 2.1. 清除浮动元素带来的父级元素不被展开的影响：

注意：如果父级元素有固定高度，其实不会有清除浮动的问题。so，清除浮动主要用于父容器需要按内容撑开的情况。

* 给父级元素设置height或设置相同的float属性

* 给父级元素设置display:inline-block


## 2.2. 清除浮动的方法：

* 给父级元素设置overflow:hidden（野路子）

* 浮动元素的末端添加相邻的空块元素，设置clear:both
```css
.clear-float{
    clear:both;
}
```

* 浮动元素的末端添加伪元素，设置如下
```css
.clear-float::afeter,.clear-float:after{
    content: "";
    display: block;
    clear: both;
}
``` 
+ + 需要清除浮动的元素，在父级元素的class属性中加上clear-float即可。
