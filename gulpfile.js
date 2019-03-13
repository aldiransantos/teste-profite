var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

//task para o sass
gulp.task('sass', function () {
    return gulp.src('dev/sass/*.sass')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('dist/css/'));
});

//task para o watch
gulp.task('watch', function () {
    gulp.watch('dev/sass/*.sass', ['sass']);
});

gulp.task('default', function () {

});

// gulp.task('default', ['sass', 'watch']);