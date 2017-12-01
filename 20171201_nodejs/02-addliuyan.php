<meta charset="UTF-8">
<?php
	
//	var_dump($_POST);
	
	//连接
	$conn = mysql_connect("localhost","root","root");
	
	//选库
	mysql_select_db("mydb",$conn);
	
	//设置字符集
	mysql_query("SET NAMES UTF8");
	
	//sql语句拼写
	$sql = "INSERT INTO msg (title,content,pubtime) VALUES ('" . $_POST['title'] . "','" . $_POST['content'] . "'," . time() .")";
	
//	echo $sql;

	$re = mysql_query($sql,$conn);
	
	if($re == 1){
		echo "留言成功！";
	}else{
		echo "留言失败！";
	}
	
	mysql_close($conn);

?>