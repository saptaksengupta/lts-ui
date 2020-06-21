export const BOARD_ACTIONS = {
    SET_BOARD: 'SET_BOARD',
    REMOVE_BOARD: 'REMOVE_BOARD',
    UPDATED_BOARD: 'UPDATE_BOARD',
    EMPTY_BOARD: 'EMPTY_BOARD'
}

export const BoardReducer = (state, action) => {
    switch (action.type) {
        case BOARD_ACTIONS.SET_BOARD:
            return [...state, action.payload].sort(sortBoards);
        case BOARD_ACTIONS.REMOVE_BOARD:
            return state.filter(board => board.id !== Number(action.payload.boardId));
        case BOARD_ACTIONS.UPDATED_BOARD:
            return [...getUpdatedStateBasedOnCondition(state, action)];
        case BOARD_ACTIONS.EMPTY_BOARD: 
            return [];
        default:
            return state;
    }
};

const getUpdatedStateBasedOnCondition = (state, action) => {
    return state.map(board => {
        if (board.id === action.payload.board.id) {
            debugger
            board = action.payload.board;
        }
        return board;
    });
}

const sortBoards = (a, b) => a.id < b.id ? 1 : -1;