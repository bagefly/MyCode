var month = prompt("请你输入一个月份") ;
switch(month){

    case "2":{
        alert("若果今年是闰年，那么你刚输入的2月有29天，否则，这个2月有28天。");
    }

    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":{
        alert("你输入的这个月份有31天");
    }

    case "4":
    case "6":
    case "9":
    case "11":{
        alert("你输入的这个月份有30天");
    }
}