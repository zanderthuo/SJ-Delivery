import { FETCH_ORDER, FETCH_ALL_ORDERS, EDIT_ORDER,EDIT_ORDER_SUCCESS, EDIT_ORDER_FAILURE } from './actionTypes';

export const fetch0rder = (order) => {
    return {
        type: FETCH_ORDER,
        payload: order
    }
}

export const fetchAllOrders = (order) => {
    return {
        type: FETCH_ALL_ORDERS,
        payload: order
    }
}

export const editOrder = (order) => {
    return {
        type: EDIT_ORDER,
        payload: order
    }
}

// TODO LATER
// export const editOrderSuccess = (history) => {
//     return {
//         type: EDIT_ORDER_SUCCESS,
//         payload: order
//     }
// }
//
// export const editOrderFailure = () => {
//     return {
//         type: EDIT_ORDER_FAILURE
//         payload: {}
//     }
// }
