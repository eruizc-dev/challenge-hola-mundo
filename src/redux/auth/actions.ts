import { Action } from '../types';

export enum types {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT'
}

export function login(username: string): Action {
    return {
        type: types.LOGIN,
        payload: {
            username: username
        }
    };
}

export function logout(): Action {
    return {
        type: types.LOGOUT,
    };
}

