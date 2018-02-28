# em单位的使用注意点

1、浏览器的默认字体大小是16px

2、如果元素自身没有设置字体大小，那么元素自身上的所有属性值如“boder、width、height、padding、margin、line-height”等值，我们都可以按下面的公式来计算

    1 ÷ 父元素的font-size × 需要转换的像素值 = em值

3、这一种千万要慢慢理解，不然很容易与第二点混了。如果元素设置了字体大小，那么字体大小的转换依旧按第二条公式计算，也就是下面的：

    1 ÷ 父元素的font-size × 需要转换的像素值 = em值

那么元素设置了字体大小，此元素的其他属性，如“border、width、height、padding、margin、line-height”计算就需要按照下面的公式来计算：

    1 ÷ 元素自身的font-size × 需要转换的像素值 = em值


[原文](http://www.w3cplus.com/css/px-to-em) © w3cplus.com

# rem单位

rem是相对于根元素<html>，这样就意味着，我们只需要在根元素确定一个参考值font-size

[原文](http://www.w3cplus.com/css3/define-font-size-with-css3-rem)