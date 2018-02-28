<meta charset="UTF-8">
<?php
	
	$tid = $_GET["tid"];
	
	echo $tid;
	 //连接
		$conn = mysql_connect("localhost","root","root");
	//	选库
		mysql_select_db("mydb",$conn);
	//	字符集设置
		mysql_query("SET NAMES UTF8");
	//	sql语句
		$sql = "SELECT * FROM msg WHERE id=" . $tid;
		
		$re = mysql_query($sql);
		
		$row = mysql_fetch_array($re);
		
		echo '<h1>' . $row['title'] . '</h1>';
		echo '<h2>' . $row['content'] . '</h2>';
		
?>