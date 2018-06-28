/*
	CSLP (c) 2018
	==
	run the whole shabang with `$ gulp` in the project directory
	install them all with
	$ npm i -D gulp gulp-sass gulp-babel gulp-concat gulp-uglify gulp-rename gulp-sourcemaps gulp-autoprefixer browser-sync

	Note that this gulpfile uses Gulp 4 syntax
*/

const gulp = require('gulp')
const	sass = require('gulp-sass')
const babel = require('gulp-babel')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const	concat = require('gulp-concat')
const	uglify = require('gulp-uglify')
const	rename = require('gulp-rename')
const browserify = require('browserify')
const	sourcemaps = require('gulp-sourcemaps')
const	autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()

const	paths = {
	domain: 'http://10.106.133.138/~mheming/resources/',
	theme: 'theme/',
	js: 'src/**/*.js',
	jsBuild: 'assets/js/', // this is where the minified and concat'd project js build file will go
	styles: './scss/**/*.scss', // watch these directories
	stylesBuild: 'assets/css/' // this is where the minified, compiled css will go
}

const config = {
	autoprefixer: {
		browsers: ['last 3 versions', '> 5%', 'Firefox ESR']
	},
	sass: {
		errLogToConsole: true,
		outputStyle: 'compressed' // compressed, compact, expanded
	},
	browserSync: {
		proxy: paths.domain
	}
}


// js compile
gulp.task( 'js', function (callback) {
	return gulp.src(paths.js)
	.pipe(sourcemaps.init())
	.pipe(concat('all.js'))
	.pipe(babel({ presets: ['env'] }))
	.pipe(gulp.dest(paths.jsBuild, { mode: '0777', cwd: process.cwd() + '/theme/' } ))
	.pipe(rename('all.min.js'))
	.pipe(uglify())
	.on('error', logError)
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(paths.jsBuild, { mode: '0777', cwd: process.cwd() + '/theme/' }))
	.pipe(browserSync.reload({stream: true}))
	.on('end', callback)
})

// // js compile with webpack because I need this
gulp.task( 'js-stories', function (callback) {

	let b = browserify({
		entries: 'stories/main.js',
		presets: ['env'],
		transform: ['babelify'],
		extensions: ['.js'],
		debug: true
	})

	return b.bundle()
	.pipe(source('stories.js'))
	.pipe(buffer())
	.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(gulp.dest(paths.jsBuild, { mode: '0777', cwd: process.cwd() + '/theme/' } ))
		.pipe(rename('stories.min.js'))
		//.pipe(uglify())
		.on('error', logError)
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(paths.jsBuild, { mode: '0777', cwd: process.cwd() + '/theme/' }))
	.pipe(browserSync.reload({stream: true}))
	.on('end', callback)
})


// SCSS compile
gulp.task( 'css', function (callback) {
	return gulp.src(paths.styles)
	.pipe(sourcemaps.init())
	.pipe(sass(config.sass))
	.pipe(sourcemaps.write())
	.on('error', logError)
	.pipe(autoprefixer(config.autoprefixer))
	.pipe(gulp.dest(paths.stylesBuild, { mode: '0777', cwd: process.cwd() + '/theme/' }))
	.pipe(browserSync.reload({stream: true}))
	.on('end', callback)
})


// Live Reload
gulp.task( 'browserSync', () => browserSync.init( config.browserSync ) )


// Watch Files For Changes (Scripts and Styles)
gulp.task('watch', () => {
	gulp.watch(paths.js)
	.on('change', gulp.series('js'))

	gulp.watch('stories/**/*.js').on('change', gulp.series('js-stories'))

	gulp.watch(paths.styles)
	.on('change', gulp.series('css'))
})


gulp.task( 'default' , gulp.parallel( 'browserSync', 'watch' ))


gulp.watch( 'gulpfile.js' ).on('change', () => process.exit(0) )


var logError =  function ( err ) {
	console.error( err.message )
	browserSync.notify(err.message, 3000) // Display error in the browser
	this.emit('end') // Prevent gulp from catching the error and exiting the watch process
}