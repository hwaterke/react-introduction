import React from 'react';

export const Todo = ({todo, toggle}) => (
  <li
    onClick={() => toggle(todo.uuid)}
    className={todo.completed ? 'completed' : undefined}
  >
    {todo.content}
  </li>
);
