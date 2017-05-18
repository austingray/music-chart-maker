import React from 'react';
import PropTypes from 'prop-types';

class RowControls extends React.Component {
  componentDidUpdate() {
    jQuery('.adjust-left-pad').each((i, el) => {
      const width = jQuery(el).find('span').width() + 12;
      jQuery(el).find('input').css({
        paddingLeft: `${width}px`,
      });
    });
  }
  removeActive(e) {
    e.preventDefault();
    this.props.removeActive();
  }
  render() {
    const row = this.props.row;
    const addColumn = this.props.addColumn;
    const toggleRepeat = this.props.toggleRepeat;
    const updateLabel = this.props.updateLabel;
    if (row === null) {
      return null;
    }
    return (
      <div className="control-group">
        <input
          type="text"
          placeholder="Label"
          name={row.id}
          value={row.label || ''}
          onChange={updateLabel}
        />
        <button onClick={addColumn}>Add Column</button>
        <button onClick={toggleRepeat}>Toggle Repeat</button>
        {
          row.repeatActive
            ? (
              <label className="adjust-left-pad" htmlFor="repeat">
                <span>Repeat:</span>
                <input
                  type="number"
                  id="repeat"
                  min="1"
                  value={row.repeatTimes}
                  onChange={(e) => { this.props.updateRowProp('repeatTimes', e.target.value); }}
                />
              </label>
            ) : null
        }
        <button onClick={e => this.removeActive(e)}>Remove</button>
      </div>
    );
  }
}

RowControls.defaultProps = {
  row: {
    id: '',
    label: '',
  },
};

RowControls.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
  }),
  updateLabel: PropTypes.func.isRequired,
  addColumn: PropTypes.func.isRequired,
  toggleRepeat: PropTypes.func.isRequired,
  updateRowProp: PropTypes.func.isRequired,
  removeActive: PropTypes.func.isRequired,
};

export default RowControls;
