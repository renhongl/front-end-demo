

import { CHANGE_DEMO } from './actionTypes';

export const changeDemo = (url) => {
    return {
        type: CHANGE_DEMO,
        url
    }
}