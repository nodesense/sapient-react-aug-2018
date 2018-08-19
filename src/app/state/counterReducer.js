//counterReducer.js

import * as ActionTypes from './action-types';

const INITIAL_STATE = 0

export default 
    function counterReducer(state=INITIAL_STATE, 
                            action) {
    console.log("Coutner Reducer ", state, action)

    switch(action.type) {
        case ActionTypes.INCREMEMT:
            return state + action.payload.value

        case ActionTypes.DECREMENT: 
            return state - action.payload.value

        default:
            return state
    }
        

}