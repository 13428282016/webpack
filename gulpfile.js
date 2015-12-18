/**
 * Created by wmj on 2015/12/17.
 */

var uglify=require('gulp-uglify'),
    gulp=require('gulp');

gulp.task('minify:js',function(){

    gulp.src('assets/js/bundles/**/*.js').
        pipe(uglify())
        .pipe(gulp.dest('dist/js'))


});