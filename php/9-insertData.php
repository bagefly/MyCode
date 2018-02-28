<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>向数据库插入数据</title>
</head>
    <body>
        <center>
            <form name="myForm" method="post" action="10-processInsertData.php">
                <table bgcolor="cyan">
                    <tr>
                        <td>姓名</td>
                        <td><input type="text" name="txtName" /></td>
                    </tr>
                    <tr>
                        <td>年龄</td>
                        <td><input type="text" name="txtAge"></td>
                    </tr>
                    <tr>
                        <td>qq</td>
                        <td><input type="text" name="txtQQ"></td>
                    </tr>
                    <!-- <tr>
                        <td>性别</td>
                        <td>
                            <select name="sSex">
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                        </td>
                    </tr> -->
                    <tr>
                        <td colspan="2" align="center">
                            <input type="submit" name="submit" value="添加"/>
                            <input type="reset" name="reset" value="重置">
                        </td>
                    </tr>
                </table>
            </form>
        </center>
    </body>
</html>


