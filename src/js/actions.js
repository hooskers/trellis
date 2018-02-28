export const addBoard = (boardId, boardName) => ({
  type: 'ADD_BOARD',
  boardId,
  boardName,
});

export const deleteBoard = boardId => ({
  type: 'DELETE_BOARD',
  boardId,
});

export const renameBoard = (boardId, boardName) => ({
  type: 'RENAME_BOARD',
  boardId,
  boardName,
});

export const displayBoard = boardId => ({
  type: 'DISPLAY_BOARD',
  boardId,
});

export const addList = (boardId, listName) => ({
  type: 'ADD_LIST',
  boardId,
  listName,
});

export const deleteList = (boardId, listId) => ({
  type: 'DELETE_LIST',
  boardId,
  listId,
});

export const renameList = (listId, listName) => ({
  type: 'RENAME_LIST',
  listId,
  listName,
});

export const rearrangeList = (boardId, sourceIndex, destinationIndex) => ({
  type: 'REARRANGE_LIST',
  boardId,
  sourceIndex,
  destinationIndex,
});

export const addCard = (listId, cardName, cardDescription) => ({
  type: 'ADD_CARD',
  listId,
  cardName,
  cardDescription,
});

export const deleteCard = (listId, cardId) => ({
  type: 'DELETE_CARD',
  listId,
  cardId,
});

export const saveCard = (cardId, cardName, cardDescription) => ({
  type: 'SAVE_CARD',
  cardId,
  cardName,
  cardDescription,
});

export const saveCardName = (cardId, cardName) => ({
  type: 'SAVE_CARD_NAME',
  cardId,
  cardName,
});

export const saveCardDescription = (cardId, cardDescription) => ({
  type: 'SAVE_CARD_DESCRIPTION',
  cardId,
  cardDescription,
});

export const doneCard = (listId, cardId) => ({
  type: 'DONE_CARD',
  listId,
  cardId,
});

export const rearrangeCard = (sourceList, destList, sourceIndex, destIndex) => ({
  type: 'REARRANGE_CARD',
  sourceList,
  destList,
  sourceIndex,
  destIndex,
});

export const changeBackground = (boardId, background) => ({
  type: 'CHANGE_BACKGROUND',
  boardId,
  background,
});
