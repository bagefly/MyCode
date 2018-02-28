var L15 = document.getElementById('L15');
var L25 = document.getElementById('L25');
var L50 = document.getElementById('L50');
var L100 = document.getElementById('L100');
var Line = document.getElementById('Line');

var bindEvent = function(dom){
    dom.onclick = function(){
        var per = parseInt(this.innerHTML) / 100;  // "50%"
        Line.style.width = 600 * per + 'px';
    }
}

bindEvent(L15);
bindEvent(L25);
bindEvent(L50);
bindEvent(L100);