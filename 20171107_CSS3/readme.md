# CSS3 新属性

## 属性选择器 []

|选择器|描述|
|--|--|
|--[attribute]--        |-- 用于选取带有指定属性的元素。--|
|--[attribute=value]  --|--用于选取带有指定属性和值的元素。--|
|--[attribute~=value] --|--用于选取属性值中包含指定词汇的元素。--|
|--[attribute|=value] --|--用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。--|
|--[attribute^=value] --|--匹配属性值以指定值开头的每个元素。--|
|--[attribute$=value] --|--匹配属性值以指定值结尾的每个元素。--|
|--[attribute*=value] --|--匹配属性值中包含指定值的每个元素。--|

## 序列

    :first-child        选择属于父元素的第一个子元素的每个该类元素

```html
    <style>
    p:first-child
    {
        background-color:yellow;
    }
    </style>
    </head>
    <body>

    <p>这个段落是其父元素（body）的首个子元素。</p><!-- 被选中，背景为黄色 -->
    <h1>欢迎访问我的主页</h1>
    <p>这个段落不是其父元素的首个子元素。</p>

    <div>
    <p>这个段落是其父元素（div）的首个子元素。</p><!-- 被选中，背景为黄色 -->
    
    <p>这个段落不是其父元素的首个子元素。</p>
    </div>
```
    :first-of-type      选择属于其父元素的首个元素的每个该类元素。

    :only-of-type		选择属于其父元素唯一的元素的每个该类元素。

    :nth-child(n)		选择属于其父元素的第二个子元素的每个 <p> 元素。


## 2D/3D 转换属性
    transform

    transform-origin	        允许改变被转换元素的转换中心位置。

    translate(x,y)	            定义 2D 转换。
    translate3d(x,y,z)	        定义 3D 转换。	
    translateX(x)	            定义转换，只是用 X 轴的值。	
    translateY(y)	            定义转换，只是用 Y 轴的值。
    <!-- translateZ(z)	            定义 3D 转换，只是用 Z 轴的值。 -->

    scale(x,y)	                定义 2D 缩放转换。	
    scale3d(x,y,z)      	    定义 3D 缩放转换。
    
    rotate(angle)	            定义 2D 旋转，在参数中规定角度。	
    rotate3d(x,y,z,angle)	    定义 3D 旋转。	
    rotateX(angle)              定义沿着 X 轴的 3D 旋转。	
    rotateY(angle)	            定义沿着 Y 轴的 3D 旋转。	
    rotateZ(angle)	            定义沿着 Z 轴的 3D 旋转。

    skew(x-angle,y-angle)	    定义沿着 X 和 Y 轴的 2D 倾斜转换。
    skewX(angle)	            定义沿着 X 轴的 2D 倾斜转换。
    skewY(angle)	            定义沿着 Y 轴的 2D 倾斜转换。

    perspective(n)	            为 3D 转换元素定义透视视图。

    backface-visibility         定义元素在不面对屏幕时是否可见。

## 过渡属性（Transition）

    简写属性，用于在一个属性中设置四个过渡属性。



