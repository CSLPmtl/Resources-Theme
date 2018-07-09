/*
	CSLP (c) 2018
	==
	run the whole shabang with `$ gulp` in the project directory
	install them all with
	$ npm i -D
		gulp gulp-sass
		gulp-babel
		gulp-concat
		gulp-uglify
		gulp-rename
		gulp-sourcemaps
		gulp-autoprefixer
		browserify
		babelify
		browser-sync
		vinyl-buffer
		vinyl-source-stream
	Note that this gulpfile uses Gulp 4 syntax
*/


const gulp = require('gulp')
const sass = require('gulp-sass')
const babel = require('gulp-babel')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const browserify = require('browserify')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()


const config = require('./config.json')


// Take each script and compile it (and the scripts it imports) as separate scripts
config.scripts.forEach(script => {
	gulp.task(script.name + '-js', function (callback) {

		let b = browserify({
			entries: config.paths.jsBase + script.main , // say, 'stories/main.js'
			presets: ['env'],
			transform: ['babelify'],
			extensions: ['.js'],
			debug: true
		})

		return b.bundle()
		.pipe(source(script.name + '.js'))
		.pipe(buffer()) // uglify works on buffered streams
		// .pipe(sourcemaps.init({loadMaps: true}))
			.pipe(gulp.dest(config.paths.jsBuild,
				{ mode: '0777', cwd: process.cwd() + '/theme/' } ))
			.pipe(gulp.dest('dist/assets/js/')) // pipe to repo
			.pipe(rename(script.name + '.min.js'))
			.pipe(buffer())
			.pipe(uglify())
			.on('error', logError)
		// .pipe(sourcemaps.write())

		.pipe(gulp.dest(config.paths.jsBuild + 'min/',
			{ mode: '0777', cwd: process.cwd() + '/theme/' } ))
		.pipe(gulp.dest('dist/assets/js/min/'))

		.pipe(browserSync.reload({stream: true}))
		.on('end', callback)
	})
})


// SCSS compile
gulp.task( 'css', function (callback) {
	return gulp.src(config.paths.styles)
	.pipe(sourcemaps.init())
	.pipe(sass(config.tools.sass))
	.on('error', logError)
	.pipe(autoprefixer(config.tools.autoprefixer))
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest(config.paths.stylesBuild,
		{ mode: '0777', cwd: process.cwd() + '/theme/' }))
	.pipe(gulp.dest('dist/assets/css'))
	.pipe(browserSync.reload({stream: true}))
	.on('end', callback)
})


// Live Reload
gulp.task( 'browserSync', () => browserSync.init( config.tools.browserSync ) )


// Watch Files For Changes (Scripts and Styles)
gulp.task('watch', () => {
	// create a watcher for each top-level script
	config.scripts.forEach( script => {
		gulp.watch(config.paths.jsBase + script.glob)
		.on('change', gulp.series(script.name + '-js'))
	})

	gulp.watch(config.paths.styles)
	.on('change', gulp.series('css'))
})


gulp.task( 'default' , gulp.parallel( 'browserSync', 'watch' ))


gulp.watch( 'gulpfile.js' ).on('change', () => process.exit(0) )


var logError =  function ( err ) {
	console.error( err.message )
	browserSync.notify( err.message, 3000 ) // Display error in the browser
	this.emit('end') // Prevent gulp from catching the error and exiting the watch process
}