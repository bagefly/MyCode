var son = document.getElementById(Son);

var sonTop = 0;
var sonLeft = 0;

setInterval(function(){

    var hv = Math.random()*20-10;
    //让小块在父容器不越过边界，同时满足上边距在10~250范围内，让运动速度方向改变。
    if(!(sonTop<10&&hv<0) && !(sonTop>250 && hv>0)){
        sonTop += hv;
        Son.style.top = sonTop + "px";
    }
    
    var xv = Math.random()*20-10;
    //同时水平方向，
    if(!(sonLeft<10 && xv<0) && !(sonLeft>360 && xv>0)){
        sonLeft += xv;
        Son.style.left = sonLeft + "px";
    }

},200)

/* 判断 三个数中最大的那个数 */
// var max = function(a,b,c){

//         (a>b)?    (a>c)?console.log(a):console.log(c)   :     (b>c)?console.log(b):console.log(c)
//     }

/* 列出1~100之间能被7整除的数 */
// for(var i=1; i<=100 ; i++){
//     if(i%7==0){
//         console.log(i);
//     }
// }


    