/// <binding />
var gulp = require("gulp"),
	browserify = require("browserify"),
	stringify = require("stringify"),
	babelify = require("babelify"),
	source = require("vinyl-source-stream");

// this is an outdated command without es6 support
gulp.task("browserify", function () {
	var bundleMethod = browserify;//global.isWatching ? watchify : browserify;

	var bundler = bundleMethod({
		// Specify the entry point of your app
		cache: {},
		packageCache: {},
		entries: ["./src/app.js"]
	});

	var bundle = function() {
		return bundler
			.transform(stringify([".html"]))
			// Enable source maps!
			.bundle({ debug: true })
			// Use vinyl-source-stream to make the
			// stream gulp compatible. Specifiy the
			// desired output filename here.
			.pipe(source("bundle.js"))
			// Specify the output destination
			.pipe(gulp.dest("./src"));
	};

	return bundle();
});

gulp.task("build", function() {
	return browserify({ entries: "./src/app.js" })
		.transform(stringify([".html"]))
		.transform("babelify", { presets: ["es2015"] })
		.bundle()
		.pipe(source("bundle.js"))
		.pipe(gulp.dest("./src"));
});

gulp.task("watch", ["watch"], function() {
	gulp.watch("*.js", ["build"]);
});

gulp.task("default", ["watch"]);