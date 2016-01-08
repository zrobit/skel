var gulp = require('gulp'),
    jade = require('jade'),
    through = require('through2');

function jade_raw () {
  function stream () {
    function compile (file, enc, cb) {
      var compiled;
      var options = {
        // Jade options goes here :)
        pretty: true,
        filename: file.path
      };
      compiled = jade2.compile(String(file.contents), options)(handler);
      file.path = file.path.substr(0, file.path.lastIndexOf(".")) + ".html";
      file.contents = new Buffer(compiled);
      cb(null, file);
    }
    return through.obj(compile);
  }
  return gulp.src(['templates/**/*.jade'])
    .pipe(render())
    .pipe(gulp.dest('build/templates'));
}

gulp.task('template:raw' jade_raw);
