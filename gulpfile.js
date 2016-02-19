var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var gutil = require("gulp-util");

var watching = false;

function wrap(stream) {
  stream.on('error', function(error) {
   gutil.log(gutil.colors.red(error.message));
   gutil.log(error.stack);
   if (watching) {
     gutil.log(gutil.colors.yellow('[aborting]'));
     stream.end();
   } else {
     gutil.log(gutil.colors.yellow('[exiting]'));
     process.exit(1);
   }
  });
  return stream;
}

gulp.task("default", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(wrap(babel()))
    .pipe(concat("app.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(""));
});

gulp.task("watcher", function () {
    watching = true;
    gulp.watch("src/**/*.js", ["default"]);
});
