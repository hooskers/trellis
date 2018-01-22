import uuidv4 from 'uuid/v4';

import reducer from '../src/js/reducer';
import * as actions from '../src/js/actions';
import initialState from '../src/js/initialState';

describe('reducer test', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_BOARD', () => {
    let newBoardId = uuidv4();
    let newBoardName = 'Test Board';
    let testState = {
      boards: {
        [newBoardId]: {
          id: newBoardId,
          name: newBoardName,
          listIds: [],
        },
      },
    };

    expect(reducer({boards: {}}, {
      type: 'ADD_BOARD',
      boardId: newBoardId,
      boardName: newBoardName,
    })).toEqual(testState);
  });
});
