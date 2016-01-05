// var gulp = require('gulp'),
//     jade = require('gulp-jade'),
//     stylus = require('gulp-stylus'),
//     nib = require('nib'),
//     glue = require("gulp-sprite-glue"),
//     watch = require('gulp-watch'),
//     livereload = require('gulp-livereload'),
//     insert = require('gulp-insert'),
//     rename = require('gulp-rename'),
//     config = require('./config.js').gulp,
//     handler = require('./handler.js'),
//     iconfont = require('gulp-iconfont'),
//     consolidate = require('gulp-consolidate');

// gulp.task('watch', function () {
//   livereload.listen();
//   gulp.src(['templates/**/*.jade', 'styles/**/*.styl'])
//     .pipe(watch(['templates/**/*.jade', 'styles/**/*.styl']))
//     .pipe(livereload({quiet: true}));
// });


// gulp.task('templates', function() {
//   handler.set_env('deploy');
//   gulp.src(config.templates.src)
//     .pipe(jade({locals: handler}))
//     .pipe(gulp.dest(config.templates.dest));
// });


// gulp.task('styles', function () {
//   gulp.src(config.styles.src)
//     .pipe(stylus({use: [nib()]}))
//     .pipe(gulp.dest(config.styles.dest));
// });


// gulp.task('scripts', function () {

// });

// gulp.task('sprites_img', function () {
//   gulp.src('images/icons')
//     .pipe(glue({
//       css: 'build/static/styles/sprites/',
//       img: 'images/sprites/',
//       namespace: '',
//       spriteNamespace: '',
//       url: '../images/sprites/'
//     }));
// });

// gulp.task('sprites_css_stylus', ['sprites_img'], function () {
//   gulp.src('build/static/styles/sprites/icons.css')
//     .pipe(insert.wrap('@css{', '}'))
//     .pipe(rename('sprites.styl'))
//     .pipe(gulp.dest('styles/modules/'));
// });

// gulp.task('icon-fonts', function(){
//   var fontName= 'iconfont';
//   return gulp.src(['images/icons/*.svg'])
//     .pipe(iconfont({
//       fontName: fontName,
//       formats: ['ttf', 'eot', 'woff', 'svg'],
//       autohint: false,
//       fontHeight: 512,
//       normalize: true
//     }))

//     .on('glyphs', function(glyphs) {
//       var options = {
//         glyphs : glyphs.map(function(glyph){
//           return {name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0).toString(16) };
//         }),
//         fontName: fontName,
//         fontPath: '../fonts/icons/',
//       };
//       gulp.src('styles/templates/icons.styl')
//         .pipe(consolidate('lodash', options))
//         .pipe(gulp.dest('styles/modules/'));
//     })
//     .pipe(gulp.dest('fonts/icons/'));
// });


// gulp.task('copy-images', function () {
//   gulp.src(config.images.src)
//     .pipe(gulp.dest(config.images.dest));
// });

// gulp.task('copy-fonts', function () {
//   gulp.src(config.fonts.src)
//     .pipe(gulp.dest(config.fonts.dest));
// });

// gulp.task('copy-scripts', function () {
//   gulp.src(config.scripts.src)
//     .pipe(gulp.dest(config.scripts.dest));
// });


// gulp.task('sprites', ['sprites_img', 'sprites_css_stylus']);

// gulp.task('copy', ['copy-images', 'copy-fonts', 'copy-scripts']);

// gulp.task('dev', ['templates', 'styles', 'copy']);

// gulp.task('deploy', ['templates', 'styles', 'scripts']);

global.__base = __dirname + '/../';

var gulp = require('gulp'),
    tasks = require('./tasks');

gulp.task('copy', ['copy:images', 'copy-fonts', 'copy-scripts']);

gulp.task('dev', ['templates', 'styles', 'copy']);

gulp.task('deploy', ['templates', 'styles', 'scripts']);

gulp.task('default', ['dev']);
