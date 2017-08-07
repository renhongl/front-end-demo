
import { connect } from 'react-redux';
import demoFilter from './demoFilter';
import { changeFilter } from '../actions';

const mapStateToProps = (state) => {
	return {
		filter: state.filter
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeFilter: (filter) => {
			dispatch(changeFilter(filter))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(demoFilter);