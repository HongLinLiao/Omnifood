var gulp = require("gulp");
var sass = require("sass");
var gulpSass = require("gulp-sass");
var sass = gulpSass(sass);

// build scss file
gulp.task("style", function (done) {
  gulp
    .src("src/scss/**/*.scss")
    .pipe(
      sass({
        // outputStyle: "compressed",
      })
    )
    .pipe(gulp.dest("src/css"))
    .on("end", function (e) {
      done();
    });
});

// watch style
gulp.task("watch", function (done) {
  gulp.watch("src/scss/**/*.scss", gulp.series("style"));
  done();
});
