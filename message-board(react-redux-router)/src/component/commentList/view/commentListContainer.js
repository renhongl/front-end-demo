



import { CommentListComponent } from './CommentListComponent';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		commentList: state.commentList
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
