import React from 'react';
import PropTypes from 'prop-types';

class Toolbar extends React.Component {
  render() {
    // determine active row or column
    let activeRow = null;
    let activeColumn = null;
    const rows = this.props.chart.rows;
    for (let i = 0; i < rows.length; i += 1) {
      const row = rows[i];
      if (row.active) {
        activeRow = row;
        break;
      }
      for (let j = 0; j < row.columns.length; j += 1) {
        if (row.columns[j].active) {
          activeColumn = row.columns[j];
          break;
        }
      }
    }
    return (
      <div id="toolbar">
        <div id="chart-controls" className="control-group">
          <button onClick={this.props.addRow}>Add Row</button>
        </div>
        {
          activeRow === null
            ? null : (
              <div id="row-controls" className="control-group">
                <input
                  type="text"
                  placeholder="Label"
                  name={activeRow.id}
                  value={activeRow.label || ''}
                  onChange={this.props.updateLabel}
                />
                <button onClick={this.props.addColumn}>Add Column</button>
              </div>
            )
        }
        {
          activeColumn === null
            ? null : (
              <div id="row-controls" className="control-group">
                {
                  <input
                    type="text"
                    placeholder="C"
                    name={activeColumn.id}
                    value={activeColumn.key || ''}
                    onChange={this.props.updateKey}
                  />
                }
              </div>
            )
        }
      </div>
    );
  }
}

Toolbar.propTypes = {
  addRow: PropTypes.func.isRequired,
  updateLabel: PropTypes.func.isRequired,
  addColumn: PropTypes.func.isRequired,
};

export default Toolbar;
