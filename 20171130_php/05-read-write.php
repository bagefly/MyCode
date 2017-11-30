<?php
	$html = <<<xiaoming
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		1234
	</body>
</html>		
xiaoming;

//	echo $html;
	
	//新闻网站是静态的！用php间隔时间生产新的页面
//	file_put_contents把一个字符串写入文件
	file_put_contents("06-demo.html",$html);
	
	echo "<br /> 下面内容是从06-demo.html里面读取的<br /> ";
	
	
	echo file_get_contents("06-demo.html");

?>