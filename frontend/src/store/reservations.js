import { csrfFetch } from './csrf';

const NEW_RESERVATION = 'reservation/new'

const addReservation = (payload) => ({
    type: NEW_RESERVATION,
    payload
})

export const newReservation = payload => async dispatch => {
    console.log(payload);
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

const initialState = {}

const reservationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_RESERVATION: {
            const newState = {
                ...state,
                reservation: 'thing'
            }
            return newState
        }
        default:
            return state;
    }
}

export default reservationsReducer;
