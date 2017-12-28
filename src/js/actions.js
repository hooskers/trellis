export const addBoard = (boardName) => {
  return {
    type: 'ADD_BOARD',
    boardName,
  }
};

export const deleteBoard = (boardId) => {
  return {
    type: 'DELETE_BOARD',
    boardId,
  }
};

export const renameBoard = (boardId, boardName) => {
  return {
    type: 'RENAME_BOARD',
    boardId,
    boardName,
  }
};

export const displayBoard = (boardId) => {
  return {
    type: 'DISPLAY_BOARD',
    boardId,
  }
};

export const addList = (boardId, listName) => {
  return {
    type: 'ADD_LIST',
    boardId,
    listName,
  }
};

export const deleteList = (boardId, listId) => {
  return {
    type: 'DELETE_LIST',
    boardId,
    listId,
  }
};

export const renameList = (boardId, listId, listName) => {
  return {
    type: 'RENAME_LIST',
    boardId,
    listId,
    listName,
  }
};

export const addCard = (boardId, listId, cardName, cardDescription) => {
  return {
    type: 'ADD_CARD',
    boardId,
    listId,
    cardName,
    cardDescription,
  }
};

export const deleteCard = (boardId, listId, cardId) => {
  return {
    type: 'DELETE_CARD',
    boardId,
    listId,
    cardId,
  }
};

export const saveCard = (boardId, listId, cardId, cardName, cardDescription) => {
  return {
    type: 'SAVE_CARD',
    boardId,
    listId,
    cardId,
    cardName,
    cardDescription,
  }
};

export const doneCard = (boardId, listId, cardId) => {
  return {
    type: 'DONE_CARD',
    boardId,
    listId,
    cardId,
  }
};