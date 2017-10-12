
/*
					属性				方法
基本拖拽物体		节点元素		开始、移动、停止
*/

function DragBox(boxId) {
	if (boxId == undefined) {
		return;
	}

	// 属性
	this.ele = document.getElementById(boxId);

	var self = this;
	// 因为物体一开始创建就具有拖拽的能力，所以，一开始就进行按下的设置
	this.ele.onmousedown = function(e) {
		e.preventDefault();
		self.detaX = e.clientX - self.ele.offsetLeft;
		self.detaY = e.clientY - self.ele.offsetTop;

		// 开始
		self.start();

		// 停止
		document.onmouseup = function() {
			self.stop();
		}
	}
}

// 方法1： 开始
DragBox.prototype.start = function() {
	var self = this;

	document.onmousemove = function(e) {
		var x = e.clientX - self.detaX;
		var y = e.clientY - self.detaY;

		self.move(x, y)
	}
}

// 方法2： 移动
DragBox.prototype.move = function(x, y) {
	var self = this;
	self.ele.style.left = x + "px";
	self.ele.style.top = y + "px";
}

// 方法3： 停止
DragBox.prototype.stop = function() {
	document.onmousemove = null;
}
