import React, { Component, createContext, useReducer } from 'react';
import { UserReducer, isUserExist, getUserDetails } from '../reducers/UserReducer'

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const initialAuthState = {
        isAuthenticeted: false,
        user: null
    };

    if(isUserExist()) {
        initialAuthState.user = getUserDetails();
    }
    const [authState, dispatch] = useReducer(UserReducer, initialAuthState);

    return (
        <AuthContext.Provider value={{ authState, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;