<!-- TOC -->

- [1. 练习内容](#1-练习内容)
    - [1.1. 数组应用于星座输出](#11-数组应用于星座输出)
    - [1.2. 乘9乘法表](#12-乘9乘法表)
- [2. 知识点应用梳理](#2-知识点应用梳理)
    - [2.1. 数组的其他方法](#21-数组的其他方法)
    - [2.2. for循环嵌套](#22-for循环嵌套)
    - [2.3. document获取和创建HTML元素](#23-document获取和创建html元素)
- [3. 感悟](#3-感悟)

<!-- /TOC -->
# 1. 练习内容

## 1.1. 数组应用于星座输出
    
    结合for循环，注意条件语句中i的取值上限使用数组的长度array.length限定更好。
```js
    var arrMonth = [1,3,5,7,8,10,12]
    for(i=1;i<arrMonth.length;i++){
        console.log(arrMonth[i]);
    }
```

## 1.2. 乘9乘法表

*   找规律：每个等式都是其所在的行数与列数相乘。
*   两次for循环嵌套。

```js
    for(var row=1;row<=9;row++){
        var line = "";
        for(var col=1;col<=row;col++){
       line =line + col +"x"+ row + "=" + row*col +"\t" ;
    }
    // line += "\n";
    console.log(line);
}
```
*   在表达输入结果时有两种方式，一是所有循环结束后，一次性输出结果；二是行列循环一次，输出所在行的结果，再次循环换行。

# 2. 知识点应用梳理

## 2.1. 数组的其他方法
     slice()  contact()   ...

## 2.2. for循环嵌套

## 2.3. document获取和创建HTML元素
    document.getElemntById()
    document.createElment()

# 3. 感悟

    知识点能听懂，并不代表掌握，代码要在理解的基础上多敲多写。
    就像9 9乘法表知道列数乘行数，在写代码时浪费好多代码，逻辑不清晰。