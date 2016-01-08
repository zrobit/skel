var gulp = require('gulp'),
    jade = require('gulp-jade'),
    livereload = require('gulp-livereload'),
    plumber = require('gulp-plumber'),
    changed = require('gulp-changed-in-place'),
    config = require(__base + 'config.js').gulp,
    handler = require(__base + 'handler.js');

const src = [
  'templates/**/*.jade',
  '!templates/**/_*.jade',
  '!templates/includes/**/*.jade'
  ];

handler.set_env('deploy');
function templates(){
  return gulp.src(src)
    .pipe(jade({locals: handler, pretty:true}))
    .pipe(gulp.dest(config.templates.dest));
};

function templates_watch(){
  return gulp.src(src)
    .pipe(plumber())
    .pipe(changed())
    .pipe(jade({locals: handler, pretty:true}))
    .pipe(gulp.dest(config.templates.dest))
    .pipe(livereload());
};

gulp.task('templates:watch', templates_watch);
gulp.task('templates', templates);
module.exports = templates;
