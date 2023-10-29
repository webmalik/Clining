export const docs = () => {
	return app.gulp.src(app.path.buildFolder)
		.pipe(app.gulp.dest(app.path.docsFolder))
}