//actions.js
// action creators functions goes here

import * as ActionTypes from './action-types';

//es5
export function increment(value) {
    // return action object
    return {
        type: ActionTypes.INCREMEMT,
        payload: {value: value}
    }
}

//es6
export const decrement = (value) => {
    return {
        type: ActionTypes.DECREMENT,
        payload: {value: value}
    }
}

export const empty = () => {
    console.log('empty action creator called');
    return {
        type: 'RESET'
    }
}