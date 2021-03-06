import React from 'react';
import PropTypes from 'prop-types';
import ChartControls from './ChartControls';
import RowControls from './RowControls';
import ColumnControls from './ColumnControls';

function Toolbar({
  chart,
  addRow,
  addColumn,
  updateLabel,
  updateKey,
  toggleRepeat,
  updateRowProp,
  toggleEndOfLine,
  removeActive,
  updateTitle,
  updateAuthor,
  saveLoad,
}) {
  // determine active row or column
  let activeRow = null;
  let activeColumn = null;
  const rows = chart.rows;
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
      <div id="save-and-load">
        <button onClick={saveLoad}>Save/Load</button>
      </div>
      <ChartControls
        addRow={addRow}
        updateTitle={updateTitle}
        updateAuthor={updateAuthor}
        chart={chart}
      />
      <RowControls
        row={activeRow}
        updateLabel={updateLabel}
        addColumn={addColumn}
        toggleRepeat={toggleRepeat}
        updateRowProp={updateRowProp}
        removeActive={removeActive}
      />
      {
        activeColumn
          ? (
            <ColumnControls
              column={activeColumn}
              updateKey={updateKey}
              toggleEndOfLine={toggleEndOfLine}
              removeActive={removeActive}
            />
          ) : null
      }
    </div>
  );
}

Toolbar.propTypes = {
  updateTitle: PropTypes.func.isRequired,
  updateAuthor: PropTypes.func.isRequired,
  removeActive: PropTypes.func.isRequired,
  toggleEndOfLine: PropTypes.func.isRequired,
  updateRowProp: PropTypes.func.isRequired,
  chart: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  addRow: PropTypes.func.isRequired,
  updateLabel: PropTypes.func.isRequired,
  addColumn: PropTypes.func.isRequired,
  updateKey: PropTypes.func.isRequired,
  toggleRepeat: PropTypes.func.isRequired,
  saveLoad: PropTypes.func.isRequired,
};

export default Toolbar;
