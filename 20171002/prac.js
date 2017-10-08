var num1 = document.getElementById("num1");
var info1 = document.getElementById("info1")
var cde1 = function(){
    var aa = parseFloat(num1.value);
    if(aa == 0){
        info1.value = "等于0";
    }else if(aa < 0){
        info1.value = "小于0";
    }else{
        info1.value = "大于0";
    }
}
//
var num2 = document.getElementById("num2");
var info2 = document.getElementById("info2")
var cde2 = function(){
    var n = parseFloat(num2.value);
    if(n % 2 == 0){
        info2.value = n + "是偶数";
    }else{
        info2.value = n + "是奇数";
    }
}
//
var Height = document.getElementById("Height");
var Weight = document.getElementById("Weight");
var info3 = document.getElementById("info3");
var fight = function(){
    var height = parseFloat(Height.value);
    var weight = parseFloat(Weight.value);
    var weightTwo = (height - 108)　* 2;
    var precison = weight * 2 - weightTwo ;
    if (-10 <= precison && precison <= 10){
        info3.value = "体重适合" ;
    }else{
        info3.value = "体重不适合" ;
    }
}
//
var Year = document.getElementById("Year");
var info4 = document.getElementById("info4");
var fff = function(){
    var year = parseFloat(Year.value);
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)){
        info4.value = year + "年是闰年";
    }else{
        info4.value = year + "年不是闰年";
    }
}
