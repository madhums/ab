
/**
 * Module dependencies.
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var less = require('gulp-less');
var templateCache = require('gulp-angular-templatecache');

// Read from application file
var _js = require('./public/js/app.json');

// get the relative paths
var getPath = function (path) {
  return function (file) {
    return path + file;
  };
};
var jsDependencies = _js.dependencies.map(getPath('public/components/'));
var jsFiles = _js.files.map(getPath('public/js/'));

var js = jsDependencies.concat(jsFiles);    // source files
var dest = 'public/dist/' + _js.version;    // destination directory
var jsFile = _js.version + '.js';           // destination file name
var minJsFile = _js.version + '.min.js';    // destination file name for minified files
var cssFile = _js.version + '.css';         // destination file name for css
var css = 'public/less/app.less';           // source less file

/**
 * JSHint
 */

gulp.task('jshint', function () {
  return gulp.src(jsFiles)
    .pipe(jshint({ lookup: true }))
    .pipe(jshint.reporter('default'));
});

/**
 * Template cache
 */

gulp.task('templates', function () {
  js.push('public/dist/' + _js.version + '/templates.js');
  return gulp.src('public/js/**/templates/*.html')
    .pipe(templateCache({ module: 'app', root: '/js/' }))
    .pipe(uglify())
    .pipe(gulp.dest(dest));
})

/**
 * Concat all js files
 */

gulp.task('jsconcat', ['templates'], function() {
  return gulp.src(js)
    .pipe(concat(jsFile))
    .pipe(gulp.dest(dest));
});

/**
 * Minify and sourcemap all js files
 */

gulp.task('jsminify', ['templates'], function() {
  return gulp.src(js)
    .pipe(sourcemaps.init())
      .pipe(concat(minJsFile))
      .pipe(uglify())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(dest));
});

/**
 * Convert less files to css
 */

gulp.task('css', function() {
  return gulp.src(css)
    .pipe(sourcemaps.init())
      .pipe(concat(cssFile))
      .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dest));
});

/**
 * Update the latest builds
 */

// TODO

/**
 * Default task
 */

gulp.task('default', [
    'jshint',
    'templates',
    'jsconcat',
    'jsminify',
    'css'
  ], function() {
  // place code for your default task here
});
