webpackJsonp([19],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(264);


/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/* eslint-disable no-console,func-names,react/no-multi-comp */
	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(40);
	var Table = __webpack_require__(185);
	__webpack_require__(202);
	
	var data = [{
	  a: 'a1'
	}, {
	  a: 'a2',
	  b: 'b2',
	  children: [{
	    a: 'a2-1',
	    b: 'b2-1'
	  }, {
	    a: 'a2-2',
	    b: 'b2-2'
	  }]
	}, {
	  a: 'a3',
	  c: 'c3',
	  d: 'd3'
	}];
	
	var MyTable = React.createClass({
	  displayName: 'MyTable',
	  handleClick: function handleClick(record, e) {
	    e.preventDefault();
	    console.log(record.a);
	  },
	  render: function render() {
	    var _this = this;
	
	    var columns = [{ title: '表头1', dataIndex: 'a', key: 'a', width: 100 }, { title: '表头2', dataIndex: 'b', key: 'b', width: 100 }, { title: '表头3', dataIndex: 'c', key: 'c', width: 200 }, {
	      title: '操作', dataIndex: '', key: 'x', render: function render(text, record) {
	        return React.createElement(
	          'a',
	          { href: '#', onClick: function onClick(e) {
	              return _this.handleClick(record, e);
	            } },
	          'click ',
	          record.a
	        );
	      }
	    }];
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h2',
	        null,
	        'sub table'
	      ),
	      React.createElement(Table, {
	        columns: columns,
	        expandIconAsCell: true,
	        data: data,
	        rowKey: function rowKey(record) {
	          return record.a;
	        }
	      })
	    );
	  }
	});
	
	ReactDOM.render(React.createElement(MyTable, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=subTable.js.map