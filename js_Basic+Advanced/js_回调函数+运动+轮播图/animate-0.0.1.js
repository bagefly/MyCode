

/*
 * 函数名 animate
 *    功能： 采用动画匀速改变属性到目标值
 *    参数：
 *           oBox     对象       需要改变的物体
 *           attr     字符串     改变的属性名
 *           iTarget  整数       目标值
 *           callback 函数       动画完成之后，调用的函数
 */

function animate(oBox, attr, iTarget, callback)
{
	clearInterval(oBox.timer);

	oBox.timer = setInterval(function(){
		
		// 1. 得到物体当前值
		var current = parseFloat( getStyle(oBox, attr) );

		//   透明度的特殊处理
		if (attr == "opacity") {
			current *= 100;
		}

		// 2. 判断
		if (Math.abs(current - iTarget) <= 10) {
			clearInterval(oBox.timer);

			// 调用回调函数
			callback && callback();

			return ;
		}

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