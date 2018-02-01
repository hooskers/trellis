export const addBoard = (boardId, boardName) => {
  return {
    type: 'ADD_BOARD',
    boardId,
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

export const renameList = (listId, listName) => {
  return {
    type: 'RENAME_LIST',
    listId,
    listName,
  }
};

export const rearrangeList = (boardId, sourceIndex, destinationIndex) => {
  return {
    type: 'REARRANGE_LIST',
    boardId,
    sourceIndex,
    destinationIndex,
  }
};

export const addCard = (listId, cardName, cardDescription) => {
  return {
    type: 'ADD_CARD',
    listId,
    cardName,
    cardDescription,
  }
};

export const deleteCard = (listId, cardId) => {
  return {
    type: 'DELETE_CARD',
    listId,
    cardId,
  }
};

export const saveCard = (cardId, cardName, cardDescription) => {
  return {
    type: 'SAVE_CARD',
    cardId,
    cardName,
    cardDescription,
  }
};

export const saveCardName = (cardId, cardName) => {
  return {
    type:'SAVE_CARD_NAME',
    cardId,
    cardName,
  }
};

export const saveCardDescription = (cardId, cardDescription) => {
  return {
    type: 'SAVE_CARD_DESCRIPTION',
    cardId,
    cardDescription,
  }
};

export const doneCard = (listId, cardId) => {
  return {
    type: 'DONE_CARD',
    listId,
    cardId,
  }
};

export const rearrangeCard = (sourceList, destList, sourceIndex, destIndex) => {
  return {
    type: 'REARRANGE_CARD',
    sourceList,
    destList,
    sourceIndex,
    destIndex,
  }
};