import React from 'react';
import PropTypes from 'prop-types';
import {ConnectedTodo} from './ConnectedTodo';
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
  todos: state
});

export const ConnectedTodoList = connect(mapStateToProps)(
  TodoList
);
