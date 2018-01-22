import uuidv4 from 'uuid/v4';

const reducer = (state, action) => {
  console.log(`action: ${action.type}`);
  
  let boardIndex, listIndex, cardIndex;
  
  switch (action.type) {
    case 'ADD_BOARD':
      let newBoardId = uuidv4();
      state.boards[newBoardId] = {
        id: newBoardId,
        name: action.boardName,
        listIds: [],
      };
      return {...state}
    
    case 'DELETE_BOARD':
      for (let listId of state.boards[action.boardId].listIds) {
        for (let cardId of state.lists[listId].cardIds) {
          delete state.cards[cardId];
        }
        delete state.lists[listId];
      }
      delete state.boards[action.boardId];
      return {...state};
    
    case 'RENAME_BOARD':
      state.boards[action.boardId].name = action.boardName;
      return {...state};
    
    case 'ADD_LIST':
      let newListId = uuidv4();
      state.lists[newListId] = {
        id: newListId,
        name: action.listName,
        cardIds: [],
      };
      state.boards[action.boardId].listIds = [
        ...state.boards[action.boardId].listIds,
        newListId,
      ];
      return {...state};
    
    case 'DELETE_LIST':
      for (let cardId of state.lists[action.listId].cardIds) {
        delete state.cards[cardId];
      }
      delete state.lists[action.listId];
      state.boards[action.boardId].listIds = [
        ...state.boards[action.boardId].listIds.filter(listId => listId !== action.listId),
      ];
      return {...state};
    
    case 'RENAME_LIST':
      state.lists[action.listId].name = action.listName;
      return {...state};
    
    case 'ADD_CARD':
      let newCardId = uuidv4();
      state.cards[newCardId] = {
        id: newCardId,
        name: action.cardName,
        description: action.cardDescription,
        done: false,
      };
      state.lists[action.listId].cardIds = [
        ...state.lists[action.listId].cardIds,
        newCardId,
      ];
      return {...state};
    
    case 'DELETE_CARD':
      delete state.cards[action.cardId];
      state.lists[action.listId].cardIds = [
        ...state.lists[action.listId].cardIds.filter(cardId => cardId !== action.cardId),
      ];
      return {...state};
    
    case 'SAVE_CARD':
      state.cards[action.cardId] = {
        ...state.cards[action.cardId],
        name: action.cardName,
        description: action.cardDescription,
      }
      return {...state};
    
    case 'SAVE_CARD_NAME':
      state.cards[action.cardId] = {
        ...state.cards[action.cardId],
        name: action.cardName,
      }
      return {...state};
    
    case 'SAVE_CARD_DESCRIPTION':
      state.cards[action.cardId] = {
        ...state.cards[action.cardId],
        description: action.cardDescription,
      }
      return {...state};
    
    default:
      return state;
  }
};

export default reducer;