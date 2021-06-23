import { csrfFetch } from './csrf';

const LOAD = 'api/locations/LOAD'
const LOAD_LOCATIONS_INNS = 'api/locations/inn/LOAD'

const load = (list) => ({
    type: LOAD,
    list,
});

const loadLocationInns = (innsList) => ({
    type: LOAD_LOCATIONS_INNS,
    innsList,
});

export const getLocations = () => async dispatch => {
    const response = await csrfFetch(`/api/locations`);

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
};

export const getInnsFromLocation = (id) => async dispatch => {
    const response = await csrfFetch(`/api/locations/${id}/inns`)

    if (response.ok) {
        const innsList = await response.json()
        dispatch(loadLocationInns(innsList));
    }
}

const initialState = {
    list: [],
    innsList: [],
  };

const locationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allLocations = {};
            action.list.forEach(location => {
                allLocations[location.id] = location;
            });
            return {
                ...allLocations,
                ...state,
                list: action.list,
            };
        }
        case LOAD_LOCATIONS_INNS: {
            const newState = Object.assign({}, initialState);
            newState.innsList = action.innsList;
            return newState
        }
        default:
            return state;
    }
}

export default locationsReducer;
