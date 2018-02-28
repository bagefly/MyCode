function Snake() {
    // 当前蛇的朝向
    this.direct = "right";

    // 蛇的元素 身体
    this.nodes = [];

    // 初始化
    this.init();
    this.render(); //渲染
}

//初始化
Snake.prototype.init = function () {
    // 初始化5个蛇节点位置
    for (var i = 0; i < 5; i++) {
        var node = {};

        node.x = 5 - i;
        node.y = 1;
        this.nodes.push(node);
    }
}

// 渲染
Snake.prototype.render = function () {
    for (var i = 0; i < this.nodes.length; i++) {

        var x = this.nodes[i].x;
        var y = this.nodes[i].y;
        // y是行的编号， x是列的编号
        if (x < GameBox.cols && y < GameBox.rows && x >= 0 && y >= 0) {
            GameBox.allTds[y][x].className = "node";
        }
    }
    if (!this.check()) {
        clearInterval(GameBox.timer);
    
        alert("哦吼！Gameover！");
    
        return ;
    }
}


// 判断蛇头是否到达边界
Snake.prototype.check = function () {

    var x = this.nodes[0].x;
    var y = this.nodes[0].y;

    console.log(x, y);

    if (x < 0 || x >= GameBox.cols) {
        return false;
    }
    if (y < 0 || y >= GameBox.rows) {
        return false;
    }
    return true;
}
// 自动更新位置
Snake.prototype.update = function () {
    // 去掉最旧的那个元素
    this.nodes.pop();

    // 再增加一个
    this.growup();
    this.render();
}
//吃了食物后，蛇身增加
Snake.prototype.growup = function () {

    var x = this.nodes[0].x;
    var y = this.nodes[0].y;

    switch (this.direct) {
        case "top":
            this.nodes.unshift({
                x: x,
                y: y - 1
            });
            break;
        case "right":
            this.nodes.unshift({
                x: x + 1,
                y: y
            });
            break;
        case "bottom":
            this.nodes.unshift({
                x: x,
                y: y + 1
            });
            break;
        case "left":
            this.nodes.unshift({
                x: x - 1,
                y: y
            });
            break;
        default:
            break;
    }
    this.render();
}

// 绑定事件处理函数
Snake.prototype.bindEvent = function () {

    var self = this;

    window.onkeydown = function (e) {
        e = e || window.event;

        console.log(e.keyCode);

        switch (e.keyCode) {

            case 38:

                if (self.direct == "bottom") {
                    return;
                }
                self.direct = "top";

                break;

            case 39:

                if (self.direct == "left") {
                    return;
                }
                self.direct = "right";

                break;

            case 40:

                if (self.direct == "top") {
                    return;
                }
                self.direct = "bottom";

                break;

            case 37:

                if (self.direct == "right") {
                    return;
                }
                self.direct = "left";

                break;

            default:
                break;
        }
    }
}

