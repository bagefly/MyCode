
for(i=1;i<=9;i++){
    var multiply = function(i,n) {
        return i+" × "+ n +"="+i*n+" "
    }
    
    var oneLine = multiply(i,1);
    if(i<=1){
        document.write(oneLine+"<br>");
    }
    var twoLine = multiply(i,2);
    if(i<=2){
        console.log(two)
        document.write(twoLine);
    }
    var threeLine = multiply(i,3);
    if(i<=3){
        document.write(threeLine);
    }
    var fourLine = multiply(i,4);
    if(i<=4){
        document.write(fourLine);
    }
    var fiveLine = multiply(i,5);
    if(i<=5){
        document.write(fiveLine);
    }
    var sixLine = multiply(i,6);
    if(i<=6){
        document.write(sixLine);
    }
    var sevenLine = multiply(i,7);
    if(i<=7){
        document.write(sevenLine);
    }
    var eightLine = multiply(i,8);
    if(i<=8){
        document.write(eightLine);
    }
    var nineLine = multiply(i,9);
    if(i<=9){
        document.write(nineLine);
    }


}