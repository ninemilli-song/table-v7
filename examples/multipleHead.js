/**
 * Created with JetBrains WebStorm.
 * Author: l
 * Date: 16/8/31
 * Time: 上午11:36
 */
const React = require('react');
const ReactDOM = require('react-dom');
const Table = require('table-v7');
require('table-v7/assets/index.less');

const columns = [
  { title: '表头1', dataIndex: 'a', key: 'a', width: 100 },
  { id: '123', title: '表头2', dataIndex: 'b', key: 'b', width: 100 },
  { title: '表头3', dataIndex: 'c', key: 'c', width: 200 , columns: [
    {
      title: 'pos',
      dataIndex: 'e',
    },
    {
      title: 'office',
      dataIndex: 'f',
    },
  ]},
  {
    title: '操作', dataIndex: '', key: 'd', render() {
    return <a href="#">操作</a>;
  },
  },
];

const data = [
  { a: '123', e: 'test', key: '1' },
  { a: 'cdd', b: 'edd', f: 'test', key: '2' },
  { a: '1333', c: 'eee', d: 2, e: 'test', f: 'test', key: '3' },
];

ReactDOM.render(
  <div>
    <h2>simple table</h2>
    <Table columns={columns} data={data} />
  </div>,
  document.getElementById('__react-content')
);
