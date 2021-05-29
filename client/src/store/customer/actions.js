import {
  FETCH_ALL_CUSTOMERS,
  FETCH_CUSTOMER
} from './actionTypes';

export const fetchCustomer = (customer) => (dispatch) => {
    dispatch({
      type: FETCH_CUSTOMER,
      payload: customer
    })
}

export const fetchAllCustomers = (customers) => (dispatch) => {
    dispatch ({
        type: FETCH_ALL_CUSTOMERS,
        payload: customers
    })
}
