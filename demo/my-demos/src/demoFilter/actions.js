

import { CHANGE_FILTER } from './actionTypes';

export const changeFilter = (filter) => {
	return {
		type: CHANGE_FILTER,
		filter
	}
}