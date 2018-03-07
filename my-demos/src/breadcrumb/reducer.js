
import { CHANGE_BREAD } from './actionTypes';

export default (state = '', action) =>{
    switch(action.type) {
        case CHANGE_BREAD: 
            return action.bread;
        default: 
            return state;
    }
}