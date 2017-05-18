import React from 'react';
import PropTypes from 'prop-types';

function ChartControls({ addRow, updateTitle }) {
  return (
    <div id="chart-controls" className="control-group">
      <input type="text" onChange={updateTitle} placeholder="Song Title" />
      <button onClick={addRow}>Add Row</button>
    </div>
  );
}

ChartControls.propTypes = {
  updateTitle: PropTypes.func.isRequired,
  addRow: PropTypes.func.isRequired,
};

export default ChartControls;
