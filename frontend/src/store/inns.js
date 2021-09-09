import { csrfFetch } from './csrf';

const LOAD = 'api/inns/LOAD'
const LOAD_RECENT = 'api/inns/LOAD_RECENT'
const LOAD_ONE = 'api/inns/id'
const CLEAR_CURRENT_INN = 'api/inns/CURRENT'

const load = (list) => ({
    type: LOAD,
    list,
});

const loadRecent = (recentList) => ({
    type: LOAD_RECENT,
    recentList,
});

const loadOne = (inn) => ({
    type: LOAD_ONE,
    inn
})

const clearCurr = () => ({
    type: CLEAR_CURRENT_INN
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
        const recentList = await response.json();
        dispatch(loadRecent(recentList));
      }
}

export const getOneInn = (id) => async dispatch => {
    const response = await csrfFetch(`/api/inns/${id}`);

    if (response.ok) {
        const inn = await response.json();
        dispatch(loadOne(inn));
      }
}

export const clearCurrentInn = () => async dispatch => {
    dispatch(clearCurr())
}

const initialState = {
    list: [],
    recentList: [],
    currentInn: null
  };

const innsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allInns = {};
            action.list.forEach(inn => {
                allInns[inn.id] = inn;
            });
            return {
                // ...allInns,
                ...state,
                list: action.list,
            };
        }
        case LOAD_RECENT: {
            return {
                ...state,
                recentList: action.recentList,
            };
        }
        case LOAD_ONE: {
            state.currentInn = action.inn;
            return state;
        }
        case CLEAR_CURRENT_INN: {
            state.currentInn = null;
            return state;
        }

        default:
            return state;
    }
}

export default innsReducer;
