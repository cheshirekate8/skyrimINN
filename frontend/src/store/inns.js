import { csrfFetch } from './csrf';

const LOAD = 'api/inns/LOAD'
const LOAD_RECENT = 'api/inns/LOAD'
const LOAD_ONE = 'api/inns/id'

const load = (list) => ({
    type: LOAD,
    list,
});

const loadRecent = (list) => ({
    type: LOAD_RECENT,
    list,
});

const loadOne = (inn) => ({
    type: LOAD_ONE,
    inn
})

export const getInns = () => async dispatch => {
    const response = await csrfFetch('/api/inns');

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
      }
}

export const getRecentInns = () => async dispatch => {
    const response = await csrfFetch('/api/inns/recent');

    if (response.ok) {
        const list = await response.json();
        dispatch(loadRecent(list));
      }
}

export const getOneInn = (id) => async dispatch => {
    const response = await csrfFetch(`/api/inns/${id}`);

    if (response.ok) {
        const inn = await response.json();
        dispatch(loadOne(inn));
      }
}

const initialState = {
    list: [],
    currentInn: null,
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
        case LOAD_ONE: {
            const newState = Object.assign({}, initialState);
            newState.currentInn = action.inn;
            return newState;

        }
        default:
            return state;
    }
}

export default innsReducer;
