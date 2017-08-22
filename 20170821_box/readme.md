
# 回顾块级元素、行内元素

## 块级元素

    设置宽高度属性会生效
    元素默认从上到下排列
    默认宽度100%

## 行内元素

    默认状态下设置的宽高属性不生效
    元素默认从左往右排列
    默认宽度是内容的宽度

## 字体标签

    <b> <strong>    字体加粗
    <i>             字体斜体
    <u>             下划线
    <del>           删除线
    <sub>           下标
    <sup>           上标

# 回顾CSS的样式及书写位置

```css
.box{
    width: 100px;
}
```

通常引入外部css文件

# css font属性———字体的属性

    所有电脑系统的浏览器，默认字体大小为16px。
    Google Chrome浏览器最小支持字体大小为12px，所以一般font-size不要小于这个值

    font-size
        单位      
        px
        em      从内往外找，找到最近的，具有font-size属性的标签作为参照物
        rem     root em 使用html标签作为参照物，可以用手机端等比例fangda

        这里提到的参照物，用来设置font-size属性
        但是使用em或rem的，不一定是font-size属性

    line-height
        设置行高，文字会在上下居中，因此这也是我们做上下居中的重要方式之一

    font-family
        字体属性
        逗号隔开，中文要加引号，英文直接写

        CSS3可以设置自定义字体，这种字体在用户带脑上不需要安装

    font-weight
        400~900
        normal< 500 < bold
        常设置为bold，或者不设置

    font-style
        italic      让支持斜体的字体按斜体显示
        oblique     倾斜体，如果不支持倾斜体，则用italic代替

```css
    .box{
        font-family: itlatic bold 24px/48px "宋体",Mircosoft YaHei,Arial;
    }
``` 

## 相关属性

    color           设置字体颜色
    text-align      相对于外容器，文字左中右对齐 left center right
    vertical-align  文字与文字之间，文字上中下对齐 top middle bottom
    text-indent     首行缩进

    white-space:nowrap;    换行:不换行
    width:100px;           宽度
    overflow:flow;         内容超出部分会隐藏
    text-overflow:ellipsis 文字超出：省略符。默认叫clip，裁剪。一组属性，实现超出文字用省略号表示

### 注意：能不能使用该属性，让元素相对容器，上下居中

# 盒模型

content（width，height）   padding     border      margin

标准盒模型：一个的尺寸，是content+padding+border ， padding和border都是往外撑开

怪异盒模型：（不要轻易使用）盒子的尺寸，就是设置的width和height ， padding和border向内挤压，直到padding和border的总和超过了width和height

## padding

    padding:10px                 上
    padding:10px 20px;           上，右
    padding:10px 20px 30px;      上，右，下
    padding:10px 20px 30px 40px; 上，右，下，左

    缺省值，用对称方向填充

## margin

    格式与padding一模一样

### 注意经典问题，外边距坍塌、外边距合并

1. 相邻元素，相邻的margin会合并
2. 父元素margin与内部第一个或最后一个元素的margin
3. 空元素，没有height、min-height、border、padding的空元素

```html
<div class="fat">
    <div class="thin"></div>
</div>
```

```css

.fat{
    width:300px;
    height:300px;
    background-color: #0f0;
}
.thin{
    width:100px;
    height: 100px;
    background-color: #f00;
    margin-top: 100px;
}
```

1. fat元素，设置overflow:hidden。（野路子）
2. padding:1px / border-width:1px / 空元素的height:1px （不完美）
3. 增加空元素 overflow:hidden （近似完美）
4. 伪元素 模仿空元素，给元素的::before伪元素写

```css
    .clear-top::before,.clear-top:before {
        content: "";
        display: block;
        overflow: hidden;
    }
    .clear-bottom::after,.clear-bottom:after{
        content:"";
        display: block;
        overflow: hidden;
    }
```

## border

边框

    border: 2px solid #000;
    border-top: 2px solid #f0f;
    border-width: 10px 20px 30px 40px;

    border-style:
    border-color:
    border-top-color:

    border下的展开写法

# overflow

    可以展开为overflow-x overflow-y，分别是横向和纵向

    hidden     超出内容隐藏    
    visible    默认，超出显示
    scroll     超出内容滚动，会出现滚动条