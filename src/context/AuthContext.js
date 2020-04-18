import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isAuthenticeted: true,
        user: {
            id: 12,
            name: 'Saptak Sengupta',
            phone: '8013778491'
        }
    }

    render() {
        return (
            <AuthContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;