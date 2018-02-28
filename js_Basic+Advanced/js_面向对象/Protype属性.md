<!-- TOC -->

- [1. 原型](#1-原型)
- [2. 继承](#2-继承)
- [3. in 运算符](#3-in-运算符)
- [4. hasOwnProperty方法](#4-hasownproperty方法)
- [5. instanceof 运算符](#5-instanceof-运算符)

<!-- /TOC -->
# 1. 原型

在js中，每一个函数都有prototype属性，指向一个对象。*console.log()*一个函数的prototype属性，就会发现是一个空对象。输出这个prototype的类型，发现是object类型。
prototype就是英语“原型”的意思。每个函数都有原型，原型是一个对象。如果函数是一个构造函数，那么函数的原型，用处极大！

```js

//构造函数，如果其中没有任何语句代码，这个构造函数在执行的时候，不会给创建出来的对象添加任何属性。

function Person(){

}

//构造函数的原型，更改了构造函数的原型，为一个新的对象

Person.prototype = {
    name : "Koala";
    age : "18";
}

//当一个对象被new出来的时候，不仅仅执行了构造函数里面的语句，也会把这个函数的__proto__指向构造函数的prototype。

var ming = new Person();
console.log(ming.__proto__);
console.log(ming.__proto__ == Person.__proto__);

//当我们试图访问name、age属性的时候，身上没有。那么就去查找原型，原型身上有，就当做了自己的属性返回了。

console.log(ming.name);
console.log(ming.age);

```
prototype一定是函数的属性！当这个函数是一个构造函数的时候，那么它new出来的对象，将以它的原型那个对象为new出来的实例的原型对象。

注意，任何一个对象，都有__proto__属性，这个属性是Chrome自己的属性，别的浏览器不兼容，但是别的浏览器也有原型对象，只不过不能通过__proto__进行访问而已。
prototype我们称为“原型”，只有函数有原型
__proto__我们称为“原型对象”，任何对象都有原型对象。

# 2. 继承

说白了，People、Student两个类，Student类的实例，拥有 People的全部属性属性、方法。
现在，你就应该朦朦胧胧的感觉到，用原型链来实现。JavaScript中没有extends。
People叫做父类、超类； Student叫做子类。

```js
function People(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}
People.prototype.sayHello = function(){
    alert("你好我是人" + this.name);
}
People.prototype.chifan = function(){
    alert("我吃饭了！mia mia");
}


function Student(name,age,sex,xuehao,xiaohonghuageshu){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.xuehao = xuehao;
    this.xiaohonghuageshu = xiaohonghuageshu;
}
//核心语句，继承的实现全靠这条语句了：
Student.prototype = new People();

Student.prototype.sayHello = function(){
    alert("你好我是小学生，我的学号是" + this.xuehao);
}
Student.prototype.study = function(){
    alert("好好学习，天天向上");
}
Student.prototype.lol = function(){
    alert("玩儿英雄联盟啊！");
}

var xiaohong = new Student("小红",11,"女",20160001,4);
//xiaohong.lol();
//xiaohong.chifan();
xiaohong.sayHello();

```

# 3. in 运算符

返回一个布尔值，表示这个属性是不是对象的属性。

in不仅仅检测是对象自己有没有这个属性，如果原型链上有这个属性，那么也会返回true。整个原型链如果没有这个属性，就返回false。也就是说，in操作符会进行原型链查找。

for in 这个循环，会把原型链上所有的可枚举的属性列出来：

```js
	for(var k in obj){
		console.log(k);
	}

```

什么是可枚举，系统默认的属性（比如constructor）都是不可枚举的。for in循环能够把自己添加的属性罗列出来，罗列的不仅仅是自己身上的属性，还有原型链上的所有属性。

# 4. hasOwnProperty方法

这个方法定义在了Object.prototype对象上面，所以任何一个Object都能够拥有这个方法。
这个方法返回true、false。表示自己是否拥有这个属性，不考虑原型链。就看自己身上有没有这个属性，不进行原型链查找。

# 5. instanceof 运算符

类在英语里面叫做class，实例在英语里面叫做instance。
instaceof运算符：
*A instaceof B*
验证A对象是不是B类的实例。