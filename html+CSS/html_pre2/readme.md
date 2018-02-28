<!-- TOC -->

- [1. HTML](#1-html)
    - [1.1. 列表](#11-列表)
    - [1.2. 链接](#12-链接)
    - [锚点](#锚点)

<!-- /TOC -->
# 1. HTML
## 1.1. 列表
    ol：有序列表 ordered list

    type：
    1 数字（默认）
    a 小写字母
    A 大写字母
    i 小写罗马数字
    I 大写罗马数字
    
    start：起始编号
    ul：无需列表 unordered list

    type：
    disc 实心圆(默认)
    circle 空心圆
    square 实心矩形
    dl：自定义列表

    适用场景：从左到右只有一行 / 从上到下只有一列
## 1.2. 链接
```html
    页面跳转：<a href="./cate.html"></a>
    打开图片：<a href="./jpg.jpg"></a>
    下载：<a href="./jpg.zip"></a>
    邮件：<a href="mailto:xu@unnuo.com"></a>
    js：<a href="javascript:alert('>>>')"></a>
```


属性:

href

    链接(a标签)的本质，就是点击内容之后，将href里面的东西放到浏览器地址栏里面执行

target

    _self   默认本选项卡
    _blank  新选项卡

## 锚点

    # 特殊锚点，直接跳到网页顶部
    