var gulp = require('gulp'),
	inject = require('gulp-inject-string'),
	textTransformation = require('gulp-text-simple'),
	shell = require('gulp-shell'),
	path = require('path'),
	template = require('gulp-template'),
	swPrecache = require('sw-precache'),
	runSequence = require('run-sequence'),
	rootDir = 'site';

gulp.task('mkdocs-build', shell.task([
	'mkdocs build --clean'
]));

gulp.task('inject-pwa', function() {
	gulp.src("PWA/manifest.json").pipe(gulp.dest('site/'));
	gulp.src("assets/**/*.png").pipe(gulp.dest('site/assets'));
	gulp.src('PWA/index.html').pipe((textTransformation(function(str){
		gulp.src('site/**/index.html')
			.pipe(inject.after('</title>', str))
			.pipe(template({
				img_120: "../assets/images/apple-icon-120x120.png",
				img_192: "../assets/images/android-icon-192x192.png",
				title: "Algorithms",
				description: "Algorithms Reference App",
				theme_color: "#009688",
				favicon: "../assets/images/favicon.ico",
				manifest: "../manifest.json"
			}))
			.pipe(gulp.dest('site'));
		return str;
	}))());
	gulp.src('PWA/index.html').pipe((textTransformation(function(str){
		gulp.src('site/index.html')
			.pipe(inject.after('</title>', str))
			.pipe(template({
				img_120: "assets/images/apple-icon-120x120.png",
				img_192: "assets/images/android-icon-192x192.png",
				title: "Algorithms",
				description: "Algorithms Reference App",
				theme_color: "#009688",
				favicon: "assets/images/favicon.ico",
				manifest:"manifest.json"
			}))
			.pipe(gulp.dest('site'));
		return str;
	}))());
});

gulp.task('generate-sw', function(){
	swPrecache.write(path.join(rootDir, 'service-worker.js'), {
		staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,json}'],
		stripPrefix: rootDir
	});
});

gulp.task('build-site', function(){
	runSequence('mkdocs-build', 'inject-pwa', 'generate-sw');
});

gulp.task('default', ['build-site'], function() {
});