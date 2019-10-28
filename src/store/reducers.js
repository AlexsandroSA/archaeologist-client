import { combineReducers } from 'redux';

import authReducer from './ducks/auth';

const reducers = combineReducers({
    auth: authReducer,
});

export default reducers;
