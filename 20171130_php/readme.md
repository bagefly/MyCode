### php 语法

PHP 脚本以 <?php 开头，以 ?> 结尾：

```php
<?php
// 此处是 PHP 代码
?>
```

#### PHP 变量规则：
    变量以 $ 符号开头，其后是变量的名称
    变量名称必须以字母或下划线开头
    变量名称不能以数字开头
    变量名称只能包含字母数字字符和下划线（A-z、0-9 以及 _）
    变量名称对大小写敏感（$y 与 $Y 是两个不同的变量）

##### 变量的作用域指的是变量能够被引用/使用的那部分脚本。
PHP 有三种不同的变量作用域：
    local（局部）
    global（全局）
    static（静态）

函数之外声明的变量拥有 Global 作用域，只能在函数以外进行访问。
函数内部声明的变量拥有 LOCAL 作用域，只能在函数内部进行访问。

global 关键词用于访问函数内的全局变量。
要做到这一点，请在（函数内部）变量前面使用 global 关键词

#### echo 和 print 之间的差异：

echo - 能够输出一个以上的字符串
print - 只能输出一个字符串，并始终返回 1

### MySQL数据库

数据库查找，引用数据

mysql_connect(servername,username,password);

servername	可选。规定要连接的服务器。默认是 "localhost:3306"。
username	可选。规定登录所使用的用户名。默认值是拥有服务器进程的用户的名称。
password	可选。规定登录所用的密码。默认是 ""。


```php
<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

// some code

?>

//关闭链接

mysql_close($con);
```

创建数据库

CREATE DATABASE 语句用于在 MySQL 中创建数据库。

向数据库表插入数据

INSERT INTO 语句用于向数据库表添加新记录。
INSERT INTO table_name
VALUES (value1, value2,....)