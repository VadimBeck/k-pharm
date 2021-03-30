const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require("gulp-pug");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');

gulp.task('pug', function() {
    return gulp.src('./templates/pages/*.pug')
    .pipe(pug({
      pretty: "\t"
    }))
    .pipe(gulp.dest('./build'))
  });

gulp.task('styles', function() {
	return gulp.src('./scss/**/*.scss')	
	.pipe(sourcemaps.init())
		.pipe(sass().on("error", sass.logError))		
		.pipe(autoprefixer(['last 2 versions']))
		.pipe(cleanCSS({
        level: 2
      }))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./build/css'))
	.pipe(browserSync.reload( {stream: true} ))
});

function watch() {
    browserSync.init({
       server: {
           baseDir: "./build"
       }
   });
   
   gulp.watch('./scss/**/*.scss', gulp.series('styles'));
   gulp.watch('./templates/pages/*.pug', gulp.series('pug'));
   gulp.watch("./build/*.html").on('change', browserSync.reload);
 }
 gulp.task('default', watch);