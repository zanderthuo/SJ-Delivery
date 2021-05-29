import React from 'react';
import {
  ADD_PICKUPSTORE_REQUEST,
  ADD_PICKUPSTORE_SUCCESS,
  ADD_PICKUPSTORE_FAILURE,
  FETCH_ALL_PICKUPSTORES_REQUEST,
  FETCH_ALL_PICKUPSTORES_SUCCESS,
  FETCH_ALL_PICKUPSTORES_FAILURE,
  FETCH_PICKUPSTORE_REQUEST,
  FETCH_PICKUPSTORE_SUCCESS,
  FETCH_PICKUPSTORE_FAILURE,
  UPDATE_PICKUPSTORE_REQUEST,
  UPDATE_PICKUPSTORE_SUCCESS,
  UPDATE_PICKUPSTORE_FAILURE
} from './actionTypes';

// Customer reducer
const DefaultState = {
  pickupAgent: [],
  pickupStore : [],
  loading: false
}


const pickupAgent = (state = DefaultState, action) => {
  switch (action.type) {
    case ADD_PICKUPSTORE_REQUEST:
          return {
            ...state,
            loading: true
          }
    case ADD_PICKUPSTORE_SUCCESS:
        return {
          ...state,
          pickupstoreInfo: action.payload
        }
    case ADD_PICKUPSTORE_FAILURE:
        return {
          ...state,
        }
    case FETCH_ALL_PICKUPSTORES_REQUEST:
        return {
          ...state,
          loading: true,
        }
    case FETCH_ALL_PICKUPSTORES_SUCCESS:
        return {
          ...state,
          pickupstoreInfo: action.payload
        }
    case FETCH_ALL_PICKUPSTORES_FAILURE:
        return {
          ...state,
        }
    case FETCH_PICKUPSTORE_REQUEST:
        return {
          ...state,
          loading: true
        }
    case FETCH_PICKUPSTORE_SUCCESS:
        return {
          ...state,
          pickupstoreInfo: action.payload
        }
    case FETCH_PICKUPSTORE_FAILURE:
        return {
          ...state,
          error: action.payload
        }
    case UPDATE_PICKUPSTORE_REQUEST:
        return {
          ...state,
          loading: true
        }
    case UPDATE_PICKUPSTORE_SUCCESS:
        return {
          ...state,
          riderInfo: action.payload
        }
    case UPDATE_PICKUPSTORE_FAILURE:
        return {
          ...state,
        }
    default:
      return state;
  }
}

export default pickupAgent;
