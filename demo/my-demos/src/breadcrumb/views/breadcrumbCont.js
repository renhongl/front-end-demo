


import Breadcrumb from './breadcrumb';

import { connect } from 'react-redux';
import { changeBread } from '../actions';

const mapStateToProps = (state) => {
    return {
        bread: state.bread
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Breadcrumb)