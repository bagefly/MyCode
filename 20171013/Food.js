function Food(){
    this.x = 0;
    this.y = 0;
    this.change();
}
Food.prototype.show = function(){
    GameBox.allTds[this.y][this.x].className = "food";
    
}
Food.prototype.change = function(){
    this.x = parseInt(Math.random()*GameBox.cols);
    this.y = parseInt(Math.random()*GameBox.rows);
    this.show();
}