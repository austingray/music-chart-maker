import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './Toolbar';
import Chart from './Chart';

class App extends React.Component {
  constructor(props) {
    super(props);

    const chart = {
      rows: [],
    };

    this.state = {
      chart,
    };
  }
  setActiveRow(e) {
    const rows = this.state.chart.rows.map((row) => {
      const updatedRow = Object.assign({}, row, {
        active: row.id === e.target.id,
      });
      return updatedRow;
    });
    const chart = Object.assign({}, this.state.chart, {
      rows,
    });
    this.setState({
      chart,
    });
  }
  addRow(e) {
    e.preventDefault();

    // update rows
    const rows = this.state.chart.rows.map((row) => {
      const updatedRow = Object.assign({}, row, {
        active: false,
      });
      return updatedRow;
    });
    rows.push({
      id: `${Date.now()}`,
      active: true,
      columns: [],
    });

    // update chart
    const chart = Object.assign({}, this.state.chart, {
      rows,
    });

    this.setState({
      chart,
    });
  }
  addColumn(e) {
    e.preventDefault();

    // update rows
    const rows = this.state.chart.rows.map((row) => {
      const columns = row.columns;
      if (row.active) {
        columns.push({
          id: `${Date.now()}`,
          key: 'C',
          beats: [
            { type: 'hit', id: '1' },
            { type: 'hit', id: '2' },
            { type: 'hit', id: '3' },
            { type: 'hit', id: '4' },
          ],
        });
      }
      return Object.assign({}, row, {
        columns,
      });
    });

    // update chart
    const chart = Object.assign({}, this.state.chart, {
      rows,
    });

    this.setState({
      chart,
    });
  }
  render() {
    return (
      <div>
        <Toolbar
          chart={this.state.chart}
          addRow={e => this.addRow(e)}
          addColumn={e => this.addColumn(e)}
          deleteRow={e => this.deleteRow(e)}
        />
        <Chart
          chart={this.state.chart}
          setActiveRow={e => this.setActiveRow(e)}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
