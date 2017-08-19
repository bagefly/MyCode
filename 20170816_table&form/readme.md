<!-- TOC -->

- [1. 文本标签](#1-文本标签)
    - [1.1. 列表](#11-列表)
        - [1.1.1. 有序列表和无序列表](#111-有序列表和无序列表)
        - [1.1.2. 自定义列表](#112-自定义列表)
    - [1.2. 其他语义化标签](#12-其他语义化标签)
- [2. 图片](#2-图片)
    - [2.1. 注意点](#21-注意点)
- [3. 链接和锚点](#3-链接和锚点)
    - [3.1. 浏览器寻址](#31-浏览器寻址)
- [4. 表格](#4-表格)
- [5. 表单](#5-表单)
    - [5.1. 注意](#51-注意)
- [6. Emmet](#6-emmet)
- [7. 作业](#7-作业)

<!-- /TOC -->
# 1. 文本标签
## 1.1. 列表
### 1.1.1. 有序列表和无序列表

```html
    <!-- 有序列表ol -->
    <ol reversed>
        <li>Win1</li>
        <li>Win2</li>
        <li>Win3</li>
    </ol>
    <!-- 无序列表ul -->
    <ul>
        <li>win</li>
        <li>win</li>
        <li>win</li>
    </ul>
```

    reversed    排序倒置，只改变序号(由大到小)，不改变原有的排序内容
    上面代码结果 3.win1
                2.win2
                1.win3
    start       起始序号，可与reversed搭配使用

    type        ol:
                'a' 表示小邪字母编号；
                'A' 表示大写字母编号；
                'i' 表示小写罗马数字编号；
                'I' 表示大写罗马数字编号；
                and '1' 表示数字编号（默认值）

                ul:
                circle  圆环
                disc    圆点
                square  方块

### 1.1.2. 自定义列表

```html
    <dl>
        <dr>VScode编辑器</dr>
        <dd>它是微软公司推出的一款代码编写软件</dd>
    </dl>
```

## 1.2. 其他语义化标签

    <blockquote>             引用

        写在上面标签里的cite  属性，描述这段引用的出处，但不显示

    <cite>
                             显示一个引用出处，默认是斜体

# 2. 图片

    <img>   默认样式属性显示为inline，实际是inline-block
            src     图片地址

## 2.1. 注意点

    加深对display的认知       

        none            元素不显示，相当于不在网上
                    
        inline          行内元素

                        可以让元素，使用文字的属性
                            
        block           块元素

        inline-block    按行内排列，但是支持高宽

# 3. 链接和锚点

    <a>
        href    链接的地址

    锚点
        给网页上的某一位置做的一个标记，可以通过a标签中的链接跳转到指定位置

        1. 使用a标签做锚点，name属性做标记（不推荐）
        2. 使用任何标签做锚点，id属性做标记

        当容器具有overflow:hidden的时候，它就作为锚点滚动的边界

## 3.1. 浏览器寻址

    绝对地址
        从顶级地址开始，对于网址就是从协议开始

    相对地址
        ./   带表当前目录
        ../  代表上一级目录
        /     根目录(顶级地址)

# 4. 表格

已废弃的排版技巧

    <table>   表格

    <tr>      行

    <td>      单元格
    <th>      单元格，但是，是表头单元格

```html
        <table>
            <tr>
                <th>姓名</th>
                <th>班级</th>
                <th>学号</th>
            </tr>
        </table>
```

                    table       tr      td
    属性名
    border          1           0       0
    cellspacing     1           0       0
    cellpadding     1           0       0
    width           1           0       1 
    height          1           1       1
    bgcolor         1           1       1
    align(l,c,r)    0.5         1       1
    valign(t,m,b)   0           1       1

    rowspan     向下合并    合并行             1
    colspan     向右合并    合并列             1

    thead       表格头部
    tbody
    tfoot       表格末尾起到信息提示的作用

# 5. 表单

    form
    
            action  请求数据的地址
            method  GET （默认） 
                        通过向url（网址）添加参数，实现数据传输
                        明文 最大输入字节数2048
                            
                    POST  
                        向网址指向的文件传递数据，但是数据不是附带在网址里面
    
    input

            type

                    text        文本输入框
                    button      常规按钮，没有任何功能
                    reset       重置本form的内容，不等于刷新页面
                    submit      向form的action中地址提交本form表单数据

## 5.1. 注意

浏览器地址栏里面的网址，
a标签 href属性里面的地址
img、video、script ... 里面的 src属性，里面的地址

跨域
```html
<script src="http://www.baidu.com/s/main.js?wd=JayChou"></script>
```

# 6. Emmet

```html
(.one>.two*2>.three.box$)*5
```

# 7. 作业

1. 自学 Emmet [Emmet文档](http://www.w3cplus.com/tools/emmet-cheat-sheet.html)

2. table数字练习

3. 学习input的type [input type 官方文档](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#属性)