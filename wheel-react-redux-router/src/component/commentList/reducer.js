






import * as ActionTypes from './action';


const deleteComment = (commentList, id) => {
	return commentList;
}

export default (commentList = [], action) => {
	switch(action.type) {
		case ActionTypes.ADD_COMMENT:
			return [...commentList, action.comment];
		case ActionTypes.DELETE_COMMENT:
			return deleteComment(commentList, action.id);
		default: 
			return commentList;
	}
}









