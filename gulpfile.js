var gulp = require('gulp');
var babel = require('gulp-babel');

// your gulp tasks here
gulp.task('build:js', function() {
  return gulp.src('assets/**/*.es6')
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(gulp.dest(this.dest));
});

// create a shared registry between the mater gulpfile and your gulpfile
var configure = require('./node_modules/frontier-build-tools/plugins/configure-registry.js');
gulp.registry(configure({
  assetManifest: require('path').resolve(process.cwd(), './asset.manifest.json')
}));

// register the master gulpfile with gulp. This MUST be declared after all your gulp tasks
// to be able to run multiple gulp tasks of the same name
var HubRegistry = require('gulp-hub');
var hub = new HubRegistry(['./node_modules/frontier-build-tools/gulpfile.js']);
gulp.registry(hub);
