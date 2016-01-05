var gulp = require('gulp'),
    jade = require('gulp-jade'),
    livereload = require('gulp-livereload'),
    plumber = require('gulp-plumber'),
    changed = require('gulp-changed-in-place'),
    config = require(__base + 'config.js').gulp,
    handler = require(__base + 'handler.js');


var src = [
  'templates/**/*.jade',
  '!templates/**/_*.jade',
  '!templates/includes/**/*.jade'
  ];


handler.set_env('deploy');
var templates = function(){
  return gulp.src(src)
    .pipe(jade({locals: handler}))
    .pipe(gulp.dest(config.templates.dest));
};


var templates_watch = function(){
  console.log('holaaa');
  return gulp.src(src)
    .pipe(plumber())
    .pipe(changed())
    .pipe(jade({locals: handler, pretty:true}))
    .pipe(gulp.dest(config.templates.dest))
    .pipe(livereload());
};


gulp.task('templates', templates);
gulp.task('templates:watch', templates_watch);

module.exports = templates;
