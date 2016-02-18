global.__base = __dirname + '/../';

var gulp = require('gulp'),
    tasks = require('./tasks');

gulp.task('copy', ['copy:assets']);

gulp.task('dev', ['templates', 'styles', 'copy']);

gulp.task('deploy', ['templates', 'styles', 'scripts']);

gulp.task('default', ['dev']);
