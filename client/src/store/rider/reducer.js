import React from 'react';
import {
  FETCH_ALL_RIDERS,
  FETCH_RIDER,
  UPDATE_RIDER,
  ADD_RIDER,
} from './actionTypes';

// Customer reducer
const riderReducerDefaultState = {
  rider : []
}



const rider = (state = riderReducerDefaultState, action) => {
  switch (action.type) {
    case FETCH_ALL_RIDERS:
        return {
          ...state,
          rider: action.payload
        }
    case FETCH_RIDER:
        return {
          ...state,
          rider: action.payload
        }
    case UPDATE_RIDER:
        return {
          ...state,
          rider: action.payload
        }
    case ADD_RIDER:
        return {
          ...state,
          rider: action.payload
        }
    default:
      return state;
  }
}

export default rider;
