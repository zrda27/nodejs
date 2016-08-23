/**
 * Created by Administrator on 2016-08-23.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var del = require('del');
var projectName = "demo";

// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
gulp.task('minjs', function() {
    // 1. 找到文件
    gulp.src(['src/*.js', 'src/*/*.js', 'src/*/*/*.js'])
        .pipe(concat("demo" + '.js'))    //合并所有js到main.js
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('public/js'))
})

// 压缩 css 文件
// 在命令行使用 gulp css 启动此任务
gulp.task('mincss', function () {
    // 1. 找到文件
    gulp.src(['src/*.css', 'src/*/*.css', 'src/*/*/*.css'])
        .pipe(concat("demo" + '.css'))    //合并所有js到main.js
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        // 2. 压缩文件
        .pipe(minifyCSS())
        // 3. 另存为压缩文件
        .pipe(gulp.dest('public/css'))
})

gulp.task('clean', function(cb) {
    del(['public/css', 'public/js'], cb)
});

// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 script 任务
    gulp.watch(['src/*.js', 'src/*/*.js', 'src/*/*/*.js'], ['minjs'])
    // 监听文件修改，当文件被修改则执行 css 任务
    gulp.watch(['src/*.css', 'src/*/*.css', 'src/*/*/*.css'], ['mincss'])
})

gulp.task('default', ["clean", "minjs", "mincss"])