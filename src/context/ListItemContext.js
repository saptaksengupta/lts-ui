import React, { createContext, useReducer } from 'react';
import { ListReducer } from '../reducers/ListReducer'; 

export const ListContext = createContext();

const ListContextProvider = (props) => {
    const initialState = {
        listItems: [], 
        currentBoard: null
    }
    const [listItemState, dispatch] = useReducer(ListReducer, initialState);
    
    return (
        <ListContext.Provider value={{listItemState, dispatch}}>
            {props.children}
        </ListContext.Provider>
    )
}

export default ListContextProvider;