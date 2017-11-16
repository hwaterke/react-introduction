import React from 'react';
import PropTypes from 'prop-types';
import {ConnectedTodo} from '../solution/ConnectedTodo';
import {connect} from 'react-redux';

export const TodoList = ({todos}) => (
  <ul>
    {todos.map(todo => (
      <ConnectedTodo key={todo.uuid} todo={todo} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

// Redux

const mapStateToProps = state => ({
  todos: state.todos.filter(
    todo => !todo.completed || state.visibility
  )
});

export const ConnectedTodoList = connect(mapStateToProps)(
  TodoList
);
