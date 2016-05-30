var gulp = require('gulp'),
	gutil = require('gulp-util'),
	bower = require('bower'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	cleanCss = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	sh = require('shelljs'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps');

var scriptsFolder = "./scripts/",
	paths = {
	scripts: [
		scriptsFolder + 'main.js',
	],
	sass: ['./styles/*.scss']
};

gulp.task('default', ['sass', 'compile-scripts', 'watch']);

gulp.task('sass', function(done) {
	gulp.src('./styles/style.scss')
	.pipe(sass())
	.on('error', sass.logError)
	.pipe(gulp.dest('./css/'))
	.pipe(cleanCss({
		keepSpecialComments: 0
	}))
	.pipe(rename({ extname: '.min.css' }))
	.pipe(gulp.dest('./css/'))
	.on('end', done);
});

gulp.task('lint-scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('compile-scripts', ['lint-scripts'], function(){
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(concat('afiefgithub.js'))
        .pipe(uglify())
        .on('error', function(err) {
    		console.log(err.toString());
  			this.emit('end');
    	})
        .pipe(rename('afiefgithub.min.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./js/'));
});

gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['compile-scripts']);
	gulp.watch(paths.sass, ['sass']);
});
