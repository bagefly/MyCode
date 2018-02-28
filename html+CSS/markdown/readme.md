<!-- TOC -->

- [1. markdown](#1-markdown)
    - [1.1. 基本格式](#11-基本格式)
    - [1.2. 注释](#12-注释)
    - [1.3. 常见符号](#13-常见符号)
- [2. Git / Github](#2-git--github)
    - [2.1. Github注册](#21-github注册)
    - [2.2. Git安装](#22-git安装)
    - [2.3. 使用命令行](#23-使用命令行)
    - [2.4. Git命令](#24-git命令)
        - [2.4.1. git init](#241-git-init)
        - [2.4.2. git add / git commit](#242-git-add--git-commit)
        - [2.4.3. git log](#243-git-log)
        - [2.4.4. git reset](#244-git-reset)
    - [2.5. Git 远程操作](#25-git-远程操作)
        - [2.5.1. git remote add](#251-git-remote-add)
        - [2.5.2. git remote -v](#252-git-remote--v)
        - [2.5.3. git push](#253-git-push)
        - [2.5.4. git pull](#254-git-pull)

<!-- /TOC -->
# 1. markdown
## 1.1. 基本格式

markdown的符号后面，必须有空格 

## 1.2. 注释
两种注释方法
```
1. tab键
2. 反单引号 `
```

---

## 1.3. 常见符号
```
# 标题 1-6
* 无序（序号）列表
1. 有序列表
> 引用
--- 分割线
* * 斜体
** ** 加粗
```

> 1. 3标题
>> 1. 1标题
>>> 1. 2标题


*这是一段文字*

# 2. Git / Github

Git 版本控制系统
Github 基于Git的功能，设计的一个代码管理平台（网站）

## 2.1. Github注册

    sign in 登录
    sign up 注册

    javascript

## 2.2. Git安装

GUI 用户图形界面

## 2.3. 使用命令行

bash : basic shell
shell 是一种用在Linux，Unix操作系统上的命令行工具，比cmd强大很多

    cmd: dir
    shell: ls

    vscode： ctrl+` 打开 terminal

    调出vscode命令板，select default shell

## 2.4. Git命令

### 2.4.1. git init

将空文件夹，初始化为一个git仓库

### 2.4.2. git add / git commit

git add 将文件，添加到准备提交

git commit 提交一个版本，必须带-m 带信息

> git add .

### 2.4.3. git log

查看版本日志
!

git reflog 查看更详细的日志，可以看到“未来”

### 2.4.4. git reset 

跳到某个版本


## 2.5. Git 远程操作

### 2.5.1. git remote add
git remote add [远程名字] [远程地址]

### 2.5.2. git remote -v
查看本仓库，添加了哪些远程地址

### 2.5.3. git push

git push origin [起点]:[终点]
                本地   远程

### 2.5.4. git pull

git push origin [起点]:[终点]
                远程   本地   
