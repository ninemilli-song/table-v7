webpackJsonp([16],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(261);


/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/* eslint-disable no-console,func-names,react/no-multi-comp */
	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(40);
	var Table = __webpack_require__(185);
	__webpack_require__(202);
	
	var columns = [{ title: '表头1', dataIndex: 'a', key: 'a', width: 100 }, { title: '表头2', dataIndex: 'b', key: 'b', width: 100 }, { title: '表头3', dataIndex: 'c', key: 'c', width: 100 }, { title: '表头4', dataIndex: 'b', key: 'd', width: 100 }, { title: '表头5', dataIndex: 'b', key: 'e', width: 100 }, { title: '表头6', dataIndex: 'b', key: 'f', width: 100 }, { title: '表头7', dataIndex: 'b', key: 'g', width: 100 }, { title: '表头8', dataIndex: 'b', key: 'h', width: 100 }, { title: '表头9', dataIndex: 'b', key: 'i', width: 100 }, { title: '表头10', dataIndex: 'b', key: 'j', width: 100 }, { title: '表头11', dataIndex: 'b', key: 'k', width: 100 }, { title: '表头12', dataIndex: 'b', key: 'l', width: 100 }];
	
	var data = [{ a: '123', b: 'xxxxxxxx xxxxxxxx', d: 3, key: '1' }, { a: 'cdd', b: 'edd12221 edd12221', d: 3, key: '2' }, { a: '133', c: 'edd12221 edd12221', d: 2, key: '3' }, { a: '133', c: 'edd12221 edd12221', d: 2, key: '4' }, { a: '133', c: 'edd12221 edd12221', d: 2, key: '5' }, { a: '133', c: 'edd12221 edd12221', d: 2, key: '6' }, { a: '133', c: 'edd12221 edd12221', d: 2, key: '7' }, { a: '133', c: 'edd12221 edd12221', d: 2, key: '8' }, { a: '133', c: 'edd12221 edd12221', d: 2, key: '9' }];
	
	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(
	    'h2',
	    null,
	    'Scroll X/Y'
	  ),
	  React.createElement(Table, {
	    useFixedHeader: true,
	    style: { width: 800 },
	    scroll: { x: true, y: 300 },
	    columns: columns,
	    data: data
	  })
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=scrollXY.js.map