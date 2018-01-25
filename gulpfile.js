const gulp = require('gulp'),
	inject = require('gulp-inject-string'),
	textTransformation = require('gulp-text-simple'),
	shell = require('gulp-shell'),
	template = require('gulp-template'),
	runSequence = require('run-sequence'),
	fs = require('fs'),
	rootDir = 'site',
	workbox = require("workbox-build");

gulp.task('mkdocs-build', shell.task([
	'mkdocs build --clean'
]));

gulp.task('inject-pwa', function() {
	
	fs.readFile('config.json', function(err, data){
		let config = JSON.parse(data);
		
		gulp.src('PWA/subindex.html').pipe((textTransformation(function(str){
			gulp.src('site/**/index.html')
				.pipe(inject.after('</title>', str))
				.pipe(template(config))
				.pipe(gulp.dest('site'));
			return str;
		}))());
		
		gulp.src('PWA/index.html').pipe((textTransformation(function(str){
			gulp.src('site/index.html')
				.pipe(inject.after('</title>', str))
				.pipe(template(config))
				.pipe(gulp.dest('site'));
			return str;
		}))());
		
		
		config.icons = [
			{
				"src": config.img_36,
				"sizes": "36x36",
				"type": "image/png"
			},
			{
				"src": config.img_192,
				"sizes": "192x192",
				"type": "image/png"
			},
			{
				"src": config.img_512,
				"sizes": "512x512",
				"type": "image/png"
			}
		];
		
		config.display = "standalone";
		config.scope = ".";
		fs.writeFile("site/manifest.json", JSON.stringify(config), function(err) {
			if(err) {
				return console.log(err);
			}
		});
		
	});
});

gulp.task('generate-sw', () => {
	return workbox.generateSW({
		globDirectory: rootDir,
		globPatterns: ['**\/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,json}'],
		globIgnores: ['404.html'],
		swDest: `${rootDir}/sw.js`,
		clientsClaim: true,
		skipWaiting: true,
		modifyUrlPrefix: {
			'/': ''
		}
	}).then(() => {
		console.info('Service worker generation completed.');
}).catch((error) => {
	console.warn('Service worker generation failed: ' + error);
});
});

gulp.task('build-site', function(){
	runSequence('mkdocs-build', 'inject-pwa', 'generate-sw');
});

gulp.task('default', ['build-site'], function() {
});