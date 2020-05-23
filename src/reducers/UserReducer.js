
export const USER_ACTIONS = {
    SET_USER: 'SET_USER',
}

export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            if (!isUserExist()) {
                return storeUserDetails(action.payload.userDetails);
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
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    return getUserDetails();
}

export const getUserDetails = () => {
    return JSON.parse(localStorage.getItem('userDetails'));
}

