// jshint esversion: 6
var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    config = require(__base + 'config.js').gulp,
    handler = require(__base + 'handler.js');


function watch () {
  livereload.listen();
  gulp.watch(['templates/**/*.jade'], ['templates:watch']);
  gulp.watch(['styles/**/*.styl'], function(){
    livereload.reload();
  });
}


gulp.task('watch', watch);
module.exports = watch;
