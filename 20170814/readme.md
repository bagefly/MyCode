
# Function
    
    function关键字，声明函数，类似var，
    也符合“声明提前，赋值留在原地”。

```js
    add(1,2);
    var add = function(){
        console.log(a+b);
    }                       // 该写法会报错，add is not a function .

    function a(){

    }       // 声明函数 
    a();
```