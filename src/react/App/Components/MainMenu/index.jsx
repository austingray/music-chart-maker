import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lightGray } from '../../utility/colors';
import { boxShadow } from '../../utility/shadows';
import Heading from '../Heading';
import Button from '../Button';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'default',
    };
  }
  render() {
    return (
      <div className={this.props.className}>
        <Heading>Music Chart Maker</Heading>
        {
          this.state.view === 'default' && (
            <React.Fragment>
              <Button>New Chart</Button>
              <Button>Load Chart</Button>
            </React.Fragment>
          )
        }
      </div>
    );
  }
}

MainMenu.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(MainMenu)`
  ${boxShadow}
  width: 50%;
  height: 50%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: ${lightGray};
  padding: 24px;
  text-align: center;
`;
