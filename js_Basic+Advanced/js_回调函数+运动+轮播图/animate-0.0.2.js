/*
 * 函数名：animate
 * 功能：采用动画匀速改变对象的某些属性的值到目标值
 * 参数：
 *          oBox    对象      需要改变的物体对象
 *          oAttr   对象      所有需要改变的属性 和 对应的目标值
 *          callback函数      动画完成之后，调用的函数
 * 
 * 
 *          定时器函数中：
 *          同时改变多个属性
 *          。。 遍历所有属性
 *              （1） 先得到当前值
 *              （2） 判断当前值是否到达目标值
 *                        当前属性遍历结束，继续下一个属性变化
 *              （3） 更新当前属性的值
 *          如何知道动画完成
 *          。。所有属性都达到目标值了
 *                  1. 设置1个变量 flag = true
 *                  2. 遍历所有属性
 *                          如果有1个属性没有达到目标 -> flag = false
 *                  3. 判断flag
 *                          如果为true  说明所有属性的值都达到目标值了
*/
function animate(oBox, oAttr, callback) {
    clearInterval(oBox.timer);
    oBox.timer = setInterval(function () {

        // 每次定时器开始，都会重置为true
        var flag = true;
        for (var attr in oAttr) {
            // 得到物体当前的属性值
            var current = parseFloat(getComputedStyle(oBox, attr));
            // 透明度的特别处理
            if (attr == "opcaity") {
                current *= 100;
            }

            // 判断
            var iTarget = oAttr[attr];
            if (Math.abs(iTarget - current) <= 10) {
                // 跳过本次循环，进入下次循环
                continue;
            }
            // 如果当前属性值为达到目标值
            flag = false;

            // 更新速度值和变化量
            var sp = (current > iTarget) ? -10 : 10;
            current += sp;

            if (attr = "opacity") {
                oBox.style.opacity = current / 100;
                // IE 低版本
                oBox.style.filter = "alpha(opacity=" + current + ")";
            } else {
                oBox.style[attr] = current + "px";
            }
        }
        if (flag == true) {
            // 终止定时器
            clearInterval(oBox.timer);

            callback && callback();

            // 因为下面没代码了，return 可写可不写
            // return ;
        }
    }, 50)
}
function getStyle(oBox, attr) {
    if (window.getComputedStyle) {
        var oStyle = getComputedStyle(oBox);
    }
    else {
        var oStyle = oBox.currentStyle;
    }

    return oStyle[attr];
}
/*
 *函数名： 
 * 
*/