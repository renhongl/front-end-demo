

import { connect } from 'react-redux';
import Header from '../component/header/Header';
import { updateTimeAction } from '../action/timeAction';

const mapStateToProps = (state) => {
    return {
        time: state.time
    };
};

const mapDispatchToProps = (dispach) => {
    return {
        updateTime: () => dispach(updateTimeAction())
    };
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;