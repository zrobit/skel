// jshint esversion: 6
var gulp = require('gulp'),
    jade = require('gulp-jade'),
    livereload = require('gulp-livereload'),
    plumber = require('gulp-plumber'),
    changed = require('gulp-changed-in-place'),
    path = require(__base + 'config.js').path,
    handler = require(__base + 'handler.js');

const src= [
  'templates/**/*.jade',
  '!templates/**/_*.jade',
  '!templates/includes/**/*.jade'
  ];
const dest = path.templates;

handler.set_env('deploy');

function templates(){
  return gulp
    .src(src)
    .pipe(jade({locals: handler, pretty:true}))
    .pipe(gulp.dest(dest));
}

function templates_watch(){
  return gulp
    .src(src)
    .pipe(plumber())
    .pipe(changed())
    .pipe(jade({locals: handler, pretty:true}))
    .pipe(gulp.dest(dest))
    .pipe(livereload());
}

gulp.task('templates:watch', templates_watch);
gulp.task('templates', templates);
module.exports = templates;
