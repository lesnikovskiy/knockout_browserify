﻿var gulp = require("gulp"),
	browserify = require("browserify"),
	stringify = require("stringify"),
	babelify = require("babelify"),
	source = require("vinyl-source-stream");

gulp.task("browserify", function () {
	var bundleMethod = browserify;//global.isWatching ? watchify : browserify;

	var bundler = bundleMethod({
		// Specify the entry point of your app
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

gulp.task("default", ["browserify"]);