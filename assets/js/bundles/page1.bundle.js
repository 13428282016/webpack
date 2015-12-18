webpackJsonp([6,8],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12);


/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wmj on 2015/12/17.
	 */


	var inc =__webpack_require__(13).increment;

	console.log(inc(10));

/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wmj on 2015/12/17.
	 */
	var add = __webpack_require__(14).add;
	exports.increment=function(val){

	  return add(val,1);

	};

/***/ },

/***/ 14:
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