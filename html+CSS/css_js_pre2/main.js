var boxInit = function(dom){
    
    // 设置初始位置
    dom.style.left = Math.random()*400 + 50 + 'px';
    // 练习  50 - 450
    dom.style.top = Math.random()*200 + 50 + 'px';
    // 练习  50 - 250

    // 绑定事件
    dom.onmousedown = function(){

        dom.style.zIndex = 100;
        // 练习  鼠标点击拼图块，块变大，放下的时候缩小
        document.onmousemove = function(e){
            // 让dom跟随鼠标移动
            dom.style.left = e.clientX - 50 + 'px';
            dom.style.top = e.clientY - 50 + 'px';
        }
        
    }

    /**
     * 1.鼠标弹起的时候，dom的z-index 重置为0
     * 2. 判断当前坐标，按照网格对齐
     * 3. 鼠标在document上移动，不做任何处理
     * 异步操作
     */
    dom.onmouseup = function(){
        dom.style.zIndex = 0;
        var x = parseInt(dom.style.left);
        var y = parseInt(dom.style.top);
        
        if(x%10>5){
            dom.style.left = x - x%10 + 10 + 'px';
        }else{
            dom.style.left = x - x%10 + 'px';
        }

        if(y%10>5){
            dom.style.top = y - y%10 + 10 + 'px';
        }else{
            dom.style.top = y - y%10 + 'px';
        }

        document.onmousemove = null;
    }

}

var Box1 = document.getElementById('Box1');
var Box2 = document.getElementById('Box2');
var Box3 = document.getElementById('Box3');
var Box4 = document.getElementById('Box4');
var Box5 = document.getElementById('Box5');
var Box6 = document.getElementById('Box6');

boxInit(Box1);
boxInit(Box2);
boxInit(Box3);
boxInit(Box4);
boxInit(Box5);
boxInit(Box6);