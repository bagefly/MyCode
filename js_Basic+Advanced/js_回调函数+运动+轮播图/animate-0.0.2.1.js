

/*
 * 函数名 animate
 *    功能： 采用动画匀速改变属性到目标值
 *    参数：
 *           oBox     对象       需要改变的物体
 *           oAttr    对象       所有需要改变的属性 和 对应的目标值
 *           callback 函数       动画完成之后，调用的函数
 */

/*
//                  定时器函数中：
							同时改变多个属性
							   1. 遍历所有属性
									 （1） 先得到当前值
									 （2） 判断当前值是否到达目标值
												当前属性遍历结束，继续下一个属性变化
									 （3） 更新当前属性的值

					   如何知道动画完成？
							所有属性都达到目标值了
							   1. 设置1个变量 flag = true
							   2. 遍历所有属性
									如果有1个属性没有到达目标 -> flag = false
							   3. 判断flag
									 如果为 true 说明所有属性都达到目标了

*/

function animate(oBox, oAttr, callback)
{
	clearInterval(oBox.timer);

	oBox.timer = setInterval(function(){

		// 每次定时器来时，都会重置为 true
		var flag = true;

		// 遍历所有属性
		for (var attr in oAttr )
		{
			// 1. 得到物体当前值
			var current = parseFloat( getStyle(oBox, attr) );

			//   透明度的特殊处理
			if (attr == "opacity") {
				current *= 100;
			}

			// 2. 判断
			var iTarget = oAttr[attr];
			if (Math.abs(current - iTarget) <= 10) {
				// 跳过本次循环，继续下一次循环
				continue ;
			} 

			// 说明当前属性还没有到目标值，所以将flag变成false
			flag = false;

			// 3. 更新速度值
			var speed = (current > iTarget) ? -10 : 10;
	
			// 4. 更新位置
			current += speed;

			if (attr == "opacity") {
				oBox.style.opacity = current / 100;
				// 兼容低版本IE
				oBox.style.filter = "alpha(opacity=" + current + ")"
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


/*
 * 函数名： getStyle
 *    作用： 获取物体的样式值，兼容低版本IE
 *    参数：
 *         oBox   对象    需要获取样式的物体
 *         attr   字符串  需要获取的属性字符串
 *    返回值： 物体获取的样式属性值
 */

function getStyle(oBox, attr)
{
	if (window.getComputedStyle)
	{
		var oStyle = getComputedStyle(oBox);
	}
	else
	{
		var oStyle = oBox.currentStyle;
	}

	return oStyle[attr];
}