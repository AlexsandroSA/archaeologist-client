import { loadingState } from '../../utils/enums';
import { makeMockStore } from '../makeMockStore';

import reducer, {
    initialState,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_RESET,
    loginAction,
} from './auth';

let store = makeMockStore();
let INITIAL_STATE;
let api;
let action;
let result;
let expected;

describe('Store: Auth', () => {

    describe('InitialState', () => {
        beforeEach(() => {
            expected = undefined;
        });

        it(`check if is correct`, () => {
            expected = {
                data: {
                    id: '',
                    name: '',
                    email: '',
                },
                error: {
                    status: '',
                    message: '',
                },
                loading: 'none',
            };

            expect(initialState).toEqual(expected);
        })
    });

    describe('Types', () => {
        it(`check if LOGIN_REQUEST is equal ${LOGIN_REQUEST}`, () => {
          expect(LOGIN_REQUEST).toEqual('@archaeologist/LOGIN_REQUEST');
        });

        it(`check if LOGIN_SUCCESS is equal ${LOGIN_SUCCESS}`, () => {
          expect(LOGIN_SUCCESS).toEqual('@archaeologist/LOGIN_SUCCESS');
        });

        it(`check if LOGIN_FAILURE is equal ${LOGIN_FAILURE}`, () => {
          expect(LOGIN_FAILURE).toEqual('@archaeologist/LOGIN_FAILURE');
        });

        it(`check if LOGIN_RESET is equal ${LOGIN_RESET}`, () => {
            expect(LOGIN_RESET).toEqual('@archaeologist/LOGIN_RESET');
          });
    });

    describe('Reducers', () => {
        beforeEach(() => {
            action = undefined;
            result = undefined;
            expected = undefined;
            INITIAL_STATE = { ...initialState };
        });

        it('should call reducer when `action.type` invalid then return INITIAL_STATE', () => {
            // should
            action = { type: 'NO_EXIST' };
            result = reducer(undefined, action);

            // when
            expected = INITIAL_STATE;

            // then
            expect(result).toEqual(expected);
        });

        it('should call reducer when `LOGIN_REQUEST` then returns the correct state', () => {
            // should
            action = { type: LOGIN_REQUEST };
            result = reducer(undefined, action);

            // when
            expected = {
              ...INITIAL_STATE,
              isLoading: loadingState.loading,
            };

            // then
            expect(result).toEqual(expected);
        });

        it('should call reducer when `LOGIN_SUCCESS` then returns the correct state', () => {
            // should
            action = {
                type: LOGIN_SUCCESS,
                payload: {
                    id: '1',
                    name: 'User test',
                    email: 'user@mail.com'
                },
            };

            result = reducer(undefined, action);

            // when
            expected = {
              ...INITIAL_STATE,
              data: {
                id: '1',
                name: 'User test',
                email: 'user@mail.com'
              },
              isLoading: loadingState.success,
            };

            // then
            expect(result).toEqual(expected);
        });

        it('should call reducer when `LOGIN_FAILURE` then returns the correct state', () => {
            // should
            action = {
                type: LOGIN_FAILURE,
                payload: {
                    status: '1',
                    message: 'Error message',
                },
            };

            result = reducer(undefined, action);

            // when
            expected = {
              ...INITIAL_STATE,
              error: {
                status: '1',
                message: 'Error message',
              },
              isLoading: loadingState.failure,
            };

            // then
            expect(result).toEqual(expected);
        });

        it('should call reducer when `LOGIN_RESET` then returns the correct state', () => {
            // should
            action = { type: LOGIN_RESET };

            result = reducer(undefined, action);

            // when
            expected = { ...INITIAL_STATE };

            // then
            expect(result).toEqual(expected);
        });
    });

    describe('Actions', () => {
        beforeEach(() => {
            api = undefined;
            result = undefined;
            expected = undefined;
            store.clearActions();
        });
    })
});
