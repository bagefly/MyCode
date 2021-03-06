<!-- TOC -->

- [1. 面向对象](#1-面向对象)
    - [1.1. 思想拓展](#11-思想拓展)
    - [1.2. 基本特征](#12-基本特征)
    - [1.3. 基本写法](#13-基本写法)
        - [1.3.1. 字面量的形式](#131-字面量的形式)
    - [1.4. 构造函数](#14-构造函数)

<!-- /TOC -->

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

# 1. 面向对象

## 1.1. 思想拓展

面向生活中，生活中的一切事物都是对象！
那么，我们编写的程序来源生活中，所以，编写的程序可以反映生活

 |对象                |属性               | 行为|
 |--------|---------------|------------------------------|
 |    人：          |姓名、身高           | 吃喝拉撒、打游戏、写代码|
 |  飞机            |宽高、容量           |       飞、发射子弹...|
 |神经细胞          |细胞核、细胞膜        |    传播物质、分裂|
 |  氧气            |   O元素             |              流动|


【结论】 编写生活中的应用程序，采用面向对象编程思想更加合适！

## 1.2. 基本特征

1.  封装
2.  继承
3.  多态

## 1.3. 基本写法

### 1.3.1. 字面量的形式

```js
	var obj = {
			name : "jacky",
			age : 18,
			sex : "男"
		};
	
			console.log(obj);
			console.log(obj.name);
			console.log(typeof obj);

```

## 1.4. 构造函数

>
>JavaScript规定，一个函数可以用new关键字来调用。那么此时将按顺序发生四件事情：
>1）隐秘的创建一个新的空对象
>2）将这个函数里面的this绑定到刚才创建隐秘新对象上
>3）执行函数体里面的语句
>4）返回这个新的对象


```js
			function People(){
				this.name = "小明";
				this.age = 18;
				this.sex = "男";	
			}
			var xiaoming = new People();
	
			console.log(xiaoming);
			console.log(xiaoming.age);
			console.log(typeof xiaoming);

```


+ 学习了一个新的函数调用的方式。
+ 当一个函数用()调用的时候，this就是window
+ 当一个函数用对象方法调用的时候，this就是这个对象
+ 当一个函数绑定给一个HTML元素事件的时候，this就是这个HTML元素
+ 当一个函数用定时器调用的时候，this就是window
+ 当一个函数用apply、call调用的时候，this就是你指定这个东西
+ 当一个函数用new调用的时候，this就是隐秘创建的空对象，函数里面的语句将被执行，并且返回新对象

宏观的看，new出来的东西都有相同的属性群、方法群。此时我们就发现了：哇塞这个构造函数像模板一样，可以非常快速的制作类似的实例。这个构造函数可以称为类，它new出来的东西叫做类的实例。