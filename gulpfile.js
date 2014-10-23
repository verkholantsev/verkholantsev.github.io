var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');

gulp.task('templates', function () {
    gulp.src('./src/templates/**/*.jade')
        .pipe(jade().on('error', function (error) {
            console.log(error.toString());
        }))
        .pipe(gulp.dest('./build/'));
});

gulp.task('styles', function () {
    gulp.src('./src/styles/**/*.styl')
        .pipe(stylus({
            sourcemap: {
                inline: true,
                sourceRoot: '.',
                basePath: './src/styles'
            }
        }).on('error', function (error) {
            console.log(error.toString());
        }))
        .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function () {
    gulp.watch(['./**/*.jade', './**/*.styl'], function () {
        gulp.run('templates', 'styles');
    });
});
