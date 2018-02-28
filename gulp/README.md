###Gulp

 工作流程
 	HTML,CSS,JS
 	HTML5,CSS3,ES6,ES7,ES8
 	NODE,less,sass,Angular,Vue,React
 	通过IDE里面的自动编译功能实现或者是下载模块
 	

构建工具
	帮我们把less，sass，stylus实时编译成css
	帮我们把ES6，ES7，ES8,实时编译成ES5/ES3 
	帮我们把html也可以压缩，进行一些处理
	帮我们压缩文件，合并文件
	提供一个实时同步的服务器
	


自动化 ： （方便理解，流水线的概念）

-S  ==  --save   安装的项目中必须的运行环境  dependencies

-D == --save-dev  安装的开发环境-构建工具  devDependencies

	
//第一步
全局安装  cnpm i -g gulp

//第二步
在当前项目（文件夹） cnpm i -D gulp


//第三步
创建一个 gulpfile.js 



gulp.task('default',['study'],() => console.log("我是默认的任务~"));

//第四步
运行！ 在命令行  gulp

['study'] ： 前置任务  如果想执行 default的默认任务， 那么要先将前置任务清空


gulp API
gulp.task() ： 任务

gulp.src() :输出符合所提供的匹配模式或者匹配模式的数组的文件

gulp.dest() : 写入文件，输出到哪里，如果文件不存在，将会创建一个文件

.pipe : 可以理解为管道

gulp.watch(): 监听文件的变化，进行相关处理

====================================
## html页面

gulp.watch(第一个参数是监听的文件，[第二个参数是任务列表])；

# 代码压缩模块
htmlmin  = require("gulp-htmlmin") 压缩html文件

地址： npm
https://www.npmjs.com/package/gulp-htmlmin

安装语句
 cnpm i -D gulp-htmlmin

.pipe(htmlmin({collapseWhitespace: true})) 
htmlmin(json格式的配置)


# 热加载模块
 connect  = require("gulp-connect"),  //热加载
 
 地址： npm
 https://www.npmjs.com/package/gulp-connect
 
 安装语句
 cnpm i -D gulp-connect
 
# 需要建立  任务，热加载，实时监听  在启动时候default的前置任务中添加
gulp.task('server',() => {
	connect.server({
		root: 'dist',   //服务器根目录
		port: 8080,    //端口号
		livereload: true
	});
});
 
#.pipe(connect.reload());  //显示的页面内容
 gulp.task('copy-html',() => {
	return gulp.src('index.html')
			.pipe(htmlmin({collapseWhitespace: true}))
			.pipe(gulp.dest('dist/'))
			.pipe(connect.reload());  //显示的页面内容
})
 
=========================================
css部分

less 编译

安装 ： cnpm i -D gulp-less

网址：
https://www.npmjs.com/package/gulp-less

.pipe(less())  //通过模块引用，实现less文件实时编译功能

//实时监听 less
gulp.task('watch-less',() => {
	return gulp.watch('./src/styles/*.less',['less']);
})

# 兼容处理

安装 ： cnpm i -D less-plugin-autoprefix

var LessAutoprefix = require('less-plugin-autoprefix');
//兼容浏览器最新的10个版本的css处理
var autoprefix = new LessAutoprefix({ browsers: ['last 10 versions'] });
 

.pipe(less( {plugins: [autoprefix]})  ) 实际使用，处理css兼容


# 压缩css文件   给文件改变名称

安装： cnpm i -D gulp-cssmin

网站： https://www.npmjs.com/package/gulp-cssmin

.pipe(cssmin())                  //压缩
.pipe(rename({suffix: '.min'}))  //改名


# 合并文件
安装： cnpm i -D gulp-concat

网站：https://www.npmjs.com/package/gulp-concat

.pipe(concat('main.css'))       //合并文件（文件名称）

# 删除

安装： cnpm i -D del

网站：https://www.npmjs.com/package/del

//删除的任务
gulp.task("clean",() => {
	del(['dist/*']);    //删除方法，删除的路径
})

有顺序问题！需要先删除，在生成！
['clean','copy-html','less','watch','server']



# sass实时编译

安装： cnpm i -D gulp-sass

网站：https://www.npmjs.com/package/gulp-sass


.pipe(sass())                    //实时编译


# stylus实时编译

安装： cnpm i -D gulp-stylus

网站：https://www.npmjs.com/package/gulp-stylus


pipe(stylus())   //实时编译


# nodejs命令~

上传项目到主分支上面
git add .   
找到全部新增加的内容

git commit -am "说明"
备注

git push origin master
上传到主分支上面


命令行语句

cd 文件夹名称
打开文件 进入

cd ../
到上一级


express 项目名称
生成express项目骨架
  
通过 cnpm i 
安装环境

cnpm i -S  模块的名称
如果需要其他模块环境

npm init -y
初始化生成 jackage.json

-S  ==  --save   安装的项目中必须的运行环境  dependencies

-D == --save-dev  安装的开发环境-构建工具  devDependencies

安装 :      cnpm i -D 
js压缩代码: gulp-uglify 
校正js代码： gulp-eslint
报错处理：    gulp-plumber
=============================================
# 实时编译js：   gulp-babel

cnpm i -D gulp-babel
cnpm i -D babel-core

还需要一个规范
npm install --save-dev babel-preset-es2015

创建一个文件：  .babelrc

里面写入
{
  "presets": ["es2015"]
}

=============================================
图片压缩: gulp-imagemin


# 找到需要的模块 npm
	
根据文档说明和代码示例  尝试实现

引用  模块

在后面的代码中去调用 模块 

# 流程
1.引用  模块

2.监听文件 设置处理任务 初始化时候调用

3.相应的任务处理 初始化时候调用
  1.找到文件
  2.通过模块处理
  3.写入到指定位置