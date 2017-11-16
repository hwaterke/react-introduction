import React from 'react';
import {Provider} from 'react-redux';
import {Header} from '../Header';
import {ConnectedTodoList} from './ConnectedTodoList';
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
