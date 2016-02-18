// jshint esversion: 6
var gulp = require('gulp'),
    path = require(__base + 'config.js').path,
    handler = require(__base + 'handler.js');



const src = {
  scripts: ['scripts/**/*.js'],
  images: ['images/**/*', '!images/icons/**/*'],
  fonts: ['fonts/**/*']
};


const dest = {
  static : path.static,
  scripts : path.static + 'scripts/',
  images : path.static + 'images/',
  fonts : path.static + 'fonts/'
};

function scripts (){
  return gulp
    .src(src.scripts)
    .pipe(gulp.dest(dest.scripts));
}


function images (){
  return gulp
    .src(src.images)
    .pipe(gulp.dest(dest.images));
}


function fonts (){
  return gulp
    .src(src.fonts)
    .pipe(gulp.dest(dest.fonts));
}


gulp.task('copy:scripts', scripts);
gulp.task('copy:images', images);
gulp.task('copy:fonts', fonts);
gulp.task('copy:assets', ['copy:scripts', 'copy:images', 'copy:fonts']);
