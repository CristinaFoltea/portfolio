var gulp = require('gulp'),
    uglify = require('gulp-uglify')

gulp.task('scripts', function() {
  gulp.src('app/angular/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist'))
});
