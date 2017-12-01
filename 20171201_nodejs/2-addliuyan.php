<meta charset="UTF-8">

<?php
    $conn = mysql_connect("localhost","root","root");

    mysql_select_db("mydb",$conn);

    mysql_query("SET NAMES UTF8");

    $sql = "INSERT INTO msg (title,content,pubtime) VALUES ('" . $_POST['title'] . "','" . $_POST['content'] . "'," . time() .")";

    $re = mysql_query($sql,$conn);

    if($re == 1){
        echo "留言成功！";
    }else{
        echo "留言失败！";
    }

    mysql_close($conn);
?>