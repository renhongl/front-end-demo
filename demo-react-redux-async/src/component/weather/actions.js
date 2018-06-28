




import * as ActionTypes from './actionTypes';
import axios from 'axios';


export const updateWeather = (data) => {
    return {
        type: ActionTypes.UPDATE_WEATHER,
        data
    }
}

export const fetchWeather = (city) => {
    return dispatch => {
        let url = 'https://www.sojson.com/open/api/weather/json.shtml?city=' + city;
        dispatch(updateWeather(null));
        axios.get(url).then(result => {
            dispatch(updateWeather(result.data));
        })
    }
}

