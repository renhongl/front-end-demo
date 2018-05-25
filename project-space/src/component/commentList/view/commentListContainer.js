



import { CommentListComponent } from './commentListComponent';
import { connect } from 'react-redux';

const getCommentListByMessageId = (commentList, messageId) => {
	let ret = [];
	for (let [key, comment] of commentList.entries()) {
		if (comment.messageId === messageId) {
			ret.push(comment);	
		}
	}
	return ret;
}


const mapStateToProps = (state, ownProps) => {
	return {
		commentList: getCommentListByMessageId(state.commentList, ownProps.id)
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CommentListComponent);
