(function(){
    var Box = document.querySelector('.box')
    var Container = document.querySelector('.box .container');
    var Blank = document.querySelector('.box .blank');
    var Word = document.querySelector('.box .word');
    
    Box.onmousemove = function(e){         
        var x = e.clientX;
        var y = e.clientY;
        
        var rx = 10*(x-160)/100;
        var ry = -10*(y-240)/100;

        Container.style.transform = 'rotateY('+rx+'deg) rotateX('+ry+'deg)' ;

        Blank.style.transform = Container.style.transform ;
        Blank.style.left = 25+5*(x-160)/100 +'px';
        Blank.style.top = 25+5*(x-240)/100 +'px';

        Word.style.transform = Container.style.transform ;
        Word.style.left = 30+10*(x-160)/100 +'px';
        Word.style.bottom = 160-10*(x-240)/100 +'px';
    }  
    
})()