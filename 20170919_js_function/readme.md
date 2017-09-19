# 函数

```js
    function sum(a,b){
        return (a + b) ;
    }
    sum(1,2)
```
    形式参数 a , b

    实际参数 1 , 2

    return  返回值 函数的结果

# 作用域

    局部变量

    全局变量

```js 
   
    var a = 1;    // 全局变量
    function func(){
        var a = 2;  // 局部变量
    }
    func();
    console.log(a);
```

# 递归

```js
    // 定义了函数阶乘函数，作用是求n的阶乘
    // 1.假设函数已经定义了
    function factorial(n){
        //3.终止条件
        if(n == 1){
            return 1;
        }
        // 2.分解：将当前任务 分解乘上一个任务 乘 自己
        return factorial(n - 1) * n;
    }
    factorial(5);

```

# 函数的自运行

```js
    (function func(){
        alert("哈哈");
    })()


    +function func(){
        alert("哈哈");
    }()
```