import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

export const startState = {};

export const mockStore = configureMockStore([thunk]);

export const makeMockStore = (state = {}) => {
  return mockStore({
    ...startState,
    ...state,
  });
};
