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
        $link=mysql_connect("localhost","root","root");
        mysql_select_db("kaoladeshujuku",$link);
        $xingming=$_POST['txtName'];
        $nianling=$_POST['txtAge'];
        $qqhao=$_POST['txtQQ'];
        $result = mysql_query("SELECT * FROM xuesheng");
        $exec="insert into xuesheng values('$xingming',$nianling,'$qqhao')";
        // $exec="INSERT INTO xuesheng(xingming,nianling,qqhao) VALUES('$xingming',$nianling,'$qqhao')";
        $result=mysql_query($exec);
        if($result) echo "学生已添加到数据表中<br>";
        else echo "该学生没有添加进数据表，请重新输入。<br>";
        mysql_close();
    ?>
    <a href="9-insertData.php">返回添加页面</a>
</body>
</html>