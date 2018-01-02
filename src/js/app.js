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
  boards: [{
    id: 1,
    name: 'Test Board',
  }],
  lists: [{
    boardId: 1,
    id: 1,
    name: 'Test List',
  }],
  cards: [{
    boardId: 1,
    listId: 1,
    id: 1,
    name: 'Test Card',
  }],
};

// let initialState = {
//   activeBoard: null,
//   boards: [
//     {
//       id: 1,
//       name: 'Test Board',
//       lists: [
//         {
//           id: 1,
//           name: 'Test List',
//           cards: [
//             {
//               id: 1,
//               name: 'Test Card',
//               description: 'This is a test card description',
//               done: false,
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

// let reducer = (state, action) => {
//   console.log(`action: ${action.type}`);

//   let boardIndex, listIndex, cardIndex;
//   let board, list, card;

//   if (action.hasOwnProperty('boardId')) {
//     boardIndex = state.boards.findIndex(board => board.id === action.boardId);
//     board = state.boards[boardIndex];
//     console.log('BoardIndex:' + boardIndex);
//   }

//   if (action.hasOwnProperty('listId')) {
//     console.log(board);
//     if (!board) {
//       console.error('There is no board. Need the board object to get the correct list');
//     }

//     listIndex = board.lists.findIndex(list => list.id === action.listId);
//     list = board.lists[listIndex];
//   }

//   if (action.hasOwnProperty('cardId')) {
//     if (!list) {
//       console.error('There is no list. Need the list object to get the correct card');
//     }

//     cardIndex = list.cards.findIndex(card => card.id === action.cardId);
//     card = list.cards[cardIndex];
//   }


//   switch (action.type) {
//     case 'ADD_BOARD':
//       return {
//         ...state,
//         boards: [
//           ...state.boards,
//           {
//             id: state.boards[state.boards.length].id + 1,
//             name: action.boardName,
//             lists: [],
//           },
//         ],
//       };
//       break;

//     case 'DELETE_BOARD':
//       state.boards.splice(boardIndex, 1);
//       return {...state, boards: [...state.boards]};
//       break;

//     case 'RENAME_BOARD':
//       let boards = [...state.boards];
//       boards[boardIndex].name = action.boardName;
//       return {...state, boards: [...boards]};
//       break;

//     case 'DISPLAY_BOARD':
//       return {...state, activeBoard: parseInt(action.boardId)};
//       break;
    
//     case 'ADD_LIST':
//       state.boards[boardIndex].lists = [
//         ...state.boards[boardIndex].lists,
//         {id: uuidv4(), name: action.listName, cards: []}
//       ];
//       return {...state};
//       break;

//     case 'DELETE_LIST':
//       state.boards[boardIndex].lists.splice(listIndex, 1);
//       return {...state};
//       break;

//     case 'RENAME_LIST':
//       state.boards[boardIndex].lists[listIndex].name = action.listName;
//       return {...state};
//       break;

//     case 'ADD_CARD':
//       state.boards[boardIndex].lists[listIndex].cards = [
//         ...state.boards[boardIndex].lists[listIndex].cards,
//         {id: uuidv4(),
//           name: action.cardName,
//           description: action.cardDescription,
//           done: false,
//         },
//       ];
//       return {...state};
//       break;

//     case 'DELETE_CARD':
//       state.boards[boardIndex].lists[listIndex].cards.splice(cardIndex, 1);
//       return {...state};
//       break;

//     case 'SAVE_CARD':
//       card = {...card, name: action.cardName, description: action.cardDescription};
//       state.boards[boardIndex].lists[listIndex].cards[cardIndex] = {...card};
//       return {...state};
//       break;

//     case 'DONE_CARD':
//       let cardArray = state.boards[boardIndex].lists[listIndex].cards;
//       cardArray.splice(cardIndex, 1);
//       if (!card.done) {
//         cardArray = [
//           ...cardArray,
//           {...card, done: true},
//         ];
//       } else {
//         let insertIndex = cardArray.findIndex(card => card.done);
//         if (insertIndex >= 0) {
//           cardArray.splice(insertIndex, 0, {...card, done: false});
//         } else {
//           cardArray.splice(cardArray.length, 0, {...card, done: false});
//         }
//         cardArray = [...cardArray];
//       }
//       state.boards[boardIndex].lists[listIndex].cards = [...cardArray];
//       return {...state};
//       break;

//     default:
//       console.warn(`action type '${action.type}' did not match an action in the reducer. Using default case.`);
//       return state;
//   }
// }

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