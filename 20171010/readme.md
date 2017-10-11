<!-- TOC -->

- [1. cloneNode 克隆节点](#1-clonenode-克隆节点)
- [2. apply和callback](#2-apply和callback)
- [3. 事件流](#3-事件流)
- [4. 事件绑定](#4-事件绑定)
    - [4.1. DOM0级事件绑定](#41-dom0级事件绑定)
    - [4.2. DOM2级事件绑定](#42-dom2级事件绑定)
    - [4.3. 低版本IE的事件绑定](#43-低版本ie的事件绑定)
- [5. 事件对象](#5-事件对象)
    - [5.1. 通用事件对象属性和方法](#51-通用事件对象属性和方法)
    - [5.2. clientX、clientY、screenX、screenY](#52-clientxclientyscreenxscreeny)
    - [5.3. IE中的event](#53-ie中的event)
    - [5.4. 鼠标按键检测](#54-鼠标按键检测)
    - [5.5. 键盘按键监测](#55-键盘按键监测)

<!-- /TOC -->
# 1. cloneNode 克隆节点

属性的传递

# 2. apply和callback

```js
var a = {"name":"Jack"};
// apply 可以传递参数

//c.apply(a)

function c(){
    console.log(this);
}
```

# 3. 事件流


当你单击了某个元素，单击事件不仅仅发生在这个元素上，你也单击了它的父元素、父元素的父元素、……它的祖先元素，甚至单击了整个页面。

# 4. 事件绑定

## 4.1. DOM0级事件绑定
DOM分为级别，DOM0级、1级、2级、3级，是不同的标准，标准一直在升级。
我们之前学习的
1	oDiv.onclick = function(){2	}
这种注册监听的写法，就是DOM0级的事件绑定方法。就是把onclick当做属性添加给了oDiv元素。


## 4.2. DOM2级事件绑定

冒泡事件


DOM1级规范中，没有对事件进行改动。
DOM2级做了新的规范，不用on***来绑定监听了，而是使用一个方法
1	addEventListener();
add添加，Event事件，Listener监听

## 4.3. 低版本IE的事件绑定

IE永远是个奇葩，但是现在20%的用户在使用IE8，我们祝愿他们健康幸福。
IE6、7、8不支持addEventListener()方法，支持
1	oDiv.attachEvent("onclick",函数);
没有第三个参数，也就是说，不能选择监听捕获、冒泡。

# 5. 事件对象


Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。

## 5.1. 通用事件对象属性和方法

+ event.type 返回事件的类型，没有on， 比如"click"
+ event.target 返回你点击的最小的那个元素，即使这个元素身上没有监听，也是返回它
+ event.currentTarget	返回自己，this一定和event.currentTarget是一个元素，都是自己
+ event.bubbles	返回一个布尔值，表示这个事件是否冒泡


```js
	oDiv.onmouseover = function(event){
		console.log(event.bubbles); 
	}

```

+ stopPropagation() 停止传播事件流
	event.stopPropagation();

+ preventDefault() 阻止默认事件
	event.preventDefault();

## 5.2. clientX、clientY、screenX、screenY

```
event.clientX
event.clientY
event.screenX
event.screenY

全线兼容，表示事件触发这一瞬间的鼠标位置。
clientX表示鼠标的位置，距离浏览器窗口左边边的距离
clientY表示鼠标的位置，距离浏览器窗口上边边的距离
screenX表示鼠标的位置，距离屏幕左边边的距离
screenY表示鼠标的位置，距离屏幕上边边的距离

```



## 5.3. IE中的event

IE浏览器的event对象是window对象的属性，而不是事件的实参。

```
	document.onmousemove = function(event){
	    event = event || window.event;
	    document.innerHTML = event.clientX;
	}
```

## 5.4. 鼠标按键检测

event.button

//如果当前event是鼠标事件，则会有一个button属性，它是一个数字
//W3C 规定 event.button 取值如下:
```
0代表鼠标按下了左键
1代表按下了滚轮
2代表按下了右键
```

## 5.5. 键盘按键监测

如果按下的是左方向键：keyCode==37
如果按下的是右方向键：keyCode==39
如果按下的是上方向键：keyCode==38
如果按下的是下方向键：keyCode==40