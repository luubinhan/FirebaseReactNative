import agent from './agent';
import * as types from './constants/actionTypes';

function isPromise(v) {
  return v && typeof v.then === 'function';
}

const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    store.dispatch({types: types.ASYNC_START});

    action.payload.then(
      res => {
        console.log('RESULT', res);
        action.payload = res;
        store.dispatch({ type: types.ASYNC_END, promise: action.payload });
        store.dispatch(action);
      },
      error => {
        console.warn('ERROR', error);
        action.error = true;
        action.payload = error.response.body;
        store.dispatch(action);
      }
    );
    return;
  }
  next(action);
};

const localStorageMiddleware = store => next => action => {
  if (action.type === types.REGISTER || action.type === types.LOGIN) {
    if (!action.error) {
      window.localStorage.setItem('jwt', action.payload.user.token);
      agent.setToken(action.payload.user.token);
    }
  } else if (action.type === types.LOGOUT) {
    window.localStorage.removeItem('jwt');
    agent.setToken(null);
  }
  next(action);
};

export { localStorageMiddleware, promiseMiddleware };
