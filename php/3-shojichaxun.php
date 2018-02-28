<?php
	header("Content-Type:text/json;charset=gb2312");
	
	$str = $_GET["str"];
	
	$a = file_get_contents("http://chongzhi.jd.com/json/order/search_searchPhone.action?mobile=" . $str);
	
	
	echo $a;
	
	
?>