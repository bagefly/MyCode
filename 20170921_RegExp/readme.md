<!-- TOC -->

- [1. 字符串复习](#1-字符串复习)
    - [1.1. 字符串的方法](#11-字符串的方法)
    - [1.2. 字符串对象](#12-字符串对象)
- [2. 正则表达式](#2-正则表达式)

<!-- /TOC -->
# 1. 字符串复习
字符串遍历 string[0] ...
[w3c](http://www.w3school.com.cn/jsref/jsref_split.asp)
## 1.1. 字符串的方法

concat      字符串拼接 
```js
var a = "AB";
var b = a.concat("C"); // "ABC"
```
charAt      获取某位置上的字符 
charCodeAt  获取某位置上的字符编码

slice       截取字符串 利用下标(起始值,终止值)
```js
var a = "哈哈ha";
var b = a.slice(0,2);
console.log(b);       // "哈哈"
```

subString   截取字符串 
subStr      截取字符串 
indexOf     获取字符在字符串中的位置 
lastIndexOf 获取字符在字符串中的位置 逆向 
search      获取字符在字符串中的位置 

split       字符串转化成数组
```js
var a = "2345";
var b = a.split("");
console.log(b);   // ["2", "3", "4", "5"]
```
replace     字符串替换

## 1.2. 字符串对象

1. 字符串对象定义
2. 取出字符串中的字符

        ASCII码 规定 0~127 之间的字符 （数字、英文字母、键盘）

        (只占1字节)

        中文字符 字符表： gb2312 规定 6000多个常用字符的编码

        1111 1111(2) ==> 255(10) 1111 1111 1111 1111(2) ==> 65535(10)

        ** 中文字符 占2个字节 **

        GBK 标准： 增加少数民族的文字字符 中文字符 占2个字节

        GB2312, GBK 统称为 多字节编码

3. ASCII码 与 字符编码
4. 字符串查找

# 2. 正则表达式

[w3c 文档](http://www.w3school.com.cn/jsref/jsref_obj_regexp.asp)
