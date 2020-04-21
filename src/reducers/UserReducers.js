export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            if (!isUserExist()) {
                return storeUserDetails();
            }
            return state;
        default:
            return state;
    }
}


export const isUserExist = () => {
    return (localStorage.userDetails);
}

export const storeUserDetails = (userDetails) => {
    localStorage.setItem('user', userDetails);
    return getUserDetails();
}

export const getUserDetails = () => {
    return JSON.parse(localStorage.userDetails);
}

