/* eslint prop-types: 0 */

import uuidv4 from 'uuid/v4';
import initialState from './initialState';

// TODO: The uuidv4() calls make these impure. IDs should be passed to action/reducer.
// Pass the IDs through the action calls
const reducer = (state, action) => {
  console.log(`action: ${action.type}`);

  if (!state) {
    return initialState;
  }

  const newState = state;

  switch (action.type) {
    case 'ADD_BOARD': {
      newState.boards[action.boardId] = {
        id: action.boardId,
        name: action.boardName,
        listIds: [],
      };
      return { ...newState };
    }

    case 'DELETE_BOARD': {
      newState.boards[action.boardId].listIds.forEach((listId) => {
        newState.lists[listId].cardIds.forEach((cardId) => {
          delete newState.cards[cardId];
        });
        delete newState.lists[listId];
      });

      delete newState.boards[action.boardId];
      return { ...newState };
    }

    case 'RENAME_BOARD': {
      newState.boards[action.boardId].name = action.boardName;
      return { ...newState };
    }

    case 'REARRANGE_LIST': {
      const rlTemp = newState.boards[action.boardId].listIds
        .slice(action.sourceIndex, action.sourceIndex + 1)[0];
      newState.boards[action.boardId].listIds.splice(action.sourceIndex, 1);
      newState.boards[action.boardId].listIds.splice(action.destinationIndex, 0, rlTemp);

      return { ...newState };
    }

    case 'ADD_LIST': {
      const newListId = uuidv4();

      newState.lists[newListId] = {
        id: newListId,
        name: action.listName,
        cardIds: [],
      };
      newState.boards[action.boardId].listIds = [
        newListId,
        ...newState.boards[action.boardId].listIds,
      ];
      return { ...newState };
    }

    case 'DELETE_LIST': {
      newState.lists[action.listId].cardIds.forEach(cardId => delete newState.cards[cardId]);

      delete newState.lists[action.listId];
      newState.boards[action.boardId].listIds = [
        ...newState.boards[action.boardId].listIds.filter(listId => listId !== action.listId),
      ];
      return { ...newState };
    }

    case 'RENAME_LIST': {
      newState.lists[action.listId].name = action.listName;
      return { ...newState };
    }

    case 'ADD_CARD': {
      const newCardId = uuidv4();

      newState.cards[newCardId] = {
        id: newCardId,
        name: action.cardName,
        description: action.cardDescription,
        done: false,
      };
      newState.lists[action.listId].cardIds = [
        ...newState.lists[action.listId].cardIds,
        newCardId,
      ];
      return { ...newState };
    }

    case 'DELETE_CARD': {
      delete newState.cards[action.cardId];
      newState.lists[action.listId].cardIds = [
        ...newState.lists[action.listId].cardIds.filter(cardId => cardId !== action.cardId),
      ];
      return { ...newState };
    }

    case 'SAVE_CARD': {
      newState.cards[action.cardId] = {
        ...newState.cards[action.cardId],
        name: action.cardName,
        description: action.cardDescription,
      };
      return { ...newState };
    }

    case 'SAVE_CARD_NAME': {
      newState.cards[action.cardId] = {
        ...newState.cards[action.cardId],
        name: action.cardName,
      };
      return { ...newState };
    }

    case 'SAVE_CARD_DESCRIPTION': {
      newState.cards[action.cardId] = {
        ...newState.cards[action.cardId],
        description: action.cardDescription,
      };
      return { ...newState };
    }

    case 'DONE_CARD': {
      newState.cards[action.cardId] = {
        ...newState.cards[action.cardId],
        done: !newState.cards[action.cardId].done,
      };
      return { ...newState };
    }

    case 'REARRANGE_CARD': {
      const rcTemp = newState.lists[action.sourceList].cardIds.splice(action.sourceIndex, 1)[0];
      newState.lists[action.destList].cardIds.splice(action.destIndex, 0, rcTemp);

      newState.lists[action.sourceList].cardIds = [...newState.lists[action.sourceList].cardIds];
      newState.lists[action.destList].cardIds = [...newState.lists[action.destList].cardIds];

      return { ...newState };
    }

    default:
      return newState;
  }
};

export default reducer;
