import { csrfFetch } from './csrf';

const LOAD = 'api/regions/LOAD'
const LOAD_REGION_INNS = 'api/regions/inn/LOAD'
const LOAD_ONE = 'api/regions/id'

const load = (list) => ({
    type: LOAD,
    list,
});

const loadRegionInns = (innsList) => ({
    type: LOAD_REGION_INNS,
    innsList,
});

const loadOne = (region) => ({
    type: LOAD_ONE,
    region
})

export const getRegions = () => async dispatch => {
    const response = await csrfFetch(`/api/regions`);

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
};

export const getInnsFromRegion = (id) => async dispatch => {
    const response = await csrfFetch(`/api/regions/${id}/inns`)

    if (response.ok) {
        const innsList = await response.json()
        dispatch(loadRegionInns(innsList));
    }
}

export const getOneRegion = (id) => async dispatch => {
    const response = await csrfFetch(`/api/regions/${id}`);

    if (response.ok) {
        const region = await response.json();
        dispatch(loadOne(region));
      }
}

const initialState = {
    list: [],
    innsList: [],
    currentRegion: null,
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
        case LOAD_REGION_INNS: {
            const newState = Object.assign({}, initialState);
            newState.innsList = action.innsList;
            return newState
        }
        case LOAD_ONE: {
            const newState = Object.assign({}, initialState);
            newState.currentRegion = action.region;
            return newState;

        }
        default:
            return state;
    }
}

export default regionsReducer;
