var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('default', ['sass', 'watch']);

gulp.task('sass', function () {
    return gulp.src('assets/styles/*.sass')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('assets/styles/'));
});

gulp.task('watch', function () {
    gulp.watch('assets/styles/*.sass', ['sass']);
});