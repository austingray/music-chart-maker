import React from 'react';
import PropTypes from 'prop-types';

function ChartControls({ chart, addRow, updateTitle, updateAuthor }) {
  return (
    <div id="chart-controls" className="control-group">
      <input type="text" value={chart.title} onChange={updateTitle} placeholder="Song Title" />
      <input type="text" value={chart.author} onChange={updateAuthor} placeholder="Band/Author" />
      <button onClick={addRow}>Add Row</button>
    </div>
  );
}

ChartControls.propTypes = {
  chart: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  updateAuthor: PropTypes.func.isRequired,
  updateTitle: PropTypes.func.isRequired,
  addRow: PropTypes.func.isRequired,
};

export default ChartControls;
