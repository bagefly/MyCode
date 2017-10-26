# jQuery cookie

Ajax缓存极其严重，如果两次get、post都是通往同一个URL的，并且携带的参数一样，即使服务器返回200的状态码，也会被当做304那样有缓存。这样就会表现出内容更改不及时，后台的文件已经更改了，但是前台由于有缓存就不会变化。

**随机数**
只要更改参数，就不会有缓存！所以我们受此启发， 可以为我们的URL后面添加不影响页面使用的随机数。

jQuery中：
```js
$.get("a.txt",{"z":Math.random()},true);
```

**时间戳**
Date是系统内置的构造函数，new Date()就能产生一个日期时间对象，输出之后就是一个当前系统时间。
Date.parse(日期时间对象)就能产生一个时间戳，是从1970年1月1日到现在这一时刻的毫秒数。

```js
Date.parse(new Date());

xhr.open("get","a.txt?z=" + Date.parse(new Date()),true);

$.get("a.txt?.z=" + Date.parse(new Date()),true);
```
