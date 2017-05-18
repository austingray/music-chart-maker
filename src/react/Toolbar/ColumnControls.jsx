import React from 'react';
import PropTypes from 'prop-types';

class ColumnControls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      endOfLine: this.props.column.endOfLine,
    };
  }
  toggleEndOfLine() {
    this.setState({
      endOfLine: !this.state.endOfLine,
    });
    this.props.toggleEndOfLine();
  }
  removeActive(e) {
    e.preventDefault();
    this.props.removeActive();
  }
  render() {
    const column = this.props.column;
    const updateKey = this.props.updateKey;
    return (
      <div className="control-group">
        <input
          type="text"
          placeholder="C"
          name={column.id}
          value={column.key || ''}
          onChange={updateKey}
        />
        <label htmlFor="toggle-end-of-line">
          <input
            checked={column.endOfLine}
            id="toggle-end-of-line"
            type="checkbox"
            value="on"
            onChange={() => this.toggleEndOfLine()}
          /> End Of Line
        </label>
        <button onClick={e => this.removeActive(e)}>Remove</button>
      </div>
    );
  }
}

ColumnControls.propTypes = {
  column: PropTypes.shape({
    id: PropTypes.string,
    key: PropTypes.string,
    endOfLine: PropTypes.bool,
  }).isRequired,
  updateKey: PropTypes.func.isRequired,
  toggleEndOfLine: PropTypes.func.isRequired,
  removeActive: PropTypes.func.isRequired,
};

export default ColumnControls;
