<?php
    $zhuangtai = $_GET["zhuangtai"];

    $conn = mysql_connect("localhost","root","root");

    mysql_select_db("kaoladeshujuku",$conn);

    mysql_query("SET NAMES UTF8");

$result = mysql_query("SELECT * FROM xuexizhuangkuang WHERE timu1 = '{$zhuangtai}'");
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		
		<h1>本页面需要有zhuangtai的get参数传递</h1>
		<select name="">
			<option <?php if($zhuangtai=="非常明白"){echo "selected";} ?> value="非常明白">非常明白</option>
			<option <?php if($zhuangtai == "比较明白"){echo "selected";} ?>value="比较明白">比较明白</option>
			<option <?php if($zhuangtai == "一般"){echo "selected";} ?>value="一般">一般</option>
			<option <?php if($zhuangtai == "懵逼"){echo "selected";} ?>value="懵逼">懵逼</option>
			<option <?php if($zhuangtai == "非常懵逼"){echo "selected";} ?>value="非常懵逼">非常懵逼</option>
			<option <?php if($zhuangtai == "跳楼"){echo "selected";} ?>value="跳楼">跳楼</option>
		</select>
		
		
		<script type="text/javascript">
			
			var oSelect = document.getElementsByTagName("select")[0];
			
			oSelect.onchange = function(){
//				alert("值被改变了"+ this.value);
				
				//改变网址
				window.location.href = "4-getxxzt.php?zhuangtai=" + this.value;
			}
			
			
		</script>
		
		
		
		<table border="1">
			<tr>
				<td>状态</td>
				<td>意见</td>
				<td>建议</td>
			</tr>
			<?php
				while( $row = mysql_fetch_array($result) ){	
			?>
			  <tr>
				<td><?php echo $row["timu1"]; ?></td>
				<td><?php echo $row["timu2"]; ?></td>
				<td><?php echo $row["timu3"]; ?></td>
			  </tr>
			
			<?php
				}	
				
				//关闭数据库
				mysql_close($conn);
			?>
		</table>
	</body>
</html>