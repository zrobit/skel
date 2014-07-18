var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    sprites = require('gulp.spritesmith'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    config = require('./config.js').gulp,
    handler = require('./handler.js');


gulp.task('watch', function () {
  gulp.src(['templates/**/*.jade', 'styles/**/*.styl'])
    .pipe(watch())
    .pipe(livereload());
});


gulp.task('templates', function() {
  handler.set_env('deploy');
  gulp.src(config.templates.src)
    .pipe(jade({locals: handler}))
    .pipe(gulp.dest(config.templates.dest));
});


gulp.task('styles', function () {
  gulp.src(config.styles.src)
    .pipe(stylus({use: [nib()]}))
    .pipe(gulp.dest(config.styles.dest));
});


gulp.task('scripts', function () {

});


gulp.task('sprites', function () {
  var spriteData = gulp.src('images/sprites/*.png').pipe(sprites({
    imgName: 'sprites.png',
    cssName: 'sprites.styl',
    imgPath : '../images/sprites.png',
    algorithm: 'binary-tree',
    cssOpts: {
      cssClass: function (item) {
        return '.'+item.name;
      }
    },
    cssFormat: 'css'
  }));
  spriteData.img.pipe(gulp.dest('images/'));
  spriteData.css.pipe(gulp.dest('styles/modules/'));
});


gulp.task('deploy', ['templates', 'styles', 'scripts']);
