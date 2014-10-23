var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('pages', function () {
    gulp.src('./src/pages/**/*.jade')
        .pipe(jade().on('error', function (error) {
            console.log(error.toString());
        }))
        .pipe(gulp.dest('./build/'));
});

gulp.task('default', function () {
    gulp.watch('./**/*.jade', function () {
        gulp.run('pages');
    });
});
