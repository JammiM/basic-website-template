const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

gulp.task('message', function(){
  return console.log("blah");
});

gulp.task('copyHtml', () =>
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
);

gulp.task('img', () =>
  gulp.src('src/img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/img'))
);

gulp.task('js', () =>
  gulp.src('src/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
);

gulp.task('sass', () =>
  gulp.src('src/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/css'))
);

gulp.task('default', ['img', 'js', 'sass', 'message', 'copyHtml']);
