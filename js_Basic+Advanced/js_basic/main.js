// document.write("Time is a knife!"+"</br>")


/* 变量
// 字面量
var a = 5;
document.write(a);
*/

/*
// 加、减、乘、除、取余 运算

var a = 5 ; 
var b = 2 ;

document.write(a + b +"<br>");
document.write(a - b +"<br>");
document.write(a * b +"<br>");
document.write(a / b +"<br>");
document.write(a % b +"<br>");
*/
function acd(){

    var a = number1.value;
    var b = number2.value;
    // document.write(a*1 + b*1);
    document.write(parseFloat(a) + parseFloat(b));

    // toFixed 代表保留几位小数（四舍五入的方式）
    // (2) 代表保留2位小数
    // toFixed(2)
    document.write("<br>")
    // parseInt  转换成整数（舍弃小数部分）
    a = parseInt(a);
    document.write(a +"<br>");

    // Math 方法  乘方  Math.pow(2,3)
    document.write(Math.pow(a,3));
}

