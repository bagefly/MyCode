<meta charset="UTF-8">
<?php
	$timu1 = $_GET["timu1"];
	$timu2 = $_GET["timu2"];
	$timu3 = $_GET["timu3"];
	
//	echo $timu1 . $timu2 . $timu3;
	
	//创建一个连接，输入服务器地址，用户名，密码
			$conn = mysql_connect("localhost","root","root");
			
			//选择一个数据库
			mysql_select_db("kaoladeshujuku",$conn);
			
			//设置一下字符集
			mysql_query("SET NAMES UTF8");
			
			//插入一条数据，执行mysql语句添加
			$result = mysql_query("INSERT INTO xuexizhuangkuang(timu1,timu2,timu3) VALUES('{$timu1}','{$timu2}','{$timu3}')");
			
			//判断是否成功，并反馈
			if( $result == 1 ){
				echo "数据成功插入";
			}else{
				echo "数据错误，请联系管理员，管理员如何联系，请问瓜里源！";
			}
?>