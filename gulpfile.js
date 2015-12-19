/**
 * Created by wmj on 2015/12/17.
 */

var uglify = require('gulp-uglify'),
    gulp = require('gulp'),
    sourceMap = require('gulp-sourcemaps');

gulp.task('minify:js', function () {

    gulp.src('src/js/bundles/**/*.js')
        .pipe(sourceMap.init())
        .pipe(uglify())
        .pipe(sourceMap.write('../../src/js/source_maps'))
        .pipe(gulp.dest('build/js'))


});


gulp.task('server',function(){



});