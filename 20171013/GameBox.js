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
        this.snake = new Snake();
        this.snake.bindEvent();
        this.food = new Food();

        var self = this;
		this.timer = setInterval(function() {

			// 先刷新之前面板的样式
			GameBox.refresh();

			self.food.show();
			self.snake.update();

			if (self.food.isFoodInSnake()) {
				self.snake.growup();
				self.food.change();
			}			

		}, 500);

		return this;
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
    }
    

};