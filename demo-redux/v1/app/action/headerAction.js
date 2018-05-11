
const UPDATE_TIME = 'UPDATE_TIME';
const REQUEST_DETAIL = 'REQUEST_DETAIL';
const REPONSE_DETAIL = 'REPONSE_DETAIL';

export function updateTime(text) {
    return {
        type: UPDATE_TIME,
        payload: text
    }
}

export function requestDetail(text) {
    return {
        type: REQUEST_DETAIL,
        payload: text
    }
}

export function responseDetail(text) {
    return {
        type: REPONSE_DETAIL,
        payload: text
    }
}

export function fetchDetail(text) {
    return function(dispatch) {
        dispatch(requestDetail(text));
        return fetch(`/mock/${text}.json`).then(res => {
            res.json().then(json => {
                dispatch(responseDetail(json));
            })
        });
    }
}