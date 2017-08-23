<!-- TOC -->

- [1. form](#1-form)
    - [1.1. label](#11-label)
    - [1.2. input](#12-input)

<!-- /TOC -->
# 1. form

## 1.1. label

    for     属性，指明绑定的form控件，点label相当于点for的目标



## 1.2. input

pattern
        正则表达式，输入的内容，必须符合其设定的格式

min max step
        数字类input都支持

minlength maxlength 
        文本输入的字符长度

placehold
        占位符，文本类的输入框都有

checked*
        鼠标选择类的基本上都有，单选框，复选框，下拉列表，选择列表


disabled*
        不可用，不可输入和修改也不会上传数据

readonly
        内容只可读，不可改，主要用于文本类输入框

required*
        所有输入控件，都可用

通用属性
        autocomplete   默认为on，可以设置为off
        autofocus      设置默认焦点，一般一个网页，只能设置一个



type

    button
    reset
    submit
    image   图片提交按钮，可以用图片作为样子，功能跟submit一样

    checkbox
            "value"默认是on，也可以人为指定
            内容不成组，所以对于name的起名需要注意。

            一般，多个checkbox，可以用不一样的name名；或者用同样的name，但是value不同。
            各有好处

    radio
            value需要指定
            name属性值一样，为一组，组里只能选一个

    color   
            value 用户选择的颜色值
            #号会被转义为%23，防止跟锚点冲突
            颜色输入框
            Firefox不支持

    text
            "value"为用户输入的内容
            不成组

    email
            类似text，验证邮箱格式，但不准确

    password
            密码

    tel
            电话号码，验证电话格式

    url 
            地址（网址）
    
    number
            类似text，只能输入数字

    range
            默认0-100

    file    上传文件
    image   上传图片



    

