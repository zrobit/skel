var gulp = require('gulp'),
    config = require(__base + 'config.js').gulp,
    handler = require(__base + 'handler.js');


var scripts = function(){
  return gulp.src(src)
    .pipe(gulp.dest(config.scripts.dest));
};


var images = function(){
  var src = ['images/**/*', '!images/icons/**/*'];
  return gulp.src(src)
    .pipe(gulp.dest(config.images.dest));
};


var fonts = function(){
  var src =  ['fonts/**/*'];
  return gulp.src(src)
    .pipe(gulp.dest(config.fonts.dest));
};


gulp.task('copy:fonts', scripts);
gulp.task('copy:images', images);
gulp.task('copy:fonts', fonts);
