//require generic gulp modules
var gulp = require('gulp'),
	changed = require('gulp-changed'),
	debug = require('gulp-debug'),
	path = require('path'),
	merge = require('merge-stream');

//require js gulp modules
var jshint = require('gulp-jshint');

function handleError(error) {
	console.log(error.toString());
	this.emit('end');
}
//allows gulp to continue running after an error has been thrown

//require CSS gulp modules
var sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	postcss = require('gulp-postcss'),
	postcssPresetEnv = require('postcss-preset-env'),
	cssnano = require('cssnano');

gulp.task('css', function () {
	return gulp.src('./src/Components/**/*.scss', { base: './' })
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.on('error', handleError)
		.pipe(postcss([postcssPresetEnv, cssnano({
			preset: ['default', { discardComments: { removeAll: true } }]
		})]))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('.'));
});

//Watch task: calls the linting task
gulp.task('watch', function () {
	gulp.watch('./src/**/*.scss', ['css']);
});

gulp.task('default', ['watch']);
