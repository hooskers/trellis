export const addBoard = (name) => {
  return {
    type: 'ADD_BOARD',
    name,
  }
};

export const deleteBoard = (id) => {
  return {
    type: 'DELETE_BOARD',
    id,
  }
};

export const renameBoard = (id, name) => {
  return {
    type: 'RENAME_BOARD',
    id,
    name,
  }
};

export const addList = (name) => {
  return {
    type: 'ADD_LIST',
    name,
  }
};

export const deleteList = (id) => {
  return {
    type: 'DELETE_LIST',
    id,
  }
};

export const renameList = (id, name) => {
  return {
    type: 'RENAME_LIST',
    id,
    name,
  }
};

export const addCard = (name, description) => {
  return {
    type: 'ADD_CARD',
    name,
    description,
  }
};

export const deleteCard = (id) => {
  return {
    type: 'DELETE_CARD',
    id,
  }
};

export const saveCard = (id, name, description) => {
  return {
    type: 'SAVE_CARD',
    id: id,
    name,
    description,
  }
};

export const doneCard = (id) => {
  return {
    type: 'DONE_CARD',
    id,
  }
};