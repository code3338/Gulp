"use strict"

const gulp = require("gulp");
const sass = require("gulp-sass");
let cleanCSS = require("gulp-clean-css");
let concat = require("gulp-concat");
let rename = require("gulp-rename");
let uglify = require('gulp-uglify');
let pump = require('pump');
let browserSync = require('browser-sync').create();
let imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');


/*1. Compile Sass. Converts .scss file into .css file*/
gulp.task("sass", function() {
  return gulp.src("./src/scss/*.scss")
  .pipe(sass().on("error", sass.logError))
  .pipe(gulp.dest("./prod/assets/css"))

})

/*Minimize CSS*/
gulp.task('minify-css', () => {
  return gulp.src('./src/scss/*.css')
    .pipe(autoprefixer())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("./prod/assets/css/"))
    .pipe(browserSync.reload({stream:true}));
    /*Stream will inject code into the browser without refreshing.
    A gulp taks with name "default" means can type gulp in command prompt, and the task will run everything in it.
    Two stars (i.e. ) in a file path means when in a folder points to everything in that folder including every folder in the folder with any files init, and any files in the folder.*/
});

/*concatenate js files*/
gulp.task('scripts', function() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./prod/assets/js/'))
    .pipe(browserSync.reload({stream:true}));
});

/*Compress js files*/
gulp.task('compress', () => {
  return gulp.src('./prod/assets/js/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(rename("scripts.min.js"))
    .pipe(gulp.dest('./prod/assets/js/'))
});

/*html= Move to prod folder.*/
gulp.task('html', function() {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./prod/assets/'))
    .pipe(browserSync.reload({stream:true}));
});


/*Browser-sync*/
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
  })

gulp.task("reload", function() {
  browserSync.reload();
})
/**/


// /*Minify .png and .jpg images.*/
// gulp.task('default', () =>
// 	gulp.src('./src/images/*.jpg')
//   gulp.src('./src/images/*.png')
// 		.pipe(imagemin())
// 		.pipe(gulp.dest('./prod/assets/img/'))
// );

// reload ibTRmasr7kneFk6gK4nORi1xt2c
// html task
// gulp.task("html" , function())
/*Gulp runs all the tasks mentioned simply by us typing in gulp in the command prompt due to gulp.task  having a name of default, and the second parameter mentioning taks to run all at once.*/
gulp.task("default", ['sass', 'minify-css','scripts', 'compress', 'html','browser-sync'], function() {
  gulp.watch("./src/scss/*.scss",['sass']);
  gulp.watch("./src/scss/*.css",['sass']);
  gulp.watch("./src/js/*.js",['scripts','compress']);
  gulp.watch("./src/*.html",['reload']);
})
