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