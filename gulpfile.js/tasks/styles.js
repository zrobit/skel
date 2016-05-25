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
  var postcss = require('gulp-postcss');
  var autoprefixer = require('autoprefixer');
  var plugins = [autoprefixer()];
  return gulp
    .src(dest+'main.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest(dest));

}

gulp.task('styles', styles);
gulp.task('styles:deploy', styles_deploy);
module.exports = styles;
