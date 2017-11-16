import React from 'react';
import {Header} from './Header';
import {TodoList} from './TodoList';

export class App extends React.Component {
  state = {
    todos: [
      {uuid: 1, content: 'Learn React', completed: true},
      {uuid: 2, content: 'Learn Redux'},
      {uuid: 3, content: 'Learn reducers'}
    ]
  };

  toggle = todoUuid => {
    this.setState({
      todos: this.state.todos.map(
        todo =>
          todo.uuid === todoUuid
            ? {...todo, completed: !todo.completed}
            : todo
      )
    });
  };

  render() {
    return (
      <div>
        <Header />
        <TodoList
          todos={this.state.todos}
          toggle={this.toggle}
        />
      </div>
    );
  }
}
