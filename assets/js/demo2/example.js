/**
 * Created by wmj on 2015/12/17.
 */

    /*


     commonjs 同一个页面不同js文件 require 相同的模块，模块会被重新执行 ，同一个jsrequire相同的模块 ，模块不会被重新执行，AMD 同一个页面不同js文件，相同的模块只会被执行一次
     a,b 基于commonJs马上 加载而且是同步的，c也是马上加载，但c是异步的，才加载完成后不执行c，执行callback ，如果callback用到c 才执行c ，callback里的b已经被加载过 不会重复加载。

     王名杰 2015/12/17 18:05:40
     所以输出结果是 a，

     王名杰 2015/12/17 18:05:48
     a，b，d

     王名杰 2015/12/17 18:06:55
     如果是amd 模式的 话 c加载完成并且执行完成后才会调用callback

     王名杰 2015/12/17 18:07:24
     这里的ensure 就是比amd 多了个 callback-demand


     */
var a =require('./a');
var b= require('./b');
require.ensure(['./c'],function(require){

    require("./b");
    require("./d");


},'demo_');