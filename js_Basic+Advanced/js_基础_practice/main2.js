/*
* 9 * 9乘法表
*/
for(var row=1;row<=9;row++){
        var line = "";
    for(var col=1;col<=row;col++){
       line =line + col +"x"+ row + "=" + row*col +"\t" ;
        
 
    }
    // line += "\n";
    console.log(line);
}

/*
*   添加HTML元素
*   呈现色板效果

*/
    for(var r=0;r<256;r+=25){
        for(var g=0;g<256;g+=25){
            for(var b=0;b<256;b+=25){
                var Cont = document.getElementById("Container");
                var tempElement = document.createElement("div");
                tempElement.style.width = "10px";
                tempElement.style.height = "10px";
                tempElement.style.backgroundColor = "rgb("+r+","+g+","+b+")";
                tempElement.style.float = "left";
                Cont.appendChild(tempElement);
            }
        }
    
    }

    



