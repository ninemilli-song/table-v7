webpackJsonp([12],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(257);


/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Created with JetBrains WebStorm.
	 * Author: l
	 * Date: 16/8/31
	 * Time: 上午11:36
	 */
	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(40);
	var Table = __webpack_require__(185);
	__webpack_require__(202);
	
	var columns = [{ title: '表头1', dataIndex: 'a', key: 'a', width: 100 }, { id: '123', title: '表头2', dataIndex: 'b', key: 'b', width: 100 }, { title: '表头3', dataIndex: 'c', key: 'c', width: 200, columns: [{
	    title: 'pos',
	    dataIndex: 'e'
	  }, {
	    title: 'office',
	    dataIndex: 'f'
	  }] }, {
	  title: '操作', dataIndex: '', key: 'd', render: function render() {
	    return React.createElement(
	      'a',
	      { href: '#' },
	      '操作'
	    );
	  }
	}];
	
	var data = [{ a: '123', e: 'test', key: '1' }, { a: 'cdd', b: 'edd', f: 'test', key: '2' }, { a: '1333', c: 'eee', d: 2, e: 'test', f: 'test', key: '3' }];
	
	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(
	    'h2',
	    null,
	    'simple table'
	  ),
	  React.createElement(Table, { columns: columns, data: data })
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=multipleHead.js.map