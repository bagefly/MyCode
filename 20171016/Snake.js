

/*

		属性								方法
蛇	     长度、颜色、位置、头、移动方向	    吃、移动、长大
食物         大小、颜色、位置			    改变位置 
游戏引擎     场景、蛇


(1,1) (1,2) (1,3) (1,4) (1,5)

把蛇中所有节点都存下来

一串元素：  数组  []
				数组中的元素：   每个节点的坐标，是1个整体，考虑使用对象
					{x: 0, y:0}


练习： 实现蛇的创建和刷新。10:15 对对


休息20分钟， 10:50 继续
*/


function Snake() {

	// 存储蛇 所有节点坐标， 同时也存储了蛇的长度  this.arr.length
	//  默认蛇头  this.arr[0]  节点
	this.arr = [
		{x: 5, y: 1},
		{x: 4, y: 1},
		{x: 3, y: 1},
		{x: 2, y: 1},
		{x: 1, y: 1}
	];

	// 当前移动方向：   left, right, down, up
	this.direct = "down";

	// 创建完就刷新到页面上
	this.fresh();
}



// 方法1： 更新到页面上  fresh 刷新  
Snake.prototype.fresh = function() {
	// 给所有蛇节点，都添加样式
	for (var i = 0; i < this.arr.length; i++)
	{
		// this.arr[i] 是蛇节点对象
		var x = this.arr[i].x;
		var y = this.arr[i].y;

		gGameBox.allTds[y][x].className = "snake"
	}
}

// 方法2： 移动
Snake.prototype.move = function() {

	// 蛇头坐标
	var x = this.arr[0].x;
	var y = this.arr[0].y;

	// 思路： 根据当前蛇的方向，来分情况处理
	if (this.direct == "right")
	{
		//   4      3       2     1      0
		// (1,1) (2,1) (3,1) (4,1) (5,1)
		// (2,1) (3,1) (4,1) (5,1) (6,1)
		//       (2,1) (3,1) (4,1) (5,1) (6,1)
		//  在 蛇头 增加新点 (6,1)， 删除蛇尾
		x++;

	}
    else if (this.direct == "down")
    {
		y++;
    }

	// 在蛇头增加新点
	this.arr.unshift({x: x, y: y});

	// 删除蛇尾
	this.arr.pop();

	// 将新蛇刷新到页面上
	this.fresh();
}
