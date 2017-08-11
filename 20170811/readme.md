#  回顾数组

## 三个数组，每组三个数字元素，组合出所有的颜色。

# 对象
```js
var a = 3 ;
var test = function(){
    a *= 2;
}

test();

console.log(a);

```

变量尽量不要在顶级作用域里声明



# 遍历


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