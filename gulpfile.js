const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
 
gulp.task('default', function () {
  return tsProject.src()
    .pipe(ts(tsProject))
    .js.pipe(gulp.dest('public'));
});

gulp.task('watch', function() {
  gulp.watch('./src/*.ts', gulp.series('default'));
});