var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	notify = require('gulp-notify'),
	plumber = require('gulp-plumber'),
      less = require("gulp-less"),
	pug = require('gulp-pug');

gulp.task('server', function() {
	browserSync.init({
		server: { baseDir: './docs'}
	});
	gulp.watch('docs/**/*.html').on('change', browserSync.reload);
	gulp.watch('docs/js/**/*.js').on('change', browserSync.reload);
	gulp.watch('less/**/*.less', ['less'] );
	gulp.watch('pug/**/*.pug', ['pug'] );
});

gulp.task('pug', () => {
    return gulp.src('./pug/*.pug')
      .pipe(plumber({
            errorHandler: notify.onError(function(err){
                  return {
                        title: 'Pug',
                        message: err.message
                  }
            })
      }))
      .pipe(pug({
            pretty: true
      }))
      .pipe(gulp.dest('./docs'))
      .pipe(browserSync.stream());
});

gulp.task('less', () => {
    return gulp.src('./less/**/*.less')
      .pipe(plumber({
            errorHandler: notify.onError(function(err){
                  return {
                        title: 'Styles',
                        message: err.message
                  }
            })
      }))
      .pipe(less())
      .pipe(gulp.dest('docs/css'))
      .pipe(browserSync.stream());
});

// // Uglify Task
// gulp.task('uglify', function(){
//   gulp.src('docs/js/*.js')
//     .pipe(plumber()) // plumber
//     //.pipe(uglify())
//     .pipe(gulp.dest('docs/js'))
// });

gulp.task('default', ["server"]);