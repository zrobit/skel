var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    handler = require('./handler.js');

var paths = {
  templates: ['templates/**/*.jade', '!templates/includes/**/*.jade'],
  styles:['styles/**/*.styl', '!styles/modules/**/*'],
  scripts:['scripts/**/*.js'],
  images:['images/**/*',],
  fonts:['fonts/**/*']
};

gulp.task('jade', function() {
  handler.set_env('node');
  gulp.src(paths.templates)
    .pipe(jade({locals: handler}))
    .pipe(gulp.dest('build/templates'));
});

gulp.task('stylus', function () {
  gulp.src(paths.styles)
    .pipe(stylus({use: [nib()]}))
    .pipe(gulp.dest('build/styles'));
});
