export const BOARD_ACTIONS = {
    SET_BOARD: 'SET_BOARD',
    REMOVE_BOARD: 'REMOVE_BOARD'
}

export const BoardReducer = (state, action) => {
    switch (action.type) {
        case BOARD_ACTIONS.SET_BOARD:
            return [...state, action.payload];
        case BOARD_ACTIONS.REMOVE_BOARD:
            return state.filter(board => board.id !== action.payload.boardId);
        default:
            return state;
    }
};

export const exceptThisBoard = () => {

}