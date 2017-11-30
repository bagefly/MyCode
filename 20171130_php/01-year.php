<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<!--混编模式-->
		<select name="">
			
			<?php for($i=1970;$i<2017;$i++){ ?>
				
			<option value=""> <?php echo $i . "年"; ?> </option>
			
			<?php } ?>
				
		</select>
		
		<!--第二种-->
		<?php 
			
			echo "<select>";
				
			for($i=1970;$i<2017;$i++){
				echo "<option>";
				echo $i . "年";
				echo "</option>";
			}
				
			echo "</select>";
			
		 ?>
		
	</body>
</html>
