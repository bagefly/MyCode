# localStorage
localStorage 属性允许你访问一个 local Storage 对象。localStorage 与 sessionStorage 相似。不同之处在于，存储在 localStorage 里面的数据没有过期时间（expiration time），而存储在 sessionStorage 里面的数据会在浏览器会话（browsing session）结束时被清除，即浏览器关闭时。

下面的代码访问当前域名下的 local Storage 对象，并使用 Storage.setItem() 方法往里面添加一个数据项。

localStorage.setItem('myCat', 'Tom');