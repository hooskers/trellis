import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {HashRouter, Switch, Route} from 'react-router-dom';
import throttle from 'lodash/throttle';

import BoardListContainer from './containers/BoardListContainer';
import BoardContainer from './containers/BoardContainer';

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

let initialState = {
  activeBoard: null,
  boards: [
    {
      id: 1,
      name: 'Test Board',
      lists: [
        {
          id: 1,
          name: 'Test List',
          cards: [
            {
              id: 1,
              name: 'Test Card',
              description: 'This is a test card description',
              done: false,
            },
          ],
        },
      ],
    },
  ],
};

let reducer = (state, action) => {
  console.log(`action: ${action.type}`);

  switch (action.type) {
    case 'ADD_BOARD':
      return {
        ...state,
        boards: [
          ...state.boards,
          {
            id: state.boards.length + 1,
            name: action.boardName,
            lists: [],
          },
        ],
      };
      break;

    case 'DELETE_BOARD':
      return {
        ...state,
        boards: state.boards.filter((board) => board.id !== action.boardId),
      };
      break;

    case 'RENAME_BOARD':
      let boardIndex = state.boards.findIndexOf((board) => board.id === action.boardId);
      let boards = [...state.boards];
      boards[boardIndex].name = action.boardName;
      return {...state, ...boards};
      break;

    case 'DISPLAY_BOARD':
      return {...state, activeBoard: parseInt(action.boardId)};
      break;
    
    case 'ADD_LIST':
      break;

    case 'DELETE_LIST':
      break;

    case 'RENAME_LIST':
      break;

    case 'ADD_CARD':
      break;

    case 'DELETE_CARD':
      break;

    case 'SAVE_CARD':
      break;

    case 'DONE_CARD':
      break;

    default:
      console.warn(`action type '${action.type}' did not match an action in the reducer. Using default case.`);
      return state;
  }
}

const persistedState = loadState();

let store = createStore(reducer, persistedState ? persistedState : initialState);

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