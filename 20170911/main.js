(function(){

    var Bee = document.querySelector('#Bee');

    Bee.addEventListener('mouseover',function(){

        var x = Math.random()*(window.innerWidth-150);
        var y = Math.random()*(window.innerHeight-150);
        Bee.style.left = x + "px";
        Bee.style.top = y + "px";
    })

})()

var Saying = document.getElementById('Saying');

Saying.style.width = "150px";
Saying.style.height = "50px";
Saying.style.backgroundColor = "#f20000"
Saying.style.position = "absolute";
Saying.style.top = "-50px";
Saying.style.left = "30px";
Saying .style.display= "block";
function print(){
    var arrOne = ["哦","嘿嘿","哎呀","快"];
    var arrTwo = ["逃喽","在哪呀","好气","飞呀飞"];
    var Saying = document.getElementById('Saying');
    Saying.innerHTML = arrOne[parseInt(Math.random()*3)] + arrTwo[parseInt(Math.random()*3)];
}
document.write(print());

