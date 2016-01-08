var gulp = require('gulp'),
    jade = require('jade'),
    through = require('through2');

function  template_raw(){
  function stream(){
    function compile(file, enc, cb){
      var compiled;
      var options = {
        // Jade options goes here :)
        pretty: true,
        filename: file.path
      };
      file.path = file.path.substr(0, file.path.lastIndexOf(".")) + ".html";
      compiled = jade2.compile(String(file.contents), options)(handler);
      file.contents = new Buffer(compiled);
      cb(null, file);
    }
    return through.obj(compile);
  }
  return gulp.src(src)
    .pipe(render())
    .pipe(gulp.dest(config.templates.dest));
}

gulp.task('template:raw', template_raw);
