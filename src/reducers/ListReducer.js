export const LIST_ACTIONS = {
    SET_LIST: 'SET_LIST',
    SET_CURRENT_BOARD: 'SET_CURRENT_BOARD',
    REMOVE_LIST: 'REMOVE_LIST',
    EDIT_DESCRIPTION: 'EDIT_DESCRIPTION',
    CHANGE_STATUS: 'CHANGE_STATUS'
}


export const ListReducer = (state, action) => {

    switch (action.type) {
        case LIST_ACTIONS.SET_LIST:
            return {
                listItems: [...state.listItems, action.payload.listItem]
            };
        case LIST_ACTIONS.SET_CURRENT_BOARD:
            return {
                ...state,
                currentBoard: action.payload.currentBoard
            };
        // case LIST_ACTIONS.REMOVE_LIST:
        //     return state.listItems.filter(list => list.id != action.payload.listId);
        case LIST_ACTIONS.EDIT_DESCRIPTION:
            return {
                ...state,
                listItems: getUpdatedStateBasedOnCondition(state, action)
            };
        case LIST_ACTIONS.CHANGE_STATUS:
            return {
                listItems: getUpdatedStateBasedOnCondition(state, action),
                ...state
            };
    }
}


const getUpdatedStateBasedOnCondition = (state, action) => {
    return state.listItems.map(listItem => {
        if (listItem.id === action.payload.listItemId) {
            listItem = action.payload.listItem;
        }
        return listItem;
    });
} 