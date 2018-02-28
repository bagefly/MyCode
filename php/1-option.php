<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
</head>
<body>
    <select name="" id="">
        <?php for($i = 1970; $i <= 2017; $i++){?>
        <option value=""> <?php echo $i . "年"; ?> </option>
        <?php } ?>
    </select>

    <!-- 第二种 -->
    <?php
        echo "<select name=''>";

        for($i = 1970 ; $i < 2017; $i++){
            
            echo "<option>".$i . "年" . "</option>";
        }
        echo "</select>";
    ?>
</body>
</html>