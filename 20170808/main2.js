var testDom1 = document.getElementById("Test1");
var testDom2 = document.getElementById("Test2");
var testDom3 = document.getElementById("Test3");
var testDom4 = document.getElementById("Test4");
var testDom5 = document.getElementById("Test5");
var testDom6 = document.getElementById("Test6");
var g =9.87 * 160;

var randomBgcolr = function(dom){
    var r = Math.round(Math.random()*100+100);
    var g = Math.round(Math.random()*100+100);
    var b = Math.round(Math.random()*100+100);
    dom.style.backgroundColor ="rgb("+r+","+g+","+b+")";
}

var bindBall = function(dom,g,vx){

    var domTop = 0;
    var domLeft = 0;
    var upToDown = true; // true 代表从上往下运动
    var leftToRight = true;
    var time = 0;
    var height = 550;
    var width = 900;
    var interval = 10;
    var Vmax = 0;
    randomBgcolr(dom);

    setInterval(function(){
        time += interval;

        if(upToDown){
            domTop = 0.5*g*Math.pow(time/1000,2);
        }else{
            domTop = height - (Vmax*time/1000 - 0.5*g*Math.pow(time/1000,2));
        }

        if(domTop > height){

            Vmax = (time/1000)*g;
            console.log(Vmax);
            time = 0;
            upToDown = !upToDown;
        }

        if(domTop < 0){
            time = 0;
            upToDown = !upToDown;
        }

        if (leftToRight){
            domLeft += vx;
        }else{
            domLeft -= vx;
        }
        if(domLeft<0 || domLeft > width){
            leftToRight = !leftToRight;
        }

        dom.style.top = domTop + "px";
        dom.style.left = domLeft + "px";

    },interval)

}

bindBall(testDom1,g,1);
bindBall(testDom2,g,2);
bindBall(testDom3,g,3);
bindBall(testDom4,g,4);
bindBall(testDom5,g,5);
bindBall(testDom6,g,6);

