const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const sync = require('browser-sync').create();

gulp.task('message', function(){
  return console.log("blah");
});

gulp.task('copyHtml', () =>
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
);

//Compresses all images within the src/img folder
gulp.task('img', () =>
  gulp.src('src/img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/img'))
);

//Compresses all js within the src/js folder
gulp.task('js', () =>
  gulp.src('src/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
);

//Compiles all the sass files
gulp.task('sass', () =>
  gulp.src('src/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/css'))
    //  .pipe(sync.stream())
);



// gulp.task('serve', ['sass'], function () {
gulp.task('serve', function () {

  // Starts the serve
  sync.init({
    //Where the server is served from
    server: './dist'
  })

  // Watches all changes in scss and html files
  gulp.watch('src/scss/*.scss', ['sass']).on('change', sync.reload);
  gulp.watch('src/*.html', ['copyHtml']).on('change', sync.reload);

})


gulp.task('default', ['img', 'js', 'sass', 'message', 'copyHtml', 'serve']);
