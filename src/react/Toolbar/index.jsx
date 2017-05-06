import React from 'react';
import PropTypes from 'prop-types';

class Toolbar extends React.Component {
  render() {
    let activeId = null;
    for (let i = 0; i < this.props.chart.rows.length; i += 1) {
      const row = this.props.chart.rows[i];
      if (row.active) {
        activeId = row.id;
      }
    }
    return (
      <div id="toolbar">
        <div id="chart-controls" className="control-group">
          <button onClick={this.props.addRow}>Add Row</button>
        </div>
        {
          activeId === null
            ? null : (
              <div id="row-controls" className="control-group">
                <button onClick={this.props.addColumn}>Add Column</button>
              </div>
            )
        }
      </div>
    );
  }
}

Toolbar.propTypes = {
  chart: PropTypes.shape({
    rows: PropTypes.array,
  }).isRequired,
  addRow: PropTypes.func.isRequired,
  addColumn: PropTypes.func.isRequired,
};

export default Toolbar;
