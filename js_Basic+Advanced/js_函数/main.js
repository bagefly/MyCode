// var dot = document.getElementById("Button");

// var i = 0 ;
// dot.onclick = function(){
//     console.log(i++);
// }

var Img = document.querySelector("img");
var buttonRight = document.querySelector("#b-right");
var buttonLeft = document.querySelector("#b-left");
var imgWidth = Img.clientWidth ;
var imgHeight = Img.clientHeight ;
var imgLeft = 0 ; // 信号量
var moveTime = 1.2 ;
var frameRate = 60 ;
var interTime = 1000/frameRate ;

Img.style.position = "relative";
buttonRight.onclick = function(){
    imgLeft = imgWidth ;
    var v = imgLeft*interTime / (moveTime*1000) ;
    var i = 0 ;
    var intervalRight = setInterval(function(){
        i += v;
        if(i <= imgLeft){
            Img.style.left = i + "px";
        }else{
            Img.style.left = imgLeft + "px";
            clearInterval(intervalRight);
        }
        console.log(i);
    },interTime)
}
buttonLeft.onclick = function(){
    // imgLeft = imgWidth ;
    // var u = imgLeft*interTime / (moveTime*1000) ;
    // var j = 0 ;
    // var intervalLeft = setInterval(function(){
    //     j += u ;
    //     if(j <= imgLeft){
    //         Img.style.left = (imgLeft-j) + "px" ;
    //     }else{
    //         Img.style.left = 0 + "px" ;
    //         clearInterval(intervalLeft);
    //     }
    imgleft = imgWidth;
    var u = imgLeft*interTime / (moveTime*1000) ;
    var j = imgleft;
    var intervalLeft = setInterval(function(){
        j -= u;
        if(j >= 0 ){
            Img.style.left = j + "px";
        }else{
            Img.style.left = 0;
            clearInterval(intervalLeft);
        }
    },interTime)
        console.log(j) ;
    
}