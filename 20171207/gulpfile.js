let gulp     = require("gulp"),
    connect  = require("gulp-connect"),  //热加载
    htmlmin  = require("gulp-htmlmin"),   //压缩html文件
    less     = require("gulp-less"),      //实时编译less，兼容处理
    cssmin   = require("gulp-cssmin"),     //压缩css文件
    rename   = require("gulp-rename"),     //改名
    concat   = require("gulp-concat"),      //合并文件
    del      = require("del"),             //删除
    sass     = require("gulp-sass"),        //实时编译sass
    stylus   = require("gulp-stylus")        //实时编译stylus
    ;

//兼容处理
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 10 versions'] }); //最新的10个版本

 

gulp.task('default',['clean','copy-html','less','scss','stylus','watch','server'],() => console.log("我是默认的任务~"));

gulp.task('eat', () => console.log("吃饭中~~~~~"));

gulp.task('sleep', () => console.log("睡觉中~~~~~"));

gulp.task('study',['eat','sleep'], () => console.log("学习中~~~~~"));


//添加一个任务，找到index.html文件,通过管道输出到dist文件夹里面
gulp.task('copy-html',() => {
	return gulp.src('index.html')
			.pipe(htmlmin({collapseWhitespace: true}))
			.pipe(gulp.dest('dist/'))
			.pipe(connect.reload());
})

//监听的枢纽
gulp.task('watch',['watch-html','watch-less','watch-sass','watch-stylus'], () => {
})

//实时监听index.html文件变化，如果发生变化'copy-html'
gulp.task('watch-html',() => {
	return gulp.watch('index.html',['copy-html']);
})

//实时监听 less
gulp.task('watch-less',() => {
	return gulp.watch('./src/styles/*.less',['less']);
})

//实时监听 sass
gulp.task('watch-sass',() => {
	return gulp.watch('./src/styles/*.scss',['scss']);
})

//实时监听 stylus
gulp.task('watch-stylus',() => {
	return gulp.watch('./src/styles/*.styl',['stylus']);
})

//实时监听js
gulp.task('watch-js',() => {
	return gulp.watch('./src/**/*.js',['compile-js']);
})

//任务，热加载，实时监听
gulp.task('server',() => {
	connect.server({
		root: 'dist',   //服务器根目录
		port: 8080,    //端口号
		livereload: true
	});
});


//编辑less文件并压缩，放入生产环境
gulp.task('less', () => {
	return gulp.src('src/styles/*.less')  //找到这个慕课下面所有的less文件
		.pipe(less( {plugins: [autoprefix] })) //实时编译，并处理兼容
		.pipe(cssmin())                  //压缩
//		.pipe(rename({suffix: '.min'}))  //改名
		.pipe(concat('main.css'))       //合并文件（文件名称）
		.pipe(gulp.dest('dist/css'));  //输出到指定文件夹
})


//删除的任务
gulp.task("clean",() => {
	del(['dist/*']);    //删除方法，删除的路径
})

//sass
gulp.task('scss', () => {
	return gulp.src('src/styles/index.scss')
		.pipe(sass())                    //实时编译
		.pipe(cssmin())                  //压缩
		.pipe(concat('main.css'))       //合并文件（文件名称）
		.pipe(rename({suffix: '.min'}))  //改名
		.pipe(gulp.dest('dist/css'));  //输出到指定文件夹
})

gulp.task('stylus', () => {
	return gulp.src([
		'src/styles/demo.styl',
		'src/styles/demo1.styl',
	])
	.pipe(stylus())   //实时编译
	.pipe(cssmin())                  //压缩
	.pipe(concat('main.css'))       //合并文件（文件名称）
	.pipe(rename({suffix: '.one'}))  //改名
	.pipe(gulp.dest('dist/css'));  //输出到指定文件夹
})
