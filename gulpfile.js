const gulp = require('gulp');
const ts = require('gulp-typescript');
const livereload = require('gulp-livereload');
const tsProject = ts.createProject('tsconfig.json');
 
gulp.task('default', function () {
  return tsProject.src()
    .pipe(ts(tsProject))
    .js.pipe(gulp.dest('public'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./src/*.ts', gulp.series('default'));
});