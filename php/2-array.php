<meta charset="UTF-8">

<?php
    $arr = arry(
        "xiaoming" => "小明1",
        "age" => "22",
        "qq" => 751324567,
        "tel" => 15938239456
    );

    print_r($arr);

    echo "<br/>";

    foreach( $arr as $k => $v){
        echo $k . "是" . $v . "<br/>";
    }

    echo "<br/>";

    $b = json_encode($arr);

    print_r($b);

    echo "<br/>";

    $a = aray("上", "下", "左", "右");

    print_r($a);

    echo　"<br/>";

    array_push($a,"前");
    var_dump($a);
    echo "<br/>";

    array_pop($a);
    var_dump($a);
    echo "<br/>";

    array_shift($a);
    var_dump($a);
    echo "<br/>";

    array_unshift($a,"小明");
    var_dump($a);
    echo "<br/>";

    //合并数组

    $arr1 = array(1,3);
    $arr2 = array(2,4;
    
    print_r(array_merge($arr1,$arr2)));
    echo "<br/>";

    //数组去掉重复的内容

    $arr3 = array(1,2,2,3,4,4,5,3,2,1);
    print_r(array_unique($arr3));

    echo "<br/>";

    //差值

    $xiaoming = array(
        "路飞",
        "哈啊哈",
        "佐助"
    );

    $pen = array(
        "路飞",
        "啊哈啊",
    );

    print_r(array_diff($xiaoming,$pen));

?>