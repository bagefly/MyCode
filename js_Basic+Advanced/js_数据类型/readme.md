<!-- TOC -->

- [1. 数据类型](#1-数据类型)
    - [1.1 数字](#11-数字)
        - [1.1.1 数学运算](#111-数学运算)
    - [1.2 字符串](#12-字符串)
        - [1.2.1 引号嵌套](#121-引号嵌套)
        - [1.2.2 类型转换 string => number](#122-类型转换-string--number)
        - [1.2.3 number转string](#123-number转string)
    - [1.3 布尔值](#13-布尔值)
        - [1.3.1 逻辑运算](#131-逻辑运算)
- [2 Math(全局对象)](#2-math全局对象)
    - [作业](#作业)

<!-- /TOC -->
# 1. 数据类型

    number     1 2 3
    string     "123a"
    undefined  // 变量已声明，但是未赋值时候的默认值
    Boolean
    null

## 1.1 数字

    字面量与进制
```js
    var a = 10;     //十进制

    var b = 012;    //八进制
    var b = 0o12;

    var c = 0x26;   //十六进制  38

```
    科学计数法
    5e+3
    2e-4
    -5e-3

    面试题

```js
    var e = 10;
    console.log(5e+10);
```

### 1.1.1 数学运算

    +   -
    *   /
    %   //注：取余 10 % 3 => 1

    +=  //a+=2 => a = a + 2
    -= 
    *=
    /=
    %=

    ++  // a++ => a = a + 1
    -- 

## 1.2 字符串

    var a = "123"

### 1.2.1 引号嵌套
```js
    var a = 5;
    var b = "1'+a+'+1";
    var c = "1" +a+ "1";
    var color = "rgb("+r+","+g+","+b+")";

    /* 输出 "今天是2017年8月8日" */
```

### 1.2.2 类型转换 string => number

    parseInt("15.4px")   => 15
    parseFloat("12.5.5px")  => 12.5

    "15"*1  输出结果都为15
    "15"/1
    "15"-0

### 1.2.3 number转string

    15 + "" //字符串连接，隐式类型转换

## 1.3 布尔值

    true            false
    非0的数字        0
    非空字符' '      空字符''
    !unfefined      undefined
                    null
    Infinity        NaN
                    数字小到一定程度后，无限接近0，输出结果也为false

```js
    if(true){
        console.log("Yes");
    }else{
        console.log("No");
    }
```

### 1.3.1 逻辑运算

    >
    <
    >=
    <=
    == != 会进行隐式转换

    === !== 不会进行隐式转换

    0 !== false
    1 !== flse

    && 与 and

        true&&true&&true  => true

    || 或 or

        true||false||false  => true

    ! 非 not

# 2 Math(全局对象)

    document.write()
    console.log()
    alert()

## 作业

    输入弦长和拱高，求拱形长度

```js
    var a = document.getElementById('id');
```