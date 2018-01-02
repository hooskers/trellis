import uuidv4 from 'uuid/v4';

const reducer = (state, action) => {
    console.log(`action: ${action.type}`);

    let boardIndex, listIndex, cardIndex;

    switch (action.type) {
        case 'ADD_BOARD':
            state.boards = [
                ...state.boards,
                {
                    id: uuidv4(),
                    name: action.boardName,
                },
            ];
            return {...state};

        case 'DELETE_BOARD':
            boardIndex = state.boards.findIndex(board => board.id === action.boardId);
            state.boards.splice(boardIndex);
            state.boards = [...state.boards];
            return {...state};

        case 'RENAME_BOARD':
            boardIndex = state.boards.findIndex(board => board.id === action.boardId);
            state.boards[boardIndex].name = action.boardName;
            state.boards[boardIndex] = {...state.boards[boardIndex]};
            return {...state};

        default:
            return state;
    }
};

export default reducer;