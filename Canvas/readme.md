# canvas 元素的属性及方法

### 颜色、样式、阴影 

#### 属性

fillStyle	    设置或返回用于填充绘画的颜色、渐变或模式
strokeStyle	    设置或返回用于笔触的颜色、渐变或模式
shadowColor	    设置或返回用于阴影的颜色
shadowBlur	    设置或返回用于阴影的模糊级别
shadowOffsetX	设置或返回阴影距形状的水平距离
shadowOffsetY	设置或返回阴影距形状的垂直距离

#### 方法

createLinearGradient()	创建线性渐变（用在画布内容上）
createPattern()	        在指定的方向上重复指定的元素
createRadialGradient()	创建放射状/环形的渐变（用在画布内容上）
addColorStop()	        规定渐变对象中的颜色和停止位置

### 线条样式

lineCap	        设置或返回线条的结束端点样式
lineJoin	    设置或返回两条线相交时，所创建的拐角类型
lineWidth	    设置或返回当前的线条宽度
miterLimit	    设置或返回最大斜接长度

### 矩形

rect()	        创建矩形
fillRect()	    绘制“被填充”的矩形
strokeRect()	绘制矩形（无填充）
clearRect()	    在给定的矩形内清除指定的像素

### 路径

fill()	        填充当前绘图（路径）
stroke()	    绘制已定义的路径
beginPath()	    起始一条路径，或重置当前路径
moveTo()	    把路径移动到画布中的指定点，不创建线条
closePath()	    创建从当前点回到起始点的路径
lineTo()	    添加一个新点，然后在画布中创建从该点到最后指定点的线条
clip()	        从原始画布剪切任意形状和尺寸的区域
quadraticCurveTo()	创建二次贝塞尔曲线
bezierCurveTo()	创建三次方贝塞尔曲线
arc()	        创建弧/曲线（用于创建圆形或部分圆）
arcTo()	        创建两切线之间的弧/曲线
isPointInPath()	如果指定的点位于当前路径中，则返回 true，否则返回 false

### 转换

scale()	        缩放当前绘图至更大或更小
rotate()	    旋转当前绘图
translate()	    重新映射画布上的 (0,0) 位置
transform()	    替换绘图的当前转换矩阵
setTransform()	将当前转换重置为单位矩阵。然后运行 transform()

### 保存 读取
save()	保存当前环境的状态
restore()	返回之前保存过的路径状态和属性
createEvent()	 
getContext()	 


### 步骤

    设置canvas的宽高，行内设置，无单位

    获取canvas

    创建画笔

    ctx = canvas.getContext("2d);

    填充颜色，描边颜色

    ctx.fillStyle = "red";
    ctx.strokeStyle = "red";

    实心矩形，空心矩形

    ctx.fillRect(a,b,c,d);
    ctx.strokeReck(a,b,c,d);
    a：X轴坐标
    b：y轴坐标
    c：宽度
    d：高度

    画圆

    ctx.arc(200,200,i,0.5Math.PI,1.5Math.PI,false);
    ,参数圆心x坐标，y坐标，半径，起始角弧度，结束角弧度,正负时针方向(false顺时针)

    开始，移动画笔，画线,结束

    ctx.beginPath();
    ctx.moveTo(120,100);//移动到x：120，y：100
    ctx.lineTo(20,20);//画到x：20，y：20
    ctx.closePath();

    画笔线宽

    ctx.lineWidth = 5;//无单位

    添加图片

    ctx.drawImage(img,79*m,216,79,108,150,100,79,108);
    //图片，图片x坐标，图片y坐标，截取图片的宽度，截取图片的高度，在画布中的x坐标，在画布中的y坐标，图片尺寸宽，图片尺寸高

    移动原点位置

    ctx.translate(100,200);//原点移到x：100，y：200

    旋转画布

    ctx.rotate(0.5*Math.PI);

    添加文本

    ctx.font="20px 微软雅黑"; ctx.fillText("文本内容",x坐标,y坐标);

    保存，读取

    ctx.save(); ctx.restore();