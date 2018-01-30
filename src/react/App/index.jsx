import React from 'react';
import ReactDOM from 'react-dom';
import MainMenu from './Components/MainMenu';

class ChartMaker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chart: null,
    };
  }
  render() {
    return (
      <div>
        <MainMenu />
      </div>
    );
  }
}

ReactDOM.render(
  <ChartMaker />,
  document.getElementById('app'),
);

export default ChartMaker;
