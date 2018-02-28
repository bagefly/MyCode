function drag(){
    this.Bird = document.getElementById("bird");
    var own = this;
    this.Bird.onmousedown = function(e){
        e.preventDefault();
        own.detaX = e.clientX - own.Bird.offsetLeft;
        own.detaY = e.clientY - own.Bird.offsetTop;
        own.start();
        document.onmouseup = function(){
            own.stop();
        }
    }
    this.start = function(e){
        document.onmousemove = function(e){
            var x = e.clientX - own.detaX;
            var y = e.clientY - own.detaY;
            own.Bird.style.left = x + "px";
            own.Bird.style.top = y + "px";
        }
    }
    this.stop = function(){
        document.onmousemove = null;
    }
}
drag();