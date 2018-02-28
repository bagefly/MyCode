// 第一题
var a;
a = (123 + 45 * 78) / (34 + 543) - 9 * (324 - 34) ;
document.write("第一题的结果为"+ a + "<br/>");

// 第二题
var tem ;
tem = parseFloat(prompt("请输入一个摄氏温度")) ;
tema = 9 / 5 * tem + 32 ;
alert("摄氏温度" +tem+ "对应的华氏温度是"+ tema);

//第三题

var num;
num = Math.pow(((23 + Math.pow(5,7) / 45)) , 2);
alert("第三题的结果为"+ num);

//第四题
var b = parseFloat(prompt("请输入一个边长度"));
var squ = 3 * Math.sqrt(3) * Math.pow(b,2) / 2;
alert("该边长的正六边形的面积为"+ squ);

//第五题
/*
思路：星期是7天一循环，今天星期二，一天后星期三，...，五天后星期七
超过5天，起始的星期二加上天数会大于7，那就对7取余数，看余数，就是星期几
*/
var day = parseFloat(prompt("请输入一个天数"));
var dat;
if(day <= 5){
    dat = day + 2;
    alert(day+"天后星期"+dat);
}else{
    dat = (day + 2) % 7 ;
    alert(day+"天后星期"+dat);
}

//第六题
var number = parseFloat(prompt("请输入一个三位数"));
var c = number % 10;
var d = parseInt(number % 100 / 10) ;
var e = parseInt(number / 100);
var sum = c + d + e ;
alert(number + "的各个位数和为" + sum);