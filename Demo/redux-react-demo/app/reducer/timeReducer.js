

const timeReducer = (time = new Date(), action) => {
    switch(action.type){
        case 'UPDATE_TIME': 
            return new Date();
        default: 
            return time;
    }
};

export default timeReducer;