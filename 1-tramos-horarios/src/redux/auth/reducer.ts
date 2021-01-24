import { types } from './actions';
import { Action, AuthState } from '../types';

const key = 'username';

const initialState: AuthState = {
    username: window.localStorage.getItem(key)
}

export default
function reducer(state: AuthState = initialState, action: Action) {
    switch (action.type) {
        case types.LOGIN: {
            window.localStorage.setItem(key, action.payload.username);
            return {
                ...state,
                username: action.payload.username
            }
        }
        case types.LOGOUT: {
            window.localStorage.removeItem(key);
            return {
                ...state,
                username: null
            }
        }
        default: {
            return state
        }
    }
}

