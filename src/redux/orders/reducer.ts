import { OrderAction, types } from './actions';

const key = 'orders';

const unparsedState = window.localStorage.getItem(key) ?? "{}"; 
const initialState: any = JSON.parse(unparsedState);

export default
function reducer(state: any = initialState, action: OrderAction) {
    switch (action.type) {
        case types.REQUEST_MOTORCYCLE: {
            const { username, hour } = action.payload;
            const newState = {
                ...state,
                [username]: {
                    ...(state[username] || {}),
                    [hour]: true
                }
            };
            window.localStorage.setItem(key, JSON.stringify(newState));
            return newState;
        }
        case types.CANCEL_MOTORCYCLE: {
            const { username, hour } = action.payload;
            const newState = {
                ...state,
                [username]: {
                    ...(state[username]),
                    [hour]: undefined
                }
            };
            window.localStorage.setItem(key, JSON.stringify(newState));
            return newState;
        }
        default: {
            return state;
        }
    }
}

