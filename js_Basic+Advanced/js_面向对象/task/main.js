function FireFly(){
    //创建萤火div元素
    this.fire = document.createElement("div");
    //给创建的元素添加类名，便于附上css属性
    this.fire.className = "firefly";
    //创建元素
    document.body.appendChild(this.fire);
    var self = this;
    this.fly = function(){
        var x = Math.random() * 300; // 水平改变的终止位置
        var y = Math.random() * 600; // 垂直方向改变的终止位置
        //运动函数传参
        animate(this.fire,{"left": x , "top": y},3000,"QuartEaseOut",function(){
            self.fly();
        })
    }
}
new FireFly().fly();
new FireFly().fly();
new FireFly().fly();
new FireFly().fly();
new FireFly().fly();