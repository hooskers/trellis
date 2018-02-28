import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import throttle from 'lodash/throttle';

import BoardListContainer from './components/BoardList/BoardListContainer';
import BoardContainer from './components/Board/BoardContainer';
import reducer from './reducer';
import initialState from './initialState';

import '../css/ionicons.min.css';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    throw new Error(err);
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    throw new Error(err);
  }
};

const persistedState = loadState();

const store = createStore(
  reducer,
  persistedState || initialState,
  // TODO: Only use the below argument if in dev build. Remove from prod builds.
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(throttle(() => {
  saveState(store.getState());
}), 1000);

render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={BoardListContainer} />
        <Route exact path="/board/:id" component={BoardContainer} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('app'),
);
