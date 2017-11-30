<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
</head>
<body>
    <?php
        //链接数据库，php 和 MySQL 是兄弟。只需要一个命令就可以链接了
        //数据库用户名是root 密码 root 本地localhost
        //$con 就是一个变量，表示一次连接
        $con = mysql_connect("localhost","root","root");

        //选择连接哪个库
        mysql_select_db("mydb",$con);

        //执行mysql语句 ，吧检索结果放到$result 变量中
        $result = mysql_query("SELECT * FROM tongxue");

        //循环读取
    while($row = mysql_fetch_array($result)){
        echo "姓名是：" . $row['xingming'];
        echo "<br/>";
        echo "qq号是：" . $row['qqhao'];
        echo "<br/>";
        echo "手机号是：" . $row['shoujihao'];
        echo "<br/>";
    }
    ?>
</body>
</html>