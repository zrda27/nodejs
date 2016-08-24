/**
 * Created by Administrator on 2016-08-23.
 */
var projectName = "demo";
var destPath = "public/"

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var del = require('del');
var imagemin = require('gulp-imagemin');
var less = require('gulp-less');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function () {
    gutil.log('message')
    gutil.log(gutil.colors.red('error'))
    gutil.log(gutil.colors.green('message:') + "some")
})

gulp.task('default', ["cleanDest", "minjs", "less", "sass", "mincss", 'minimg']);

gulp.task('cleanDest', function(cb) {
    del([destPath + 'css', destPath + 'js', destPath + 'images'], cb)
});
gulp.task('cleanCssTmp', function(cb) {
    del(['src/css/tmp'], cb)
});

// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 script 任务
    gulp.watch('src/**/*.js', ['minjs'])
    // 监听文件修改，当文件被修改则执行 css 任务
    gulp.watch('src/**/*.css', ['mincss'])
    // 监听文件修改，当文件被修改则执行 image 任务
    gulp.watch('src/images/**/*.*', ['minimg'])
})

// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
gulp.task('minjs', function() {
    // 1. 找到文件
    gulp.src('src/**/*.js')
        .pipe(concat("demo" + '.js'))    //合并所有js到main.js
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(sourcemaps.init())
        .pipe(uglify())    //压缩
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(destPath + 'js'))
})

// 压缩 css 文件
// 在命令行使用 gulp css 启动此任务
gulp.task('mincss', function () {
    // 1. 找到文件
    gulp.src('src/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(concat("demo" + '.css'))    //合并所有js到main.js
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        // 2. 压缩文件
        .pipe(minifyCSS())
        .pipe(sourcemaps.write('.'))
        // 3. 另存为压缩文件
        .pipe(gulp.dest(destPath + 'css'))
});

// 压缩图片任务
// 在命令行输入 gulp images 启动此任务
gulp.task('minimg', function () {
    // 1. 找到图片
    gulp.src('src/images/**/*.*')
    // 2. 压缩图片
        .pipe(imagemin({
            progressive: true
        }))
        // 3. 另存图片
        .pipe(gulp.dest(destPath + 'images'))
});

// 编译less
// 在命令行输入 gulp less 启动此任务
gulp.task('less', function () {
    // 1. 找到 less 文件
    gulp.src('src/less/**/**.less')
    // 2. 编译为css
        .pipe(less())
        // 3. 另存文件
        .pipe(gulp.dest('src/css/tmp/less'))
});

// 编译sass
// 在命令行输入 gulp sass 启动此任务
gulp.task('sass', function () {
    // 1. 找到 less 文件
    gulp.src('src/sass/**/**.sass')
    // 2. 编译为css
        .pipe(sass())
        // 3. 另存文件
        .pipe(gulp.dest('src/css/tmp/sass'))
});