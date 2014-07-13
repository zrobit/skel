var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    config = require('./config.js').gulp,
    handler = require('./handler.js');

gulp.task('templates', function() {
  handler.set_env('deploy');
  gulp.src(config.templates.src)
    .pipe(jade({locals: handler}))
    .pipe(gulp.dest(config.templates.dest));
});

gulp.task('styles', function () {
  gulp.src(config.styles.src)
    .pipe(stylus({use: [nib()]}))
    .pipe(gulp.dest(config.styles.dest));
});

gulp.task('scripts', function () {

});

gulp.task('watch', function () {
  gulp.src(['templates/**/*.jade', 'styles/**/*.styl'])
    .pipe(watch())
    .pipe(livereload());
});

gulp.task('deploy', ['templates', 'styles', 'scripts']);
