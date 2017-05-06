import React from 'react';
import PropTypes from 'prop-types';

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.setActiveRow.bind(this);
  }
  setActiveRow(e) {
    this.props.setActiveRow(e);
  }
  render() {
    const rows = this.props.chart.rows;
    return (
      <div id="chart">
        {
          rows.map(row =>
            <div
              className={`row${row.active ? ' active' : ''}`}
              key={row.id}
              id={row.id}
              onClick={e => this.setActiveRow(e)}
            >
              <div className="label">
                {row.label || 'label'}
              </div>
              <div className="columns">
                {
                  row.columns.map(column =>
                    <div
                      className="column"
                      key={column.id}
                    >
                      <div className="key">{column.key}</div>
                      <div className="beats">
                        {
                          column.beats.map(beat => <div key={beat.id} className={`beat ${beat.type}`} />)
                        }
                      </div>
                    </div>,
                  )
                }
              </div>
            </div>,
          )
        }
      </div>
    );
  }
}

Chart.propTypes = {
  setActiveRow: PropTypes.func.isRequired,
  chart: PropTypes.shape({
    rows: PropTypes.array,
  }).isRequired,
};

export default Chart;
