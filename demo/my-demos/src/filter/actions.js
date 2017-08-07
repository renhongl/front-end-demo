
import { SET_FILTER } from './actionTypes';

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        filter: filter
    }
}
