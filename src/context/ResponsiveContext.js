import React, { Component, createContext, useReducer, useEffect } from 'react';
import { ResponsiveReducer, getDeviceBasedOnWindow, SUPPORTED_DEVICES } from "../reducers/ResponsiveReducer";

export const ResponsiveContext = createContext();

const ResponsiveContextProvider = (props) => {
    const initialState = {
        device: getDeviceBasedOnWindow()
    }

    const [responsiveState, dispatch] = useReducer(ResponsiveReducer, initialState);

    return (
        <ResponsiveContext.Provider value={{ responsiveState, dispatch }}>
            {props.children}
        </ResponsiveContext.Provider>
    );

}

export default ResponsiveContextProvider;