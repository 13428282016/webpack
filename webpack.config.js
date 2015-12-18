/**
 * Created by wmj on 2015/12/17.
 */

var path = require("path");
var webpack = require("webpack");
module.exports={
    context:path.join(__dirname, 'assets/js'),//根目录
    entry:{page1:['./example.js'],page2:['./demo1.js'],demo2:['./demo2/example.js'],demo3a:['./demo3/a.js'],demo3b:['./demo3/b.js'],
    demo3g:['./demo3/e.js','./demo3/f.js']},
    output:{
        path:path.join(__dirname,'assets/js/bundles'),
        filename:'[name].bundle.js',//同步加载的文件都被打包到bundel
        chunkFilename:'[id].chunk.js',//异步加载的文件都会被放到chunk
        publicPath: 'http://localhost:8080/'//指定发布路径，也就是说异步加载的文件都会以这个路径为基础请求,可使用webpack-dev-server --content-base dist/js 指定到发布目录
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style!css'}//所有css文件都会经过css 和style 加载器处理 ，主页顺序是倒序先css后style
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("common.js")//优化commonjs 如果不同js 同时使用commjs的require，那么被requried的模块就会合并到common.js中，避免重复执行该模块
    ]
};