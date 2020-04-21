import React, { Component, createContext, useReducer } from 'react';
import { BoardReducer } from '../reducers/BoardReducer';


export const BoardContext = createContext();

const BoardContextProvider = (props) => {
    const [boards, dispatch] = useReducer(BoardReducer, []);
    return (
        <BoardContext.Provider value={{boards, dispatch}}>
            {props.children}
        </BoardContext.Provider>
    )
}

export default BoardContextProvider;