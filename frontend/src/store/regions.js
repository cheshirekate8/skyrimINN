import { csrfFetch } from './csrf';

const LOAD = 'api/regions/LOAD'

const load = (list) => ({
    type: LOAD,
    list,
});

export const getRegions = () => async dispatch => {
    const response = await csrfFetch(`/api/regions`);

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
};

const initialState = {
    list: []
  };

const regionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allRegions = {};
            action.list.forEach(region => {
                allRegions[region.id] = region;
            });
            return {
                ...allRegions,
                ...state,
                list: action.list,
            };
        }
        default:
            return state;
    }
}

export default regionsReducer;
