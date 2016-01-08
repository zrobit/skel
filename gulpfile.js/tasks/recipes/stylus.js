var gulp = require('gulp'),
    stylus = require('stylus'),
    nib = require('nib'),
    through = require('through2');

function  stylus_raw(){
  function stream(){
    function compile(file, enc, cb){
      var compiled;
      var options = {
        // Stylus options goes here :)
        use: [nib()],
        filename: file.path
      };
      compiled = stylus.render(String(file.contents), options);
      file.path = file.path.substr(0, file.path.lastIndexOf(".")) + ".css";
      file.contents = new Buffer(compiled);
      cb(null, file);
    }
    return through.obj(compile);
  }
  return gulp.src(['styles/**/*.styl'])
    .pipe(render())
    .pipe(gulp.dest('build/'));
}

gulp.task('template:raw', stylus_raw);
