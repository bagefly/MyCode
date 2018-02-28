function DragBox(boxId) {
<<<<<<< HEAD:20171012/task/DragBox1.js
    if (boxId == undefined) {
		return;
	}
    this.ele = document.getElementById(boxId);
    console.log(this.ele);
=======
    //判断一下传入的对象元素，是否定义
    if (boxId == undefined) {
        return;
    }
    //  属性，获取节点元素
    this.ele = document.getElementById(boxId);
    console.log(this.ele); //可以查看是否为对象
>>>>>>> d6a174efdd5073aff8bef5ca2e68f32adc4c0757:20171012/task/DragBox.js
    var self = this;
    // 因为物体一开始创建就具有拖拽的能力，所以，一开始就进行鼠标按下的设置
    this.ele.onmousedown = function (e) {
        e.preventDefault();  // 阻止默认事件发生
        self.detaX = e.clientX - self.ele.offsetLeft;
        self.detaY = e.clientY - self.ele.offsetTop;
        // 开始
        self.start();
        // 停止
        document.onmouseup = function () {
            self.stop();
        }
    }
}
// 给构建函数的的原型添加方法 1： 控制开始
DragBox.prototype.start = function () {
    var self = this;
    document.onmousemove = function (e) {
        var x = e.clientX - self.detaX;
        var y = e.clientY - self.detaY;
<<<<<<< HEAD:20171012/task/DragBox1.js
        // self.ele.style.left = x + "px";
        // self.ele.style.top = y + "px";
        
        self.move(x, y)
    }
}
DragBox.prototype.move = function(x, y) {
	var self = this;
	self.ele.style.left = x + "px";
	self.ele.style.top = y + "px";
}
=======
        self.move(x, y)
    }
}
// 给构建函数的的原型添加方法 2： 控制移动
DragBox.prototype.move = function(x, y) {
    var self = this;
    self.ele.style.left = x + "px";
    self.ele.style.top = y + "px";
}
// 给构建函数的的原型添加方法 3： 控制停止
>>>>>>> d6a174efdd5073aff8bef5ca2e68f32adc4c0757:20171012/task/DragBox.js
DragBox.prototype.stop = function () {
    document.onmousemove = null;
}