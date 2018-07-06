


import * as ActionTypes from './actionTypes';
import axios from 'axios';

export const updateLogin = (login) => {
    return {
        type: ActionTypes.UPDATE_LOGIN,
        login
    }
};

export const fetchLoginApi = (login) => {
    return (dispatch) => {
        axios.get('/assets/login.json').then(result => {
            dispatch(updateLogin(result.data));
        });
    }
}



