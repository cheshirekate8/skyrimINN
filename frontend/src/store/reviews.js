import { csrfFetch } from './csrf';

const NEW_REVIEW = 'review/new'
const GET_REVIEWS = 'reviews/get'
const LOAD_ONE_REVIEW = 'reviews/get/one'
const CANCEL_REVIEW = 'reviews/deleteReview'
const EDIT ='reviews/edit'
const CLEAR_CURRENT_REV = 'reviews/CURRENT'

const editReview = (payload) => ({
    type: EDIT,
    payload
})

const addReview = (payload) => ({
    type: NEW_REVIEW,
    payload
})

const getReviews = (payload) => ({
    type: GET_REVIEWS,
    payload
})

const loadOneReview = (payload) => ({
    type: LOAD_ONE_REVIEW,
    payload
})

const deleteReview = (review) => ({
    type: CANCEL_REVIEW
})

const clearCurrRev = () => ({
    type: CLEAR_CURRENT_REV
})

export const deleteReview = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'DELETE'
    })
    const data = await response.json();
    dispatch(deleteReview(data.review));
    return 'DELETED'
}

export const newReview = payload => async dispatch => {
    const response = await csrfFetch(`/api/reviews`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        const review = await response.json();
        dispatch(addReview(review));
        dispatch(getReviewsFromInnId(payload.inn_id))
        return review;
    }
};

export const getReviewsFromInnId = id => async dispatch => {
    const response = await csrfFetch(`/api/reviews/inn/${id}`, {
    });

    if (response.ok) {
        const review = await response.json();
        dispatch(getReviews(review));
        return review;
    }
};

export const getOneReview = (id) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${id}`);

    if (response.ok) {
        const review = await response.json();
        dispatch(loadOneReview(review));
      }
}

export const updateReview = (payload) => async dispatch => {
    const { rating, comment } = payload
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating, comment }),
    });
    if (response.ok) {
        const review = await response.json();
        dispatch(editReview(review));
        dispatch(getReviewsFromInnId(user_id));
        return review
      }

}

export const clearCurrentReview = () => async dispatch => {
    dispatch(clearCurrRev())
}

const initialState = {
    list: [],
    currentReview: null
}

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REVIEWS: {
            const newState = {
                ...state,
                list: action.payload
            }
            return newState
        }
        case LOAD_ONE_REVIEW: {
            const newState = {
                ...state,
                currentReview: action.payload
            }
            return newState;
        }
        case CLEAR_CURRENT_REV: {
            state.currentReview = null;
            return state;
        }
        default:
            return state;
    }
}

export default reviewsReducer;
