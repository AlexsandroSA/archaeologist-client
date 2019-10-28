import api from '../../api/api';
import { loadingState } from '../../utils/enums';

// Action Types
export const LOGIN_REQUEST = '@archaeologist/LOGIN_REQUEST';
export const LOGIN_SUCCESS = '@archaeologist/LOGIN_SUCCESS';
export const LOGIN_FAILURE = '@archaeologist/LOGIN_FAILURE';
export const LOGIN_RESET = '@archaeologist/LOGIN_RESET';

// Reducer
export const initialState = {
    data: {
        id: '',
        name: '',
        email: '',
    },
    error: {
        status: '',
        message: '',
    },
    loading: loadingState.none,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                ...initialState,
                isLoading: loadingState.loading,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...initialState,
                data: {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email,
                },
                isLoading: loadingState.success
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                ...initialState,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                },
                isLoading: loadingState.failure
            };
        case LOGIN_RESET:
            return {
                ...state,
                ...initialState,
            };
        default:
            return state;
    }
}

export const loginAction = (username, password) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST  });

    try {
        const response = await api({
            url: '/auth',
            method: 'POST',
            data: { username, password },
        })

        dispatch({ type: LOGIN_SUCCESS, payload: response });
    } catch(err) {
        dispatch({ type: LOGIN_FAILURE, payload: err });
    }
}
