import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedTodoList} from './ConnectedTodoList';
import {Header} from './Header';
import {store} from './redux';

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <ConnectedTodoList />
        </div>
      </Provider>
    );
  }
}
