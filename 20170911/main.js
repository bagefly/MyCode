(function(){

    var Bee = document.querySelector('#Bee');
    var Saying = document.getElementById('Saying');
    var time = null;
    var clearSaying = function(){
        Saying.innerHTML = "";
    }
    var arrOne = ["哦","嘿嘿","哎呀","快"];
    var arrTwo = ["逃喽","在哪呀","好气","飞呀飞"];
    var lastNumber1;
    var lastNumber2;

    Bee.addEventListener('mouseover',function(){

        var x = Math.random()*(window.innerWidth-150);
        var y = Math.random()*(window.innerHeight-150);
        Bee.style.left = x + "px";
        Bee.style.top = y + "px";

        clearTimeout(time);
        do{
            var newNumber1 = parseInt(Math.random()*arrOne.length);
            var newNumber2 = parseInt(Math.random()*arrTwo.length);
        }while(newNumber1 == lastNumber1 || newNumber2 == lastNumber2);
        Saying.innerHTML = arrOne[newNumber1] + arrTwo[newNumber2];
        lastNumber1 = newNumber1;
        lastNumber2 = newNumber2;
        time = setTimeout(clearSaying,2000);
    })
    
})()



