<meta charset="UTF-8">

<?php
    $timu1 = $_GET["timu1"];
    $timu2 = $_GET["timu2"];
    $timu3 = $_GET["timu3"];

    //echo $timu1  $timu2  $timu3

    //创建一个连接，输入服务器地址，用户名，密码
    $conn = mysql_connect("localhost","root","root");

    //连接一个数据库
    mysql_select_db("kaoladeshujuku",$conn);

    mysql_query("SET NAMES UTF8");

    $result = mysql_query("INSERT INTO xuexizhuangkuang(timu1,timu2,timu3) VALUES('{$timu1}','{$timu2}','{$timu3}')");

    if($result == 1){
        echo "数据插入成功";
    }else{
        echo "数据错误，请联系管理员，管理员如何让联系，请问瓜里源！";
    }
?>