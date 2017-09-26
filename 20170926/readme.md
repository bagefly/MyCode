<!-- TOC -->

- [1. 通过标签名获取html元素](#1-通过标签名获取html元素)
- [2. 循环输出](#2-循环输出)
- [3. 连续打点调用函数](#3-连续打点调用函数)
- [4. 应用案例](#4-应用案例)
    - [4.1. 表格的隔行变色](#41-表格的隔行变色)
    - [4.2. 全选复选框](#42-全选复选框)
    - [4.3. 批量添加事件监听](#43-批量添加事件监听)
    - [4.4. 对应模型](#44-对应模型)
    - [4.5. 排他模型](#45-排他模型)
    - [4.6. 计算后样式](#46-计算后样式)
    - [4.7. 能力检测](#47-能力检测)

<!-- /TOC -->
# 1. 通过标签名获取html元素

getElementsByTagName
获取的是页面上所有该种标签元素，得到的是存储这些标签元素的数组，数组可以有下标，开始是0，最后一项是数组的length-1
```html
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
```
```js
var op = document.getElementsByTagName("p");
op[0].style.backgroundColor = "red";

op[1].style.backgroundColor = "green";

op[op.length - 1].style.backgroundColor = "blue";

```

# 2. 循环输出

for循环遍历数组中的元素

```js
for(var i = 0; i < op.length - 1; i++){
    console.log(op[i]);
}
```
# 3. 连续打点调用函数

先去选择一个HTML标签，然后选择这个HTML标签中的所有p标签：
```js
var ps = document.getElementById("box2").getElementsByTagName("p");

```

带数组的连续打点
```js
document.getElementsByTagName("div")[1].getElementsByTagName("p")[2].getElementsByTagName("span")[1].style.color = "red";

```

# 4. 应用案例

## 4.1. 表格的隔行变色

## 4.2. 全选复选框

## 4.3. 批量添加事件监听

## 4.4. 对应模型

## 4.5. 排他模型

## 4.6. 计算后样式

## 4.7. 能力检测