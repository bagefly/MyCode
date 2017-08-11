var dot = document.getElementById("Test");
var dotTop =0;
var dotLeft = 0;
var width = 450;
var height = 450;
var upToDown = true;
var leftToRight = true;
var Vz = 5;
var angle = Math.random*(2*Math.PI);
setInterval(function(){
    var yV = Vz*Math.sin(angle)
    if(!(dotTop > height-50 && yV>0) && !(dotTop <0 && yV <0)){    
        dotTop += yV;
        dot.style.top = dotTop + "px" ;
    }
    var xV = Vz*Math.cos(angle);
    if(!(dotLeft >width-50 && xV>0) && !(dotLeft <0 && xV <0)){
        dotLeft += xV;
        dot.style.Left = dotLeft + "px" ;
    }
},10)


// 打开网页，小球往随机方向运动
// 速度为5px/10ms ， 
// 运动了100次后，变随机方向，并且，随机方向不能为原来的方向
// 不能出边界
//Math.random()*(2*Math.PI)