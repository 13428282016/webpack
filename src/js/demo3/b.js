/**
 * Created by wmj on 2015/12/18.
 */
console.log('b');



require('./c');
require('./c');
require('./c');
require('./c');
require('./c');
require.ensure(['./d'],function(require){

    require("./d");

});