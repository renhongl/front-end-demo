

import { connect } from 'react-redux';
import Carousel from './carousel';

const mapStateToProps = (state) => {
    return {
        carouselList: state.carouselList
    }
}

export default connect(
    mapStateToProps
)(Carousel);