function DragBox(Boxid) {
    this.ele = document.getElementById(Boxid);
    console.log(this.ele);
    var self = this;
    this.ele.onmousedown = function (e) {
        e.preventDefault();  // 阻止默认事件发生
        self.detaX = e.clientX - self.ele.offsetLeft;
        self.detaY = e.clientY - self.ele.offsetTop;
        self.start();
        document.onmouseup = function () {
            self.stop();
        }
    }
}
DragBox.prototype.start = function () {
    var self = this;
    document.onmousemove = function (e) {
        var x = e.clientX - self.detaX;
        var y = e.clientY - self.detaY;
        self.ele.style.left = x + "px";
        self.ele.style.top = y + "px";
        
        // self.move(x, y)
    }
}
// DragBox.prototype.move = function(x, y) {
// 	var self = this;
// 	self.ele.style.left = x + "px";
// 	self.ele.style.top = y + "px";
// }
DragBox.prototype.stop = function () {
    document.onmousemove = null;
}