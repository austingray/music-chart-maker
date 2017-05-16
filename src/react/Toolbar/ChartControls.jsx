import React from 'react';
import PropTypes from 'prop-types';

function ChartControls({ addRow }) {
  return (
    <div id="chart-controls" className="control-group">
      <button onClick={addRow}>Add Row</button>
    </div>
  );
}

ChartControls.propTypes = {
  addRow: PropTypes.func.isRequired,
};

export default ChartControls;
