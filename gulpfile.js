const gulp = require('gulp');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');

gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(gulp.dest('./css'))
})

gulp.task('default', gulp.series('sass'), function() {
    gulp.watch('./sass/**/*.scss'), gulp.series('sass');
})






// 'use strict';

// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var browserSync = require('browser-sync').create();

// sass.compiler = require('node-sass');

// gulp.task('serve', function() {
//     browserSync.init({
//         server: {
//             baseDir: './',
//             index: 'index.html'
//         }
//     });
// });



// gulp.task('sass', function () {
//     return gulp.src('./sass/**/*.scss')
//       .pipe(sass().on('error', sass.logError))
//       .pipe(cleanCSS({compatibility: 'ie11'}))
//       .pipe(gulp.dest('./css'));
//   });
  
// // gulp.task('sass', function() {
// // 	//define the gulp-sass task 
// // 	return gulp.src('./sass/**/*.scss')
// // 	.pipe(sass({outputStyle : 'compressed'}).on('error', sass.logError))
// // 	.pipe(gulp.dest('./css'));
// //     });

// // gulp.task('sass:watch', function () {
// //     gulp.watch('.sass/**/*.scss', ['sass']);
// // });

// gulp.task('sass:watch', function () {
//     gulp.watch('./sass/**/*.scss', ['sass']);
//   });