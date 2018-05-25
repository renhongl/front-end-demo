


import * as ActionTypes from './actionType';

export const login = (userInfor) => {
    return {
        type: ActionTypes.LOGIN,
        userInfor
    }
}

export const logout = (userInfor) => {
    return {
        type: ActionTypes.LOGOUT,
        userInfor,
    }
}