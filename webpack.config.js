/**
 * Created by wmj on 2015/12/17.
 */

var path = require("path");
var webpack = require("webpack");
module.exports={
    context:path.join(__dirname, 'assets/js'),//根目录
    entry:{page1:['./example.js'],page2:['./demo1.js'],demo2:['./demo2/example.js'],demo3a:['./demo3/a.js'],demo3b:['./demo3/b.js'],
    demo3g:['./demo3/e.js','./demo3/f.js'],vendor:['jquery']},
    output:{
        path:path.join(__dirname,'assets/js/bundles'),
        filename:'[name].bundle.js',//同步加载的文件都被打包到bundel
        chunkFilename:'[id].chunk.js',//异步加载的文件都会被放到chunk,“chunks” which are loaded on demand.
        publicPath: 'http://localhost:8080/'//指定发布路径，也就是说异步加载的文件都会以这个路径为基础请求,可使用webpack-dev-server --content-base dist/js 指定到发布目录
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style!css'}//所有css文件都会经过css 和style 加载器处理 ，主页顺序是倒序先css后style
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("common.js"),//优化commonjs 如果同一个页面不同js 同时require（包括amd和commojs）相同的模块，那么被requried的模块就会合并到common.js中，避免重复执行和加载改模块
        new webpack.optimize.UglifyJsPlugin(),//压缩输出文件
        new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15}),//限定chunk的最多数量
        new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),//限定每个chunk的小字节
        new webpack.optimize.CommonsChunkPlugin("common1.js",['demo3g','demo3a','./example.js']),//可以指定那个js需要合并
       new webpack.optimize.CommonsChunkPlugin("vendor", "commons.js")//所有引用属于vendor选项包含的js，这些js都会从他们的chunk或bundle移除，并合并到一个新的chunk，注意加载的时候要先加载这个chunk

    ]
};

/*

 require(dependencies) 是commonjs规范，同步加载模块，加载完成后立即执行模块
 require.ensure是commomjs规范，加载依赖模块的顺序是异步的，语句执行后开始加载所有模块 ，加载完成的模块不会立即执行，模块仅当callback执行到该语句才执行 ，callback里 如果require 一个模块，如果该模块加载完成了，就是执行该模块，如果该模块加载未完成，会等待改模块加载完成后才会执行该require语句后续代码， ，这里强调的是  callback demand
 require(depebdencies,callback)是AMD规范，并立即开始加载模块，加载依赖模块是异步的，等到所有模块加载完成后并且执行后才会调用callback

chunk 所有的异步加载的依赖都作为一个新的chunk，并且chunk里面还有异步加载的代码，就会递归的生成新的chunk，一个chunk只会被加载一次。
如果两个chunk包含相同的模块，那么这些模块会被webpack提取出来作为一个新的chunk，如果一个模块本所有的chunk引用，那么这个模块会被移开chunk，作为bundle加载，在引所有情况都会依赖，同步加载就可以了
如果一个chunk包含两一个chunk的所有依赖，那么这个chunk就会被缓存起来，下次加载另一个chunk的时候将会使用缓存。


如果你的代码生成很多chunk会导致很多http开销，webpack提供插件去合并这些chunk ，Limit the maximum chunk count with --optimize-max-chunks 15 new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15})
 Limit the minimum chunk size with --optimize-min-chunk-size 10000 new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000})




The require.ensure method ensures that every dependency in dependencies can be synchronously required when calling the callback. callback is called with the require function as parameter.
 Note: require.ensure only loads the modules, it doesn’t evaluate them.

 The AMD spec defines an asynchronous require method with this definition:When called, all dependencies are loaded and the callback is called with the exports of the loaded dependencies.
 Note: AMD require loads and evaluate the modules. In webpack modules are evaluated left to right.

 Note: It’s allowed to omit the callback.
 */