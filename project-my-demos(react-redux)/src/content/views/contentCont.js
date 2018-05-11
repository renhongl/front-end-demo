

import { connect } from 'react-redux';
import Content from './content';

const mapStateToProps = (state) => {
    return {
        demo: state.demo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content);