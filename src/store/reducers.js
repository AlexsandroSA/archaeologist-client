import { combineReducers } from 'redux';

import discoveryListReducer from './ducks/discoveryList';

const combineDiscovery = combineReducers({
    list: discoveryListReducer,
})

const reducers = combineReducers({
    discovery: combineDiscovery,
});

export default reducers;
