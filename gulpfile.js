'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  less = require("gulp-less"),
  path = require('path'),
  less_cleancss = require("less-plugin-clean-css"),
  typescript = require("gulp-typescript"),
  browserify = require("browserify"),
  source = require("vinyl-source-stream"),
  tsify = require("tsify");

var tsProject = typescript.createProject("tsconfig_Build.json");

/**
Setup Watchers
**/

gulp.task('sass-component', function(){
  return gulp.src('./src/app/components/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(function(file){
      return file.base;
    }));
});

gulp.task("sc:watch", function(){
  gulp.watch('./src/app/components/**/*.scss', ['sass-component']);
});

//Builds sass files in the SCSS folder and outputs in css folder
gulp.task('sass', function () {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

//Watches the SCSS we modify for the application, calls the build task
gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/*.scss', ['sass']);
});

//Goes and finds the Bootstrap stuff and builds the CSS from LESS
gulp.task("bootstrap", function(){
  var uglifyLESS = new less_cleancss({advanced:2});
  return gulp.src("./src/less/*.less")
  .pipe(less({
    plugins:[uglifyLESS],
    paths:[path.join(__dirname, 'less', 'includes')]
  }))
  .pipe(gulp.dest('./src/css'));
});

gulp.task("bs:watch", function(){
  gulp.watch("./src/less/*.less", ["bootstrap"]);
});

//Build Tasks go here
//Builds scss files and puts them in a build folder
gulp.task('b_sass', function () {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task("tsc", function(){
  return browserify({
    basedir:".",
    debug:true,
    entries:["src/main.ts"],
    cache:{},
    packageCache:{}
  })
  .plugin(tsify)
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest("build/js"));
});

gulp.task("copy-html", function(){
  return gulp.src("./src/index.html")
    .pipe(gulp.dest("build"));
});

gulp.task("build", ["b_sass", "bootstrap", "tsc", "copy-html"]);

gulp.task("startup", ["sass", "bootstrap", "sass-component"]);
gulp.task("default", ["startup", "sass:watch", "bs:watch", "sc:watch"]);
