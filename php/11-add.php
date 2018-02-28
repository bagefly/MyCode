<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<?php
			
			$xingming = $_GET["xingming"];
			$nianling = $_GET["nianling"];
			$qqhao = $_GET["qqhao"];
			
//			echo $xingming . $nianling . $qqhao;
			
			//创建一个连接，输入服务器地址，用户名，密码
			$conn = mysql_connect("localhost","root","root");
			
			//选择一个数据库
			mysql_select_db("kaoladeshujuku",$conn);
			
			//设置一下字符集
			mysql_query("SET NAMES UTF8");
			
			//插入一条数据，执行mysql语句添加
			$result = mysql_query("INSERT INTO xuesheng(xingming,nianling,qqhao) VALUES('{$xingming}',{$nianling},{$qqhao})");
			
			//判断是否成功，并反馈
			if( $result == 1 ){
				echo "数据成功插入";
			}else{
				echo "数据错误，请联系管理员，管理员如何联系，请问瓜里源！";
			}
		?>
	</body>
</html>
