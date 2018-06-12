/*
	CSLP (c) 2018
	==
	run the whole shabang with `$ gulp` in the project directory
	install them all with
	$ npm i -D gulp gulp-sass gulp-babel gulp-if gulp-concat gulp-rename gulp-uglify gulp-sourcemaps browser-sync

	Note that this gulpfile uses Gulp >= 4.0.0 syntax
*/

const gulp = require('gulp')
const sass = require('gulp-sass')
const babel = require('gulp-babel')
const gulpif = require('gulp-if')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const browserSync = require('browser-sync').create()

// environment variables
const project = 'theme'				// replace with your localhost folder
const path = ''								// relative path to be in the required project
const assets = '/assets'			// img, css, js, pdf ...

const compact = true					// minify javascript
const minicss = true					// minify css
const scss = true							// compile style.css from scss
const js = true								// compile common.js from folder in build tools
const port = '8888'						// mac os only: 'php -S localhost:port -t project'


// compiles scss files to css
gulp.task('sass', () => {
	if (scss) {
		return gulp.src('scss/**/*.scss')
		.pipe(
			sass({ outputStyle: (minicss) ? 'compressed' : 'compact'}).on('error', function (err) {
				console.error(err.message)
				// Display error in the browser
				browserSync.notify(err.message, 3000)
				// Prevent gulp from catching the error and exiting the watch process
				this.emit('end')
			}))
		.pipe(gulp.dest( path + project + assets + '/css/'))
		.pipe(browserSync.stream())
	}
})

// compiles and concatenates js files and reloads the browser
gulp.task('scripts', () => {
	//let scr = (js) ? 'src/**/*.js' : path + project + assets + '/js/**/*.js'

	return gulp.src('src/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('common.js'))
		.pipe(babel({ presets: ['env'] }))
		.pipe(gulp.dest(path + project + assets + '/js/'))
		.pipe(gulpif(compact, rename('common.min.js')))
		.pipe(gulpif(compact, uglify().on('error', function (err) {
			console.error(err.message)
			// Display error in the browser
			browserSync.notify(err.message, 2000)
			// Prevent gulp from catching the error and exiting the watch process
			this.emit('end')
		})))
		.pipe(sourcemaps.write(gulpif(compact, gulp.dest(path + project + assets + '/maps/'))))
		.pipe(gulpif(compact, gulp.dest(path + project + assets + '/js/')))
		.pipe(browserSync.reload({stream:true}))
})

// does browser live-reloading
gulp.task('browserSync', () => {
	browserSync.init({
		proxy: '127.0.0.1:' + port + '/',
		files: [path + project + '**/*.php', path + project + '**/*.css']
	})
})

const watcher = gulp.watch('src/**/*.js' /* You can also pass options and/or a task function here */);
// watcher.on('all', function(event, path, stats) {
//   console.log('File ' + path + ' was ' + event + ', running tasks...');
// });

watcher.on('all', () => {
  return gulp.src('src/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('common.js'))
		.pipe(babel({ presets: ['env'] }))
		.pipe(gulp.dest(project + assets + '/js/'))
		.pipe(gulpif(compact, rename('common.min.js')))
		.pipe(gulpif(compact, uglify().on('error', function (err) {
			console.error(err.message)
			browserSync.notify(err.message, 2000)
			this.emit('end')
		})))
		.pipe(sourcemaps.write(gulpif(compact, gulp.dest(project + assets + '/maps/'))))
		.pipe(gulpif(compact, gulp.dest(project + assets + '/js/')))
		.pipe(browserSync.reload({stream:true}))
});

// // OR LISTEN TO INDIVIDUAL EVENT TYPES
// watcher.on('change', function(path, stats) {
//   console.log('File ' + path + ' was changed, running tasks...');
// });
// watcher.on('add', function(path) {
//   console.log('File ' + path + ' was added, running tasks...');
// });
// watcher.on('unlink', function(path) {
//   console.log('File ' + path + ' was removed, running tasks...');
// });


// watches files for changes, adjust accordingly
gulp.task('watch', gulp.parallel('sass', 'scripts'), () => {
	gulp.watch('scss/**/*.scss').on('all', ['sass'])
	gulp.watch('src/**/*.js').on('all', ['scripts'])
	gulp.watch(path + project + '**/*.php').on('all', browserSync.reload)
	//gulp.watch(path + project + assets + '/js/**/*.js', ['scripts'])
})



gulp.task('default', gulp.parallel('browserSync', 'watch'))

// stop old version of gulp watch from running when you modify the gulpfile
gulp.watch("gulpfile.js").on( "change", () => {
	if (browserSync.active) {
		browserSync.cleanup();
	}
	done();
	process.stdin.pause();
})
