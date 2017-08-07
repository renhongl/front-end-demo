
import { connect } from 'react-redux';
import DemoList from './demoList';

const getVisibleList = (demoList, filter) => {
	return demoList.filter(v => {
		return v.title.indexOf(filter.trim()) !== -1;
	})
}

const mapStateToProps = (state) => {
	return {
		demoList: getVisibleList(state.demoList, state.demoFilter)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DemoList);