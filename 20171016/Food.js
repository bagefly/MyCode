function Food(){
    this.x = 0;
    this.y = 0;
	this.change();
}
Food.prototype.show = function(){
    GameBox.allTds[this.y][this.x].className = "food";
    
}

// Food.prototype.isFoodInSnake = function() {
// 	var nodes = GameBox.snake.nodes;

// 	for (var i = 0; i < nodes.length; i++) {
// 		if (nodes[i].x == this.x && nodes[i].y == this.y) {

// 			return true;
// 		}
// 	}

// 	return false;
// }
Food.prototype.change = function(){
    this.x = parseInt(Math.random()*GameBox.cols);
	this.y = parseInt(Math.random()*GameBox.rows);
	this.show();
    // if (this.isFoodInSnake()) {
	// 	this.change();
	// }
}