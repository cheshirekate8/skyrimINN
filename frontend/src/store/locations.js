import { csrfFetch } from './csrf';

const LOAD = 'api/locations/LOAD'

const load = (list) => ({
    type: LOAD,
    list,
});

export const getLocations = () => async dispatch => {
    const response = await csrfFetch(`/api/locations`);

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
};

const initialState = {
    list: []
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
        default:
            return state;
    }
}

export default locationsReducer;
