var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');
var base64 = require('gulp-base64');
var imageop = require('gulp-image-optimization');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('templates', function () {
    gulp.src('./src/pages/**/*.jade')
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
        .pipe(base64({debug: true}))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./build/'));
});

gulp.task('images', function () {
    gulp.src('./src/**/*.jpg')
        .pipe(imageop({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function () {
    watch(['./**/*.jade', './**/*.styl'], function () {
        gulp.run('templates', 'styles');
    });
});

gulp.task('default', function () {
    gulp.run('templates', 'styles', 'images');
});
