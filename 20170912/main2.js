(function(){
    var Container = document.querySelector('.container');
    var Box1 = document.querySelector('.container .box.box1');
    var Box2 = document.querySelector('.container .box.box2');
    var Box3 = document.querySelector('.container .box.box3');
    var Box4 = document.querySelector('.container .box.box4');
    var Box5 = document.querySelector('.container .box.box5');
    
    Container.onmousemove = function(e){         
        var x = e.clientX;
        var y = e.clientY;

        Box1.style.transform = 'translateX('+(x-600)*0.1 +'px)';
        Box2.style.transform = 'translateX('+(300-x)*0.2 +'px)';
        Box3.style.transform = 'translateX('+(x-400)*0.3 +'px) translateY('+(y-400)*0.3 +'px)';
        Box4.style.transform = 'translateX('+(100-x)*0.4 +'px)';
        Box5.style.transform = 'translateX('+(x-10)*0.5 +'px)';
    }
})()