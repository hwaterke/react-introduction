import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const _Header = ({toggle}) => (
  <header>
    <h1>Redux</h1>
    <h2>Introduction</h2>
    <button onClick={toggle}>Toggle visibility</button>
  </header>
);

_Header.propTypes = {
  toggle: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch({type: 'TOGGLE_VISIBILITY'})
});

export const Header = connect(
  undefined,
  mapDispatchToProps
)(_Header);
