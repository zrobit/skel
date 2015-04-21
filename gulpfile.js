var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    glue = require("gulp-sprite-glue"),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    insert = require('gulp-insert'),
    rename = require('gulp-rename'),
    config = require('./config.js').gulp,
    handler = require('./handler.js');


gulp.task('watch', function () {
  livereload.listen();
  gulp.src(['templates/**/*.jade', 'styles/**/*.styl'])
    .pipe(watch(['templates/**/*.jade', 'styles/**/*.styl']))
    .pipe(livereload({quiet: true}));
});


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


gulp.task('sprites_img', function () {
  gulp.src('images/icons')
    .pipe(glue({
      css: 'build/static/styles/sprites/',
      img: 'images/sprites/',
      namespace: '',
      spriteNamespace: '',
      url: '../images/sprites/'
    }));
});


gulp.task('sprites_css_stylus', ['sprites_img'], function () {
  gulp.src('build/static/styles/sprites/icons.css')
    .pipe(insert.wrap('@css{', '}'))
    .pipe(rename('sprites.styl'))
    .pipe(gulp.dest('styles/modules/'));
});


gulp.task('sprites', ['sprites_img', 'sprites_css_stylus']);
gulp.task('deploy', ['templates', 'styles', 'scripts']);
