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

.pipe(htmlmin({collapseWhitespace: true})) 
htmlmin(json格式的配置)

# 热加载模块
 connect  = require("gulp-connect"),  //热加载
 
 地址： npm
 https://www.npmjs.com/package/gulp-connect
 
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
 
