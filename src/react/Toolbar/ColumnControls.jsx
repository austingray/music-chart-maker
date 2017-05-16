import React from 'react';
import PropTypes from 'prop-types';

function ColumnControls({ column, updateKey }) {
  if (column === null) {
    return null;
  }
  return (
    <div className="control-group">
      {
        <input
          type="text"
          placeholder="C"
          name={column.id}
          value={column.key || ''}
          onChange={updateKey}
        />
      }
    </div>
  );
}

ColumnControls.defaultProps = {
  column: {
    id: '',
    key: '',
  },
};

ColumnControls.propTypes = {
  column: PropTypes.shape({
    id: '',
    key: '',
  }),
  updateKey: PropTypes.func.isRequired,
};

export default ColumnControls;
