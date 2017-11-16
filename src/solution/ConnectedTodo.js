import {connect} from 'react-redux';
import {Todo} from '../Todo';

const mapDispatchToProps = dispatch => ({
  toggle: uuid =>
    dispatch({type: 'TOGGLE_TODO', payload: uuid})
});

export const ConnectedTodo = connect(
  undefined,
  mapDispatchToProps
)(Todo);
