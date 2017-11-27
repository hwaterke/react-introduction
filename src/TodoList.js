import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {
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
