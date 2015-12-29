/**
 * Created by wmj on 2015/12/18.
 */

var path = require("path");
var webpack = require("webpack");
module.exports={

    context:path.join(__dirname, 'assets/js'),//根目录
    entry:{
        Foo:['./demo4/a.js']

    },
    output:{

         path:  path.join(__dirname,'assets/js/bundles/lib'),
         libraryTarget:'umd',//导出模式
         library:'[name]',//类名
         filename:'[name].class.bundle.js',
          chunkFilename:'[id].class.chunk.js'
    },

    external:{

        'jquery':"jQuery"//如果不是使用webpack导入的话，可以同external指定本插件的依赖  require（‘jquery’）等价于  window.jQuery
    }


};