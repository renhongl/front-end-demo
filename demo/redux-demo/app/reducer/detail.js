import Tool from '../core/Tool';

const detail = function(state = {}, action) {
    switch (action.type) {
        case 'REPONSE_DETAIL':
            let detail = Tool.deepCopy({}, action.payload);
            console.log(detail);
            return detail;
        case 'REQUEST_DETAIL':
            console.log('Fetching...');
            return {};
        default:
            return state;
    }
}

export default detail;