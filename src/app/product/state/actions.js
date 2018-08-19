// actions.js
import * as ActionTypes from "./action-types";
 
import * as api from "./api";

export function initProducts(products) {
    return {
        type: ActionTypes.INIT_PRODUCTS,
        payload: {
            products: products
        }
    }
}

export function loading (status) {
    return {
        type: ActionTypes.LOADING,
        payload: {
            loading: status
        }
    }
}

// should return action, as an object
export function initError(error) {
    return {
        type: ActionTypes.INIT_ERROR,
        payload: {
            error: error
        }
    }
}

//TODO: get products from server
// thunk is a design pattern
// use middlere to do Ajax/Async code execution
// thunk return a function as an action
export function fetchProducts() {
    // this returned function shall be called by middleware
    return function(dispatch, getState) {
        //TODO Ajax calls
        console.log("**Called by middleware")
        api.getProducts()
        .then ( products => {
            // put products into store
            let action = initProducts(products);
            dispatch(action)
        })
    }
}