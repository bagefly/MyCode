var dot = document.getElementById("Test");
var dotTop =0;
var dotLeft = 0;
var width = 450;
var height = 450;
var upToDown = true;
var leftToRight = true;
var Vz = 5;
var angle = Math.random()*(2*Math.PI);
var count = 0;
setInterval(function(){
    count++;
    var yV = Vz*Math.sin(angle) ;
    var xV = Vz*Math.cos(angle) ;
    if(upToDown){
        dotTop += yV ;
        if(dotTop > height){
            dot.style.top = height + "px";
        }else{
            dot.style.top = dotTop + "px";
        }
    }else{
        dotTop -= yV ;
        if(dotTop < 0){
            dot.style.top = 0;
        }else{
            dot.style.top = dotTop + "px";
        }
    }
    if(leftToRight){
        dotLeft += xV ;
        if(dotLeft > width){
            dot.style.left = width + "px";
        }else{
            dot.style.left = dotLeft + "px";
        }
    }else{
        dotLeft -= xV ;
        if(dotLeft < 0){
            dot.style.left = 0;
        }else{
            dot.style.left = dotLeft + "px";
        }

    }
    if(dotTop > height || dotTop < 0){
        upToDown = ! upToDown;
    }
    if(dotLeft > width || dotLeft < 0){
        leftToRight = ! leftToRight;
    }
    if(count % 100 == 0){
        angle = Math.random()*(2*Math.PI) ;
    }
},10)


// 打开网页，小球往随机方向运动
// 速度为5px/10ms ， 
// 运动了100次后，变随机方向，并且，随机方向不能为原来的方向
// 不能出边界
//Math.random()*(2*Math.PI)