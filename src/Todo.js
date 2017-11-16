import PropTypes from 'prop-types';
import React from 'react';

export const Todo = ({todo, toggle}) => (
  <li
    onClick={() => toggle(todo.uuid)}
    className={todo.completed ? 'completed' : undefined}
  >
    {todo.content}
  </li>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    uuid: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    completed: PropTypes.bool
  }).isRequired,
  toggle: PropTypes.func.isRequired
};
