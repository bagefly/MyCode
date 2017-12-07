###node.js+mongoDB 单用户博客API

##模型  的内容放在models的文件夹里面
user模型
	name: String,
	password: String,
	admin: Boolean
	
分类模型
	title：String

博客模型
	title：String,    分类
	body: String,     内容
	author: String,   作者
	comments: [{body: String,data: Date}],  评论：[{内容：字符串,时间：发布时间}]
	date: {type:Date ,default: date.now},    时间，默认时间
	tags: [{title:String}],   标签  
	hidden: Boolean,  部分信息是否隐藏
	mete: {
		votes: Number,  投票
		favs: Number    收藏
	}
	
	
路由相关文件  放在 routes的文件夹里面

注册管理员
登录(授权token，部分api只有验证token才能使用 )
发布博文
删除博客
修改博客


==========
博文分类 (增删改查)
通过分类显示
发布评论
点赞功能

