# rc-table

React table component.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rc-table.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-table
[travis-image]: https://img.shields.io/travis/react-component/table.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/table
[coveralls-image]: https://img.shields.io/coveralls/react-component/table.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/table?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/table.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/table
[download-image]: https://img.shields.io/npm/dm/rc-table.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-table

## install

<!--[![rc-table](https://nodei.co/npm/rc-table.png)](https://npmjs.org/package/rc-table)-->

## Development

```
npm install
npm start
```

## Example

http://react-component.github.io/table/examples/

## Usage

```js
import Table from 'rc-table';

const columns = [{
  title: '表头1', dataIndex: 'a', key:'a', width: 100,
}, {
  title: '表头2', dataIndex: 'b', key:'b', width: 100,
}, {
  title: '表头3', dataIndex: 'c', key:'c', width: 200,
}, {
  title: '操作', dataIndex: '', key:'d', render: () => <a href="#">操作</a>,
}];

const data = [
  { a: '123', b: '123', c: '123', key:'1' },
  { a: '123', b: '123', c: '123', key:'2' },
  { a: '123', b: '123', c: '123', key:'3' },
];

React.render(<Table columns={columns} data={data} />, mountNode);
```

## API

### Properties
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| prefixCls | String | rc-table | |
| className | className | | additional className |
| useFixedHeader | Boolean | false | whether use separator table for header. better set width for columns |
| scroll | Object | {x: false, y: false} | whether table can be scroll in x/y direction, `x` or `y` can be a number that indicated the width and height of table body |
| expandIconAsCell | Boolean | false | whether render expandIcon as a cell |
| expandIconColumnIndex | Number | 0 | The index of expandIcon which column will be inserted when expandIconAsCell is false |
| rowKey | string or Function(record,index):string | 'key' | If rowKey is string, `record[rowKey]` will be used as key. </br>If rowKey is function, the return value of `rowKey(record, index)` will be use as key. |
| rowClassName | Function(record,index):string |  | get row's className |
| rowRef | Function(record,index):string |  | get row's ref key |
| defaultExpandedRowKeys | String[] | [] | initial expanded rows keys |
| expandedRowKeys | String[] |  | current expanded rows keys |
| defaultExpandAllRows | Boolean | false | Expand All Rows initially |
| onExpandedRowsChange | Function(expandedRows) | save the expanded rows in the internal state | function to call when the expanded rows change |
| onExpand | Function(expanded, record) |  | function to call when click expand icon |
| expandedRowClassName | Function(recode,index):string |  | get expanded row's className |
| data | Object[] |  | data record array to be rendered |
| indentSize | Number | 15 | indentSize for every level of data.i.children, better using with column.width specified |
| onRowClick | Function(record, index) |  | handle rowClick action, index means the index of current row among fatherElement[childrenColumnName] |
| columnsPageSize | Number | 5 | pageSize of columns. (Deprecated, use fixed columns) |
| columnsPageRange | Array | | columns index range need paging, like [2,10]. (Deprecated, use column.fixed) |
| showHeader | Boolean | true | whether table head is shown |
| title | Function(currentData) |  | table title render function |
| footer | Function(currentData) |  | table footer render function |
| getBodyWrapper | Function(body) |  | get wrapper of tbody, [demoe](http://react-component.github.io/table/examples/animation.html) |
| columns | TableColumns`<Object>` |  |

#### TableColumns
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| key | String |  | key of this column |
| className | String |  | className of this column |
| colSpan | Number |  | thead colSpan of this column |
| title | React Node |  | title of this column |
| dataIndex | String |  | display field of the data record |
| width | String|Number |  | width of the specific proportion calculation according to the width of the columns |
| fixed | String\|Boolean |  | this column will be fixed when table scroll horizontally: true or 'left' or 'right' |
| render | Function(value, row, index) |  | The render function of cell, has three params: the text of this cell, the record of this row, the index of this row, it's return an object:{ children: value, props: { colSpan: 1, rowSpan:1 } } ==> 'children' is the text of this cell, props is some setting of this cell, eg: 'colspan' set td colspan, 'rowspan' set td rowspan |
| columns | TableColumns |  | define multiple table header |


## License

table-v7 is released under the MIT license.
