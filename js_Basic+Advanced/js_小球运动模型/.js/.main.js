// var r = [204,99,120];
// var g = [250,90,130];
// var b = [139,88,140];

// for(var i=0;i<r.length;i++){
//     for(var j=0;j<g.length;j++){
//         for(var k=0;k<b.length;k++){
//             var Cont = document.getElementById("Container")
//             var box = document.createElement('div');
//             box.style.width = "80px";
//             box.style.height = "80px";
//             box.style.float = "left";
//             box.style.backgroundColor = "rgb("+r[i]+","+g[j]+","+b[k]+")";
//             Cont.appendChild(box);
//         }
//     }
// }

// 



// var guessNumber = 67;

// var a;
// do{

//     if(a!=undefined && a !=0){
      
//         if(a>guessNumber){
//             a = prompt("你输的数字"+a+太大)
//         }else if(a< g){}
    
    
        
//     }

// }while(a != guessNumber)
//         alert("恭喜你答对了");


// var line = "";
// for(var row=1;row<=9;row++){
//     if(row == 5) continue;
//     for(var col=1; col<= row;col++){
//         if(col == 5) continue;
//         line = line + col+" x "+row+" = "+col*row+"\t" ; // 行尾分号
//     }
//     line += "\n"
// }
// console.log(line);

// 1~9之间，不带有5的乘法


// 输出，rgb的每个值都大于50和小于200的组合，且不能有重复。

// var min = 0;  不用声明
// var max = 0;
var colorChoose = function(min,max){
var Cont = document.getElementById("Container");
    for(var r = min; r<max ;r++){
        for(var g = min; g<max; g++){
            if(r == g) continue;
            for(var b = min; b<max; b++){
                if(r==b || g==b) continue;
                var box = document.createElement("div");
                box.style.width = "50px";
                box.style.height = "50px";
                box.style.float = "left";
                box.style.backgroundColor = "rgb("+r+","+g+","+b+")";
                Cont.appendChild(box);
                console.log("rgb("+r+","+g+","+b+")");
            }
        }
    }
}
colorChoose(30,50);



