//store.js
// Create store
import {createStore, 
        combineReducers, 
        applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import counterReducer from "./state/counterReducer";
import cartReducer from "./redux-cart/state/cartReducer";
import productReducer from "./product/state/productReducer";

const rootReducer = combineReducers({
        //stateName: reducerFunc
        counter: counterReducer,
        items: cartReducer,
        product: productReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store;