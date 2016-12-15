const gulp = require('gulp');
const concat = require('gulp-concat');
//const yamlPackages = require('gulp-yaml-packages');
gulp.task('concat',()=> {
    return gulp.src(['./new/first.html','./new/second.html','./new/third.html','./new/last.html'])
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./public'));
});
