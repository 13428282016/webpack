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

        'jquery':"jQuery"//外部变了导入 ，即在文件里 require('jquery') ===global.jQuery;
    }


};