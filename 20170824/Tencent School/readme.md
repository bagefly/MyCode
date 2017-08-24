<!-- TOC -->

- [1. background 背景](#1-background-背景)
    - [1.1. background-color](#11-background-color)
    - [1.2. background-image](#12-background-image)
    - [1.3. background-repeat](#13-background-repeat)
    - [1.4. background-size](#14-background-size)
    - [1.5. background-position](#15-background-position)
    - [1.6. background-origin](#16-background-origin)
    - [1.7. background-clip](#17-background-clip)
    - [1.8. background-attachment](#18-background-attachment)
    - [1.9. background-blend-mode](#19-background-blend-mode)

<!-- /TOC -->
# 1. background 背景

## 1.1. background-color 

    背景颜色

    hex     #ff0000  （十六进制数）
    rgb     rgb(220,100,130)
    rgba    rgba(0,0,210,0.5)
    hsla    hela(120,57%,68%,1)  色相  饱和度  明度

## 1.2. background-image

    background-image:url("./images/apple.jpg")
    background-image:url('./images/apple.jpg')
    background-image:url()            不推荐

## 1.3. background-repeat

    背景重复

    background-repeat: no-repeat
                       repeat-x
                       repeat-y
                       space        在图片不改变尺寸的前提下，尽量放置完整的背景图片，多余的空间均分
                       round        图片尺寸会随着容器的尺寸改变，最小75%，最大125%（不等于）
    background-repeat-x: no-repeat / repeat
    background-repeat-y: no-repeat / repeat

## 1.4. background-size

        控制背景图尺寸

                两个值分表代表宽、高
                一个值代表宽度；高度自动。（不代表对两个维度起作用）

        background-size: 100px 50px     宽度、高度
        background-size：50%   100%     相对于容器
                         auto  auto     
                         contain        只要有一个边到达了容器边界，就不在放大。图片尺寸一定小于等于容器尺寸

                         cover          一边到达边框，另一边超出，填满容器。图片尺寸一定大于等于容器尺寸

## 1.5. background-position

    background-position

                100px  50px     从左往右的偏移量   从上往下的偏移量

                0%              left
                50%             center
                100%            right
                        0%      top
                        50%     center
                        100%    bottom

                百分比，根据容器尺寸 - 图片尺寸（background-size）的差值

                500px

                100px   size 越大越往右   （500-100） %
                1000px  size 反过来      -（500-1000） %

## 1.6. background-origin

    规定的是背景图片从哪里开始
    从里面开始，包括自己

    background-origin: border-box; 第一张图片以border的左上角对齐
    background-origin: padding-box; 第一张图片以padding的左上角对齐（默认）
    background-origin: content-box; 第一张图片以content的左上角对齐

## 1.7. background-clip

    规定的是背景图从哪开始裁剪
    自身以外的部分裁掉

    background-clip: border-box; 默认相当于没有裁剪
    background-clip: padding-box; padding区域以外的部分裁掉
    background-clip: content-box; content区域以外的部分裁掉

## 1.8. background-attachment

    把背景图片固定到浏览器窗口上，不随内容浮动
    
    fixed   图片固定到窗口上，不说内容滚动
    scroll  图片随内容滚动，但是当元素设置了overflow:scroll之后，图片不随内容滚动，这个时候使用local

## 1.9. background-blend-mode

    预先指示，多背景

        background-image:url("./image/1.jpg"),url("./image/2.jpg");
        
    显示顺序，与字体类似，优先显示前面的，党无法显示时依次往后

    background-image 可以与background-color 进行混合
    该属性只能做标签本身的混合，而不能做标签与标签之间的混合


    