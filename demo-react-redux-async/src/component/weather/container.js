



import Weather from './view';

import { connect } from 'react-redux';
import * as Actions from './actions';

const mapStateToProps = (state) => {
    return {
        weather: state.weather,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateWeather: (city) => dispatch(Actions.fetchWeather(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);