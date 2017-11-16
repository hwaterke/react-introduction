import {createStore} from 'redux';

const reducer = (state = [], action) => {
  console.log('Received action', action);

  if (action.type === 'ADD_TODO') {
    return [...state, action.payload];
  }

  if (action.type === 'TOGGLE_TODO') {
    return state.map(
      todo =>
        todo.uuid === action.payload
          ? {...todo, completed: !todo.completed}
          : todo
    );
  }

  return state;
};

export const store = createStore(reducer);

console.log('Initial state', store.getState());
store.subscribe(() =>
  console.log('New state', store.getState())
);

// Create some todos.
store.dispatch({
  type: 'ADD_TODO',
  payload: {uuid: 1, content: 'Learn React'}
});
store.dispatch({
  type: 'ADD_TODO',
  payload: {uuid: 2, content: 'Learn Redux'}
});
store.dispatch({
  type: 'ADD_TODO',
  payload: {uuid: 3, content: 'Learn reducers'}
});

store.dispatch({type: 'TOGGLE_TODO', payload: 1});
