
import { connect } from 'react-redux';
import LinkComp from './link';

const mapStateToProps = (state, link) => {
    return {
        active: state.filter !== link.children
    }
}


const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LinkComp);

