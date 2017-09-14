// document.write("Finally! You are here!");
// document.write("<br>");
// document.write("Why not ?")

alert("式的计算结果为"+((123+45*78)/(34+543)-9*(324-34)));


// 计算华氏温度

var tem = parseFloat(prompt("请输入一个摄氏温度"));

var tem2 = 9*tem/5 + 32;

alert("对应的华氏温度是"+tem2);

// 计算幂运算

var a = Math.pow((23+Math.pow(5,7))/45,2);
alert("该式的计算结果为"+a);

// 计算边长为length的正六边形的面积

var length = parseFloat(prompt("请输入一个边长"));

var squ = 3/2*Math.sqrt(3)*Math.pow(length,2);

alert("该正六边形的面积为"+squ);