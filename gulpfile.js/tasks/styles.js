var gulp = require('gulp'),
    nib = require('nib'),
    stylus = require('gulp-stylus'),
    config = require(__base + 'config.js').gulp;


const src = [
  'styles/**/*.styl',
  '!styles/modules/**/*',
  '!styles/sections/**/*',
  '!styles/templates/**/*'
  ];


function styles () {
  return gulp.src(src)
    .pipe(stylus({use: [nib()]}))
    .pipe(gulp.dest(config.styles.dest));
};


gulp.task('styles', styles);
module.exports = styles;
