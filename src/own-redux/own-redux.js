function createStore(reducer) {
  let currentState = reducer(undefined, {type: '@@INIT'});

  return {
    getState() {
      return currentState;
    },

    dispatch(action) {
      currentState = reducer(currentState, action);
    }
  };
}

function combineReducer(reducers) {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((acc, key) => {
      acc[key] = reducers[key](state[key], action);
      return acc;
    }, {});
  };
}

const rootReducer = (state = [], action) => {
  if (action.type === 'ADD') {
    return [...state, action.payload];
  }
  return state;
};

const store = createStore(
  combineReducer({
    todos: rootReducer
  })
);

console.log('store.getState()', store.getState());

store.dispatch({
  type: 'ADD',
  payload: 1
});

console.log('store.getState()', store.getState());

store.dispatch({
  type: 'ADD',
  payload: 2
});

console.log('store.getState()', store.getState());
