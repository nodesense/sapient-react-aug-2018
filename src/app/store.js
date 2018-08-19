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

function loggerMiddleware(store) {
        return function(nextFn) {
                return function(action) {
                  console.log("LOGGER ", action);
                  console.log("Type of Action", typeof action)

                //   if (typeof action == 'function') {
                //           return action(store.dispatch, store.getState); // call the action funciton
                //           // if action is function, not forward to reducer
                //   }

                //   if (action.type == 'RESET') {
                //           return true;
                //           // RESET is not forwarded
                //   }

                  //forward action to next middleware
                  // if no next middleware, then call reducers
                  return nextFn(action);

                }
        }
}

const store = createStore(rootReducer, 
                         applyMiddleware(loggerMiddleware, thunk))
export default store;