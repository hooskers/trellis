const initialState = {
  boards: {
    board1: {
      id: 'board1',
      name: 'Test Board',
      listIds: ['list1'],
      background: 'weave',
    },
  },
  lists: {
    list1: {
      id: 'list1',
      name: 'Test List',
      cardIds: ['card1'],
    },
  },
  cards: {
    card1: {
      id: 'card1',
      name: 'Test Card',
      description: 'Test Description',
      done: false,
    },
  },
};

export default initialState;
