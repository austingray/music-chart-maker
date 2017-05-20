import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './Toolbar';
import Chart from './Chart';

class MusicChartMaker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSaveAndLoadScreen: false,
      chart: {
        title: '',
        author: '',
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
      perline: 4,
      repeatActive: false,
      repeatTimes: 4,
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
          endOfLine: false,
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

    const chart = Object.assign({}, this.state.chart, {
      rows,
    });

    this.setState({
      chart,
    });
  }
  updateTitle(e) {
    const title = e.target.value;
    const chart = Object.assign({}, this.state.chart, {
      title,
    });
    this.setState({
      chart,
    });
  }
  updateAuthor(e) {
    const author = e.target.value;
    const chart = Object.assign({}, this.state.chart, {
      author,
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
  updateRowProp(prop, val) {
    const rows = this.state.chart.rows.map((row) => {
      const newVal = row.active
        ? val
        : row[prop];
      return Object.assign({}, row, {
        [prop]: newVal,
      });
    });
    const chart = Object.assign({}, this.state.chart, {
      rows,
    });
    this.setState({
      chart,
    });
  }
  toggleRepeat(e) {
    e.preventDefault();

    const rows = this.state.chart.rows.map((row) => {
      const active = row.active
        ? !row.repeatActive
        : row.repeatActive;
      const updatedRow = Object.assign({}, row, {
        repeatActive: active,
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
  toggleEndOfLine() {
    const rows = this.state.chart.rows.map((row) => {
      const columns = row.columns.map(column =>
        Object.assign({}, column, {
          endOfLine: (column.active ? !column.endOfLine : column.endOfLine),
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
  removeActive() {
    const rows = this.state.chart.rows.map((row) => {
      if (row.active) {
        return null;
      }
      const columns = row.columns.map((column) => {
        if (column.active) {
          return null;
        }
        return column;
      }).filter(column => column);
      return Object.assign({}, row, {
        columns,
      });
    }).filter(row => row);
    const chart = Object.assign({}, this.state.chart, {
      rows,
    });
    this.setState({
      chart,
    });
  }
  saveLoad() {
    this.setState({
      showSaveAndLoadScreen: true,
    });
  }
  loadChart(e) {
    e.preventDefault();
    const chart = JSON.parse(document.getElementById('current-chart-state').value);
    this.setState({
      showSaveAndLoadScreen: false,
      chart,
    });
  }
  render() {
    if (this.state.showSaveAndLoadScreen) {
      return (
        <div id="save-load-screen">
          <form onSubmit={e => this.loadChart(e)}>
            <p>Save the contents of the textarea in your favorite code editor. Paste it in the box below when you're ready to continue working on it, then hit the Load button.</p>
            <label htmlFor="current-chart-state">Current Chart</label>
            <textarea id="current-chart-state" defaultValue={JSON.stringify(this.state.chart)} />
            <button>Load Chart</button>
            <button
              onClick={(e) => {
                e.preventDefault();
                this.setState({ showSaveAndLoadScreen: false });
              }}
            >Cancel</button>
          </form>
        </div>
      );
    }
    return (
      <div>
        <Toolbar
          chart={this.state.chart}
          addRow={e => this.addRow(e)}
          updateLabel={e => this.updateLabel(e)}
          addColumn={e => this.addColumn(e)}
          updateKey={e => this.updateKey(e)}
          deleteRow={e => this.deleteRow(e)}
          toggleRepeat={e => this.toggleRepeat(e)}
          updateRowProp={(prop, val) => this.updateRowProp(prop, val)}
          toggleEndOfLine={e => this.toggleEndOfLine(e)}
          removeActive={() => this.removeActive()}
          updateTitle={e => this.updateTitle(e)}
          updateAuthor={e => this.updateAuthor(e)}
          saveLoad={e => this.saveLoad(e)}
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
  <MusicChartMaker />,
  document.getElementById('app'),
);
