var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    minifyCss = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    imagemin = require('gulp-imagemin'),
    fontmin = require('gulp-fontmin'),
    autoprefixer = require('gulp-autoprefixer')

gulp.task('scripts', function() {
  gulp.src('app/**/*.js')
  .pipe(plumber())
  .pipe(uglify())
  .pipe(gulp.dest('app/build/js'))
})

gulp.task('styles', function () {
  return sass('app/public/sass/style.scss')
    .on('error', sass.logError)
    .pipe(plumber())
    .pipe(autoprefixer())
    .pipe(minifyCss())
    .pipe(gulp.dest('app/build/css'))
})

gulp.task('image', function () {
  gulp.src('app/public/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('app/build/img'))
})

gulp.task('font', function () {
  gulp.src('app/public/font/*')
    .pipe(fontmin())
    .pipe(gulp.dest('app/build/css/font'))
})

gulp.task('watch', function(){
  // gulp.watch('app/**/*.js', ['scripts'])
  gulp.watch('app/public/sass/*.scss', ['styles'])
})

gulp.task('default', ['scripts', 'styles', 'watch']) // 'image', 'font',
