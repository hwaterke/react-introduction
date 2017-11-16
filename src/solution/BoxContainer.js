import PropTypes from 'prop-types';
import React from 'react';
import {Box} from './Box';

export class BoxContainer extends React.Component {
  static propTypes = {
    title: PropTypes.string
  };

  state = {
    counter: 0
  };

  inc = () => {
    this.setState({counter: this.state.counter + 1});
  };

  dec = () => {
    this.setState({counter: this.state.counter - 1});
  };

  render() {
    return (
      <Box
        title={this.props.title}
        counter={this.state.counter}
        dec={this.dec}
        inc={this.inc}
      />
    );
  }
}
