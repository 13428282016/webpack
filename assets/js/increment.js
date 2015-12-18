/**
 * Created by wmj on 2015/12/17.
 */
var add = require('./math').add;
exports.increment=function(val){

  return add(val,1);

};