/**
 * Created by wmj on 2015/12/17.
 */

var uglify = require('gulp-uglify'),
    gulp = require('gulp'),
    sourceMap = require('gulp-sourcemaps'),
    webpack=require('webpack'),
    webpackDevServer=require('webpack-dev-server'),
    config=require('./webpack.config');

gulp.task('minify:js', function () {

    gulp.src('src/js/bundles/**/*.js')
        .pipe(sourceMap.init())
        .pipe(uglify())
        .pipe(sourceMap.write('../../src/js/source_maps'))
        .pipe(gulp.dest('build/js'))


});


gulp.task('server',function(){

     new webpackDevServer(webpack(config),{
         publicPath:config.output.publicPath,
         hot:true,
         quiet:false,
         historyApiFallback:true,
         noInfo:false,
         stats:{color:true}

     }).listen(8080,'localhost',function(err,result){
             if(err)
             {
                 console.log(err);
             }
             console.log('Listening at localhost:8080');
         })


});