// jshint esversion: 6
var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    path = require(__base + 'config.js').path;

const src = ['styles/main.styl'];
const dest = path.static + 'styles/';

function styles () {
  return gulp
    .src(src)
    .pipe(stylus())
    .pipe(gulp.dest(dest));
}

function styles_deploy (){
  console.log('para ser implementado');

}

gulp.task('styles', styles);
// gulp.task('styles:deploy', styles_deploy);
module.exports = styles;
