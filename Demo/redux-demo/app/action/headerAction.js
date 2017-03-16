
const UPDATE_TIME = 'UPDATE_TIME';

export function updateTime(text) {
    return {
        type: UPDATE_TIME,
        payload: text
    }
}