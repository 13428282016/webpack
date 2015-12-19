webpackJsonp([5,9],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13);


/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wmj on 2015/12/17.
	 */


	var inc =__webpack_require__(14).increment;

	console.log(inc(10));

/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wmj on 2015/12/17.
	 */
	var add = __webpack_require__(15).add;
	exports.increment=function(val){

	  return add(val,1);

	};

/***/ },

/***/ 15:
/***/ function(module, exports) {

	/**
	 * Created by wmj on 2015/12/17.
	 */
	exports.add=function(a,b)
	{

	    return a+b;

	};

/***/ }

});