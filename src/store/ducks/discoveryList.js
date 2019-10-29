import { getDiscoveries } from '../../api/services/discoveries.service';
import { loadingState } from '../../utils/enums';

// Action Types
export const DISCOVERY_LIST_REQUEST = '@archaeologist/DISCOVERY_LIST_REQUEST';
export const DISCOVERY_LIST_SUCCESS = '@archaeologist/DISCOVERY_LIST_SUCCESS';
export const DISCOVERY_LIST_FAILURE = '@archaeologist/DISCOVERY_LIST_FAILURE';
export const DISCOVERY_LIST_RESET = '@archaeologist/DISCOVERY_LIST_RESET';

// Reducer
export const initialState = {
    data: [],
    error: {
        status: '',
        message: '',
    },
    loading: loadingState.none,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case DISCOVERY_LIST_REQUEST:
            return {
                ...state,
                ...initialState,
                loading: loadingState.loading,
            };
        case DISCOVERY_LIST_SUCCESS:
            return {
                ...state,
                ...initialState,
                data: action.payload,
                loading: loadingState.success
            };
        case DISCOVERY_LIST_FAILURE:
            return {
                ...state,
                ...initialState,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                },
                loading: loadingState.failure
            };
        case DISCOVERY_LIST_RESET:
            return {
                ...state,
                ...initialState,
            };
        default:
            return state;
    }
}

export const getDiscoveriesAction = (username, password) => async (dispatch) => {
    dispatch({ type: DISCOVERY_LIST_REQUEST  });

    try {
        const response = await getDiscoveries();

        dispatch({ type: DISCOVERY_LIST_SUCCESS, payload: response });
    } catch(err) {
        dispatch({ type: DISCOVERY_LIST_FAILURE, payload: err });
    }
}
