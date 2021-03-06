/* eslint-disable no-console,func-names,react/no-multi-comp */
const React = require('react');
const ReactDOM = require('react-dom');
const Table = require('table-v7');
import Animate from 'rc-animate';
require('table-v7/assets/index.less');
require('table-v7/assets/animation.less');

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      { title: '表头1', dataIndex: 'a', key: 'a', width: 100 },
      { id: '123', title: '表头2', dataIndex: 'b', key: 'b', width: 100 },
      { title: '表头3', dataIndex: 'c', key: 'c', width: 200 },
      {
        title: '操作', dataIndex: '', key: 'd', render: (text, record) =>
        <a onClick={e => this.onDelete(record.key, e)} href="#">Delete</a>,
      },
    ];
    this.state = {
      data: [
        { a: '123', key: '1' },
        { a: 'cdd', b: 'edd', key: '2' },
        { a: '1333', c: 'eee', key: '3' },
      ],
    };
  }

  onDelete(key, e) {
    console.log('Delete', key);
    e.preventDefault();
    const data = this.state.data.filter(item => item.key !== key);
    this.setState({ data });
  }

  onAdd() {
    const data = [...this.state.data];
    data.push({
      a: 'new data',
      b: 'new data',
      c: 'new data',
      key: Date.now(),
    });
    this.setState({ data });
  }

  getBodyWrapper(body) {
    return (
      <Animate transitionName="move" component="tbody" className={body.props.className}>
        {body.props.children}
      </Animate>
    );
  }

  render() {
    return (
      <div style={{ margin: 20 }}>
        <h2>Table row with animation</h2>
        <button onClick={() => this.onAdd()}>添加</button>
        <Table
          columns={this.columns}
          data={this.state.data}
          getBodyWrapper={this.getBodyWrapper}
        />
      </div>
    );
  }
}
ReactDOM.render(
  <Demo />,
  document.getElementById('__react-content')
);
