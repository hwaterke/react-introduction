import PropTypes from 'prop-types';
import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    toggle: PropTypes.func.isRequired
  };

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <Todo
            key={todo.uuid}
            todo={todo}
            toggle={this.props.toggle}
          />
        ))}
      </ul>
    );
  }
}
