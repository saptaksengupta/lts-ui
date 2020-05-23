import React, { Component, createContext, useReducer } from 'react';
import { ResponsiveReducer, SUPPORTED_DEVICES } from "../reducers/ResponsiveReducer";

export const ResponsiveContext = createContext();

const ResponsiveContextProvider = (props) => {
    const initialState = {
        device: SUPPORTED_DEVICES.SMALL_PC
    }

    const [responsiveState, dispatch] = useReducer(ResponsiveReducer, initialState);

    return (
        <ResponsiveContext.Provider value={{ responsiveState, dispatch }}>
            {props.children}
        </ResponsiveContext.Provider>
    );

}

export default ResponsiveContextProvider;