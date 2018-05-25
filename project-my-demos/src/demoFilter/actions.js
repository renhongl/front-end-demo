

import { CHANGE_DEMO_FILTER } from './actionTypes';

export const changeDemoFilter = (filter) => {
    return {
        type: CHANGE_DEMO_FILTER,
        filter
    }
}