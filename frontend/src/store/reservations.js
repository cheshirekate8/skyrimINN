import { csrfFetch } from './csrf';

const NEW_RESERVATION = 'reservation/new'
const GET_RESERVATIONS = 'reservations/get'

const addReservation = (payload) => ({
    type: NEW_RESERVATION,
    payload
})

const getReservations = (payload) => ({
    type: GET_RESERVATIONS,
    payload
})

export const newReservation = payload => async dispatch => {
    const response = await csrfFetch(`/api/reservations`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        const reservation = await response.json();
        dispatch(addReservation(reservation));
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

const initialState = {
    list: []
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
        default:
            return state;
    }
}

export default reservationsReducer;
