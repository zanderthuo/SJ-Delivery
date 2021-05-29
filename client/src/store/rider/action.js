import {
    FETCH_ALL_RIDERS,
    FETCH_RIDER,
    UPDATE_RIDER,
    ADD_RIDER,
} from './actionTypes';

export const fetchAllRiders = (rider) => {
    return {
        type: FETCH_ALL_RIDERS,
        payload: { rider }
    }
}

export const fetchRider = (rider) => {
    return {
        type: FETCH_RIDER,
        payload: { rider }
    }
}

export const updateRiders = (rider) => {
    return {
        type: UPDATE_RIDER,
        payload: { rider }
    }
}

export const addRider = (rider) => {
    return {
        type: ADD_RIDER,
        payload: { rider }
    }
}
