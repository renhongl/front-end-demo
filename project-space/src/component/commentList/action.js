





import * as ActionTypes from './action';

export const addComment = (comment) => {
	return {
		type: ActionTypes.ADD_COMMENT,
		comment
	}
}


export const deleteComment = (id) => {
	return {
		type: ActionTypes.DELETE_COMMENT,
		id
	}
}
