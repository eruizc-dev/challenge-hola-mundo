import { types } from './actions';
import { Action, AuthState } from '../types';

const initialState: AuthState = {
    username: window.localStorage.getItem('username')
}

export default
function reducer(state: AuthState = initialState, action: Action) {
    switch (action.type) {
        case types.LOGIN: {
            return {
                ...state,
                username: action.payload.username
            }
        }
        case types.LOGOUT: {
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

