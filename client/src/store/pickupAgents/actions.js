import axios from 'axios';
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
import { logoutUser } from '../auth/login/actions';

const url = "https://localhost:8000/api/v1"


export const addPickupStore = (store_name,location,town,pickupagent) => async (dispatch) => {
  dispatch({
    type: ADD_PICKUPSTORE_REQUEST,
    payload: { store_name,location,town,pickupagent }
  })
  try {

    // const {
    //   userLogin: { userInfo },
    // } = getState()

    // const config = {
    //   headers: {
    //     Authorization: '*',
    //   },
    // }

    const { data } = await axios.post(`${url}/pickupstores`, {store_name,location,town,pickupagent})
    console.log(data)

    dispatch({
      type: ADD_PICKUPSTORE_SUCCESS,
      payload: data,
    })
  }  catch (error) {
     // if error, dispatch FAIL, set payload to error message
    dispatch({
      type: ADD_PICKUPSTORE_FAILURE,
        payload: error.toString(),
    })
  }
}

export const fetchAllPickupAgents = () => async (
  dispatch
) => {
  try {
    dispatch({ type: FETCH_ALL_PICKUPSTORES_REQUEST })

    const { data } = await axios.get(
      `${url}/pickupstores`
    )

    dispatch({
      type: FETCH_ALL_PICKUPSTORES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: FETCH_ALL_PICKUPSTORES_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//
// export const fetchAllPickupAgents = (pickupAgent) => {
//     return {
//         type: FETCH_ALL_PICKUPAGENTS,
//         payload: { pickupAgent }
//     }
// }
//
// export const fetchPickupAgent = (pickupAgent) => {
//     return {
//         type: FETCH_PICKUPAGENT,
//         payload: { pickupAgent }
//     }
// }
//
// export const updatePickupAgent = (pickupAgent) => {
//     return {
//         type: UPDATE_PICKUPAGENT,
//         payload: { pickupAgent }
//     }
// }
//
// export const updatePickupAgentStore = (pickupStore) => {
//     return {
//         type: UPDATE_PICKUPAGENT_STORE,
//         payload: { pickupStore }
//     }
// }

const addPickStoreRequest = () => ({
 type: ADD_PICKUPSTORE_REQUEST,
});

const addPickStoreSuccess = () => ({
 type: ADD_PICKUPSTORE_SUCCESS,
});

const addPickStoreFailure = () => ({
 type: ADD_PICKUPSTORE_FAILURE,
});

const fetchAllPickupStoresRequest = () => ({
 type: FETCH_ALL_PICKUPSTORES_REQUEST,
});

const fetchAllPickupStoresSuccess = () => ({
 type: FETCH_ALL_PICKUPSTORES_SUCCESS,
});

const fetchAllPickupStoresFailure = () => ({
 type: FETCH_ALL_PICKUPSTORES_FAILURE,
});
