//store.js
// Create store
import {createStore, 
        combineReducers} from 'redux';

import counterReducer from "./state/counterReducer";

const rootReducer = combineReducers({
        //stateName: reducerFunc
        counter: counterReducer
})

const store = createStore(rootReducer)
export default store;