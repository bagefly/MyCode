<!-- TOC -->

- [1. 回顾数组Araay](#1-回顾数组araay)
    - [1.1. 三个数组，每组三个数字元素，组合出所有的颜色。](#11-三个数组每组三个数字元素组合出所有的颜色)
- [2. 对象](#2-对象)
- [3. 作用域](#3-作用域)
- [4. 遍历](#4-遍历)
- [5. while /  do while](#5-while---do-while)

<!-- /TOC -->
# 1. 回顾数组Araay
    
    数组 在JavaScript中，数组本质上是一种特殊的对象。
    而数组，对象，都是“引用类型”。

```js
    var a = 2;
    var b = a;
    b++;
    console.log(a);

    var a = [1];
    var b = a;
    b[0]++;
    console.log(a[0]);

    // 如何把数组，赋值给另外一个数组，并且相互相互独立。
```

## 1.1. 三个数组，每组三个数字元素，组合出所有的颜色。

# 2. 对象

以键值对的方式存储

// 作用域
```js
var a = 3 ;
var test = function(){
    a *= 2;
}

test();

console.log(a);

var Jack = {
    name:"Jack Smith",
    age:19,
    address:"NewYork",
    say:function(){
        console.log(Jack.age);
    }
}
// 对象可以存储任何东西
Jack.name   // 对象的默认取值方式就是  。  


var arrObj = {
    a:1,
    b:2,
    c:3
}

var a = "b";
arrObj[a]; // 这种取值方法，a是一个变量
arrObj.a   // 取arrObj对象里面，键名 叫 a 的那一条数据

// 在一个对象里使用this，就是指该对象
```
*  代码，分为数据和数码
*  代码，只有数据


# 3. 作用域
```js
    var obj1 = {
        a:1;
        say:function(){
            console.log(this.a)
        },
        obj2:{
            a:2,
            say:function(){
                console.log(this.a)
            },
            obj3:{
                a:3,
                say:function(){
                    console.log(this.a)
                }
            }
        }
    }
```

变量尽量不要在顶级作用域里声明




# 4. 遍历


```js
    var Jack = {
        name:"Jack Smith",
        father:"John Smith",
        age:19,
        address:"NewYork",
    }
    for(k in Jack){
        console.log("Jack's "+k+" is "+Jack[k]);
    }
```

# 5. while /  do while

```js
var a = 10;
var i = 1;
do{
    console.log(i);
    i++;
}while(i>10)
```