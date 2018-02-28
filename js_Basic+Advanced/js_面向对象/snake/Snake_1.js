function Snake(){
    
    this.arr = [
        {x:1,y:1},
        {x:2,y:1},
        {x:3,y:1},
        {x:4,y:1},
        {x:5,y:1}
    ];

    this.direct = "right";
    this.fresh();
}

Snake.prototype.fresh = function(){
    for(var i = 0;i < this.arr.length;i++){

        var x = this.arr[i].x;
        var y = this.arr[i].y;

        GameBox.allTds[y][x].className = "node";
    }
}

// 方法2 移动

Snake.prototype.move = function(){
    // 蛇头坐标
    var x = this.arr[0].x;
    var y = this.arr[0].y;

    if(this.direct == "right"){
        x++;
    }else if(this.direct == "left"){
        x--;
    }else if(this.direct == "down"){
        y++;
    }else if(this.direct == "up"){
        y--;
    }

    if(x < 0 || x == GameBox.allTds.cols || y < 0 || y == GameBox.allTds.rows){
        alert("GG啦");
        clearInterval(GameBox.timer);
        return ;
    }

    if(x == GameBox.food.x && GameBox.food.y){
        this.arr.unshift({x:x,y:y});

        GameBox.food.change();

        this.fresh();

        return;
    }

    this.arr.unshift({x:x,y:y});

    this.arr.pop();

    this.fresh();
}

