import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './Toolbar';
import Chart from './Chart';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chart: {
        rows: [],
      },
    };
  }
  setActiveItem(activeId) {
    const rows = this.state.chart.rows.map((row) => {
      const columns = row.columns.map(column =>
        Object.assign({}, column, {
          active: column.id === activeId,
        }),
      );
      return Object.assign({}, row, {
        active: row.id === activeId,
        columns,
      });
    });

    const chart = Object.assign({}, this.state.chart, {
      rows,
    });
    this.setState({
      chart,
    })
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
          active: false,
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
  updateLabel(e) {
    const rows = this.state.chart.rows.map((row) => {
      const label = row.active
        ? e.target.value
        : row.label;
      const updatedRow = Object.assign({}, row, {
        label,
      });
      return updatedRow;
    });

    // update chart
    const chart = Object.assign({}, this.state.chart, {
      rows,
    });

    this.setState({
      chart,
    });
  }
  updateKey(e) {
    const rows = this.state.chart.rows.map((row) => {
      const columns = row.columns.map(column =>
        Object.assign({}, column, {
          key: (column.active ? e.target.value : column.key),
        }),
      );
      return Object.assign({}, row, {
        columns,
      });
    });
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
          updateLabel={e => this.updateLabel(e)}
          addColumn={e => this.addColumn(e)}
          updateKey={e => this.updateKey(e)}
          deleteRow={e => this.deleteRow(e)}
        />
        <Chart
          chart={this.state.chart}
          setActiveItem={id => this.setActiveItem(id)}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
