<!-- TOC -->

- [1. position](#1-position)
    - [1.1. relative](#11-relative)
    - [1.2. absolute](#12-absolute)
    - [1.3. fixed](#13-fixed)
- [块元素居中](#块元素居中)

<!-- /TOC -->
# 1. position

css定位属性 

    static      静止定位
    relative    相对定位
    absolute    绝对定位
    fixed       固定定位

1. 除static的定位方式外，其他的都要结合top、right、bottom、left四个属性来用，以后在学习transition的时候，只有相同的属性，并且连续的值，才会产生过渡效果

2. 除static以外的所有定位方式，，都支持z-index，z-index不支持小数和负数，不需要单位，越大越在上层

3. 其他所有的定位方式，z-index都比static的大


## 1.1. relative

* 相对原来的位置进行偏移，还占据原来的位置，不会对其他任何元素产生影响，原来的位置作为“参照物”。

* left 代表从left往对立方向的偏移量

## 1.2. absolute

* 相对参照物的距离，不再占据原来的位置，下面的元素可以挤上去，从内往外找，找到第一个有position属性的并且不是static的祖先元素，以它作为参照物，通常，设置参照物的position为relative

* left 代表距离参照物左侧的距离

## 1.3. fixed

其他各项与absolute一致，但是参照物是窗口

```css
.father{
    positon: relative;
}
```

# 块元素居中

    margin属性可以实现元素的偏移，会对周围元素产生影响
    margin:0 auto;可以实现元素在父容器里左右居中

    absolute 在元素未设置宽高，可以通过四个方向属性拉伸元素

分情况而论：

1. 父元素和子元素都已知高度
    
    设置子元素的margin
```css

.father{
    width:100px;
    height:100px;
    background:#f00;
}
.son{
    width:20px;
    height:20px;
    background:#0f0;
    margin-left:50%;
    margin-rigth:-10px;
}
```
   设置父元素固定的padding
2. 