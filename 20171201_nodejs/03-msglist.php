<meta charset="UTF-8">
<?php
	//连接
	$conn = mysql_connect("localhost","root","root");
//	选库
	mysql_select_db("mydb",$conn);
//	字符集设置
	mysql_query("SET NAMES UTF8");
//	sql语句
	$sql = "SELECT * FROM msg";
	
	$re = mysql_query($sql,$conn);
	
	while( $row = mysql_fetch_array($re) ){
//		print_r($row);
//		echo $row["id"];
//		echo $row["title"];
//		echo '<h2>' . $row["title"]. '</h2>';
//		echo '<a href="msg.php?tid=' . $row["id"]. '" >' . $row["id"]. '</a>';
		echo '<h2><a href="msg.php?tid=' .$row["id"]. '">' .$row["title"]. '</a></h2>';
	}
	
	//关闭数据了
	mysql_close($conn);
?>