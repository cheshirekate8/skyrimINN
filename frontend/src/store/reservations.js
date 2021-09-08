import { csrfFetch } from './csrf';

const NEW_RESERVATION = 'reservation/new'
const GET_RESERVATIONS = 'reservations/get'
const LOAD_ONE = 'reservations/get/one'
const CANCEL = 'reservations/cancel'
const EDIT ='reservations/edit'

const editReservation = (payload) => ({
    type: EDIT,
    payload
})

const addReservation = (payload) => ({
    type: NEW_RESERVATION,
    payload
})

const getReservations = (payload) => ({
    type: GET_RESERVATIONS,
    payload
})

const loadOne = (payload) => ({
    type: LOAD_ONE,
    payload
})

const cancel = (reservation) => ({
    type: CANCEL
})

export const cancelReservation = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/reservations/${id}`, {
        method: 'DELETE'
    })
    const data = await response.json();
    dispatch(cancel(data.reservation));
    return 'DELETED'
}

export const newReservation = payload => async dispatch => {
    const response = await csrfFetch(`/api/reservations`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    console.log('RESPONSE!!! ====> ', response)

    if (response.ok) {
        const reservation = await response.json();
        dispatch(addReservation(reservation));
        dispatch(getReservationsFromUserId(payload.user_id))
        return reservation;
    }
};

export const getReservationsFromUserId = id => async dispatch => {
    const response = await csrfFetch(`/api/reservations/user/${id}`, {
    });

    if (response.ok) {
        const reservation = await response.json();
        dispatch(getReservations(reservation));
        return reservation;
    }
};

export const getOneReservation = (id) => async dispatch => {
    const response = await csrfFetch(`/api/reservations/${id}`);

    if (response.ok) {
        const reservation = await response.json();
        dispatch(loadOne(reservation));
      }
}

export const updateReservation = (payload) => async dispatch => {
    const {id, user_id, start_date, end_date, price} = payload
    const response = await csrfFetch(`/api/reservations/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ start_date, end_date, price }),
    });
    if (response.ok) {
        const reservation = await response.json();
        dispatch(editReservation(reservation));
        dispatch(getReservationsFromUserId(user_id));
        return reservation
      }

}

const initialState = {
    list: [],
    currentReservation: null
}

const reservationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_RESERVATION: {
            const newState = {
                ...state,
                reservation: action.payload
            }
            return newState
        }
        case GET_RESERVATIONS: {
            const newState = {
                ...state,
                list: action.payload
            }
            return newState
        }
        case LOAD_ONE: {
            const newState = {
                ...state,
                currentReservation: action.payload
            }
            return newState;
        }
        default:
            return state;
    }
}

export default reservationsReducer;
