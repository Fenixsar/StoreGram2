var gulp = require('gulp');
const $ = require('gulp-load-plugins')();

const path = {
	sass: 'dev/styles/*.scss',
	jsScripts: [
		'dev/scripts/js/config.js',
		'dev/scripts/js/styles.js',
		'dev/scripts/js/jquery.min.js',
		'dev/scripts/js/bootstrap.min.js',
		'dev/scripts/js/jquery.mCustomScrollbar.js',
		'dev/scripts/js/jquery.timeago.js',
		'dev/scripts/js/jquery.timeago.ru.js',
		'dev/scripts/js/fileinput.js',
		'node_modules/socket.io-client/socket.io.js',
		'node_modules/socket.io-stream/socket.io-stream.js',
		'dev/scripts/js/my.scripts.js',
		'dev/scripts/js/app.js'
	]
}

gulp.task('sass', function() {
	return gulp.src(path.sass)
		.pipe($.sass())
		.pipe($.sass().on('error', $.sass.logError))
		.pipe($.cssmin({
			sourceMap: true
		}))
		.pipe(gulp.dest('public/css/'))
});

/*=============================================>>>>>
= Отслеживание изменения файлов =
===============================================>>>>>*/

gulp.task('watch', function() {
	gulp.watch(path.sass, gulp.series('sass'));
})

/*= End of Отслеживание изменения файлов =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= Основные команды для запуска =
===============================================>>>>>*/

gulp.task('default', gulp.series('sass', 'watch'));
gulp.task('build', gulp.series('sass'));

/*= End of Основные команды для запуска =*/
/*=============================================<<<<<*/
