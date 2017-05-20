import React from 'react';
import PropTypes from 'prop-types';

class Chart extends React.Component {
  setActiveItem(e) {
    const itemId = jQuery(e.target).closest('[id]').attr('id');
    this.props.setActiveItem(itemId);
  }
  render() {
    const rows = this.props.chart.rows;
    return (
      <div id="chart">
        <header>
          {
            this.props.chart.title.length > 0
              ? <h1>{this.props.chart.title}</h1>
              : null
          }
          {
            this.props.chart.author.length > 0
              ? <p>By {this.props.chart.author}</p>
              : null
          }
        </header>
        {
          rows.map(row =>
            <div
              className={`row${row.active ? ' active' : ''}`}
              key={row.id}
              id={row.id}
              onClick={e => this.setActiveItem(e)}
            >
              <div className="label">
                {row.label || 'Label'}
              </div>
              <div className="columns">
                {
                  row.columns.map((column, i) => {
                    let className = 'column';
                    className += column.active ? ' active' : '';
                    className += column.endOfLine ? ' end-of-line' : '';
                    return (
                      <div
                        className={className}
                        key={column.id}
                        id={column.id}
                        onClick={e => this.props.setActiveItem(e)}
                      >
                        <div className="key">{column.key}</div>
                        <div className="beats">
                          {
                            column.beats.map(beat => <div key={beat.id} className={`beat ${beat.type}`} />)
                          }
                        </div>
                      </div>
                    );
                  })
                }
              </div>
              {
                row.repeatActive
                  ? (
                    <div className="repeats">
                      Repeat {row.repeatTimes}X
                    </div>
                  ) : null
              }
            </div>,
          )
        }
      </div>
    );
  }
}

Chart.propTypes = {
  setActiveItem: PropTypes.func.isRequired,
  chart: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    rows: PropTypes.array,
  }).isRequired,
};

export default Chart;
