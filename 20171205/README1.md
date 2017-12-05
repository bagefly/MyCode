###Welcome to use MarkDown

1.可以通过mongo 进入数据库  如果mongo命令找不到，可通过mongo.exe去打开

2.显示所有的库  show dbs 

3.选择库 use 库名 （如果没有这个库名，相当于创建一个库）

4.当前的库名   db

5.显示所有的表  show collections

6.查看所有表中的内容  db.表名.find();

7.根据条件查找内容   db.表名.find({条件});

8.创建一个表 db.createCollection('表名')

9.插入数据  db.aaa.insert({"name":"名字"});

10.修改数据  db.表名.update({"name":"xiaoming"},{$set:{"age":22}}) 

11. 删除数据 db.表名.remove({"name":"xiaoming111"})

12. 删除库 
