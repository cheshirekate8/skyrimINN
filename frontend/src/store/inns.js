import { csrfFetch } from './csrf';

const LOAD = 'api/inns/LOAD'
const LOAD_RECENT = 'api/inns/LOAD'

const load = (list) => ({
    type: LOAD,
    list,
});

const loadRecent = (list) => ({
    type: LOAD_RECENT,
    list,
});

export const getInns = () => async dispatch => {
    const response = await fetch('api/inns');

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
      }
}

export const getRecentInns = () => async dispatch => {
    const response = await fetch('api/inns/recent');

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
      }
}

const initialState = {
    list: []
  };

const innsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allInns = {};
            action.list.forEach(inn => {
                allInns[inn.id] = inn;
            });
            return {
                ...allInns,
                ...state,
                list: action.list,
            };
        }
        case LOAD_RECENT: {
            const recentInns = {};
            action.list.forEach(inn => {
                recentInns[inn.id] = inn;
            });
            return {
                ...recentInns,
                ...state,
                list: action.list,
            };
        }
        default:
            return state;
    }
}

export default innsReducer;
