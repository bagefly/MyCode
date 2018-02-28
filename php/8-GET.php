<meta charset="UTF-8">
<?php
	
//	超全局变量
//	$_GET
//	$_PSOT
//	$_SERVER
	
	
//	var_dump($_GET);
//	var_dump($_SERVER);

//	echo $_GET["name"];
	
	//接受参数的处理
	$name = isset( $_GET["name"]) ? $_GET["name"] : "没有";
	
	
	echo $name;
	
?>