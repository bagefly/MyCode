<meta charset="UTF-8">
<?php
	$arr = array(
		"xiaoming" => "小明1",
		"age" => "22",
		"qqhao" => 75123123,
		"shoujihao" => 110119120999
	);
	
	print_r($arr);
	
	echo "<br />";
	
	foreach( $arr as $k => $v){
		echo $k . "是" . $v . "<br />";
	}
	
	echo "<br />";
	
	
	$b = json_encode($arr);
	
	print_r($b);
	
	echo "<br />";
	
	$a = array("上","下","左","右");
	
	print_r($a);
	
	echo "<br />";
	
	array_push($a,"前");
	var_dump($a);
	echo "<br />";
	
	array_pop($a);
	var_dump($a);
	echo "<br />";
	
	array_shift($a);
	var_dump($a);
	echo "<br />";
	
	array_unshift($a,"小明");
	var_dump($a);
	echo "<br />";
	
	//合并数组
	$arr1 = array(1,3);
	$arr2 = array(2,4);
	
	print_r( array_merge($arr1,$arr2) );
	echo "<br />";
	
	//数组去掉重复的内容
	$arr3 = array(1,2,2,3,4,4,5,3,2,1);
	
	print_r( array_unique($arr3) );
	
	echo "<br />";
	//差值
//	差值 ，找到$xiaoming有的，$pengtao没有的值，打印
	$xiaoming = array(
		"路飞",
		"多佛朗明哥",
		"佐助"
	);
	$pengtao = array(
		"路飞",
		"多佛朗明哥"
	);
	
	print_r( array_diff($xiaoming,$pengtao) );
	
?>