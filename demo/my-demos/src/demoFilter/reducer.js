

import { CHANGE_FILTER } from './actionTypes';

export default (state = '', action) => {
	switch(action.type) {
		case CHANGE_FILTER:
			return action.filter;
		default:
			return state;
	}
}