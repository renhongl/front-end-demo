


import * as ActionTypes from './actionType';

export default (userInfor = {}, action) => {
    switch(action.type) {
        case ActionTypes.LOGIN:
            return {...userInfor, ...action.userInfor};
        case ActionTypes.LOGOUT:
            return {};
        default: 
            return userInfor;
    }
}