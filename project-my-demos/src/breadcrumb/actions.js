

import { CHANGE_BREAD } from './actionTypes';

export const changeBread = (bread) => {
    return {
        type: CHANGE_BREAD,
        bread
    }
}