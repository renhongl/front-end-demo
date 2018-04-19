

import { connect } from 'react-redux';
import Navigation from './navigation';
import { changeBread } from '../../breadcrumb';
import { changeDemo } from '../../content';

const mapStateToProps = (state) => {
    return {
        demoFilter: state.demoFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeDemo: (url) => {
            dispatch(changeDemo(url));
        },
        changeBread: (bread) => {
            dispatch(changeBread(bread))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);