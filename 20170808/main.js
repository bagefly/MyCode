
var testDom = document.getElementById("Test");
var testDomtop = 0;
var upToDown = true;
var height = 400 ;
var time = 0;
var g = 9.87*160;
var interval = 5;
var Vmax = 0;

setInterval(function(){
    console.log(testDomtop);
    time += interval;
    if(upToDown){
        testDomtop = 1/2*g*Math.pow(time/1000,2);
        
    }else{
        testDomtop = height - (Vmax*time/1000 - 1/2*g*Math.pow(time/1000,2));
        
    }
    if (testDomtop > height){
        Vmax = (time / 1000)*g;
        console.log(Vmax);
        time = 0;
        upToDown = !upToDown
    }
    if (testDomtop < 0){

        time = 0;
        upToDown = !upToDown;
    }
    testDom.style.top = testDomtop + "px";
},interval)
    
