import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {HashRouter, Switch, Route} from 'react-router-dom';
import throttle from 'lodash/throttle';
import uuidv4 from 'uuid/v4';

import BoardListContainer from './containers/BoardListContainer';
import BoardContainer from './containers/BoardContainer';
import reducer from './reducer';
import initialState from './initialState';

const style = css`
  color: blue;
  background-color: green;
`;

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error retrieving localStorage state');
    console.error(err);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(err) {
    console.error('Error setting localStorage state');
    console.error(err);
  }
};

const persistedState = loadState();

let store = createStore(reducer,
  persistedState ? persistedState : initialState,
  //TODO: Only use the below argument if in dev build. Remove from prod builds.
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(throttle(() => {
  saveState(store.getState());
}), 1000);

render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path='/' component={BoardListContainer} />
        <Route exact path='/board/:id' component={BoardContainer} />
      </Switch>
    </HashRouter>
  </Provider>,
  
  document.getElementById('app')
);