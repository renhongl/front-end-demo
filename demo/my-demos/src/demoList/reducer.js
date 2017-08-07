
import { SHOW_DEMOS } from './actionTypes';

export default (state = [], action) => {
	switch(action.type) {
		case SHOW_DEMOS:
			return state;
		default:
			return state;
	}
}