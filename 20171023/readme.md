# JQuery常用方法

## 选择器

```js
$("#id")
$(".class")
$("p")
$("*")

```

```js
document.onload = 函数

// 只是加载DOM结构
$(document).ready(函数)
$(函数)   【重点】

// 所有资源都加载完毕
$(window).ready(函数)

```

## 元素CSS属性获取
CSS
1. 元素尺寸
2. 元素位置
3. 

```js
// 获取
$("#div1").css("width")    【重点】

// 设置
$("#div1").css("width", 200)
$("#div1").css("width", "200px")
$("#div1").css({"width": 200})     【重点】
```

## 动画方法
1. animate

```js
$("p").animate(JS对象, 动画时间, 回调函数/动画类型)
```


# JQuery中的插件 #

1. 滚轮事件
2. 轮播图