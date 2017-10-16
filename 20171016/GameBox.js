var GameBox = {
    rows: 10,
    cols: 10,
    allTds : [],
    snake : null,
    food : null,
    timer : null,
    start: function () {
        //  var oTable = document.createElement("table");

        //  for(var i = 1 ; i <= GameBox.rows; i++){
        //     var oTr = document.createElement("tr");

        //     for(var j = 1; j <=GameBox.cols; j++){
        //         var oTd = document.createElement("td");
        //         oTr.appendChild(oTd);
        //     }
        //     oTable.appendChild(oTr);
        //  }
        //  document.body.appendChild(oTable);
        GameBox.init();// 游戏初始化
		
		this.food = new Food();
		
		this.snake = new Snake();
		
        // this.snake.bindEvent();
		GameBox.timer = setInterval(function(){
			GameBox.refresh();
			GameBox.food.show();
			GameBox.snake.move();
		},1000)

		      // var self = this;
		// this.timer = setInterval(function() {

		// 	// 先刷新之前面板的样式
		// 	GameBox.refresh();

		// 	self.food.show();
		// 	self.snake.update();

		// 	if (self.food.isFoodInSnake()) {
		// 		self.snake.growup();
		// 		self.food.change();
		// 	}			

		// }, 500);

		// return this;
    },
    init: function () {
        var oTable = document.createElement("table");

        for (var i = 0; i < GameBox.rows; i++) {
            var oTr = document.createElement("tr");
            var arr = [];
            for (var j = 0; j < GameBox.cols; j++) {
                var oTd = document.createElement("td");
                oTr.appendChild(oTd);
                arr.push(oTd);
            }
            GameBox.allTds.push(arr);
            oTable.appendChild(oTr);
        }
        document.body.appendChild(oTable);
    },

    // 清空之前的渲染内容
	refresh: function() {
		console.log("Gamebox refresh");

		for (var i = 0; i < this.rows; i++) {
			for (var j = 0; j < this.cols; j++) {
				this.allTds[i][j].className = "";				
			}
		}		
	},
	
	keyControl : function(){
		window.onkeydown = function(e){
			var c = e.keyCode;
			if (c == 37)
			{
				if(GameBox.snake.direct == "right"){
					return ;
				}
				// 左
				GameBox.snake.direct = "left";
			}
			else if (c == 38)
			{
				if(GameBox.snake.direct == "down"){
					return ;
				}
				// 上
				GameBox.snake.direct = "up";
			}
			else if (c == 39)
			{
				if(GameBox.snake.direct == "left"){
					return ;
				}
				// 右
				//  改变蛇的方向
				GameBox.snake.direct = "right";
			}
			else if (c == 40)
			{
				if(GameBox.snake.direct == "up"){
					return ;
				}
				// 下
				GameBox.snake.direct = "down";
			}

			GameBox.snake.move();

		}
	}
    

};