var gulp = require('gulp');                          // 引入gulp
var less = require('gulp-less');                     // less编译
var gulpCopy = require('gulp-copy');                 // copy文件
var uglify = require('gulp-uglify');                   // js压缩
var header = require('gulp-header');                   // 添加文件头
var cssnano = require('gulp-cssnano');                  // css压缩
var rename = require('gulp-rename');                   // 文件更名

// 文件头申明
var banner = [
    '/**',
    ' * mEdit (http://baleina.cn)',
    ' * Copyright (C) <%= new Date().getFullYear() %> baleina.cn',
    ' * Licensed under the MIT license (https://mit-license.org)',
    ' */',
    ''].join('\n');

// Less编译[任务]
gulp.task('less', function () {
    return gulp.src(['./src/less/mEdit.less']) // 编译目标文件(less)
        .pipe(less()) // less编译
        .pipe(header(banner)) // 头部申明
        .pipe(gulp.dest('./dist')) // 输出文件存放目录
        .pipe(cssnano({ // css压缩
            zindex: false,
            autoprefixer: false
        }))
        .pipe(header(banner)) // 头部申明
        .pipe(rename({ suffix: '.min' })) // 文件更名(*.min)
        .pipe(gulp.dest('./dist')); // 输出压缩文件存放目录
});

// 复制[任务]
gulp.task('copy', function () {
    return gulp.src(['./src/images/*'])
        .pipe(gulpCopy('./dist', { prefix: 1 }))
});


// 监听文件[任务]
gulp.task('watch', function () {
    gulp.watch('./src/less/**/*.less', ['less']);
});


// 默认执行任务
gulp.task('default', ['copy', 'less', 'watch']);


gulp.task('scripts', function () {
    return gulp.src(['./dist/mEdit.js'])
        .pipe(uglify()) // js压缩
        .pipe(header(banner)) // 头部申明
        .pipe(rename({ suffix: '.min' })) // 文件更名(*.min)
        .pipe(gulp.dest('./dist')); // 输出压缩文件存放目录
});

gulp.task('build', ['copy', 'scripts', 'less']);