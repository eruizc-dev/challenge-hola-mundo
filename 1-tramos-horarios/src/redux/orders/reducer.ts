import { OrderAction, types } from './actions';

const initialState: any = {};

export default
function reducer(state: any = initialState, action: OrderAction) {
    switch (action.type) {
        case types.REQUEST_MOTORCYCLE: {
            const { username, hour } = action.payload;
            return {
                ...state,
                [username]: {
                    ...(state[username] || {}),
                    [hour]: true
                }
            }
        }
        case types.CANCEL_MOTORCYCLE: {
            const { username, hour } = action.payload;
            return {
                ...state,
                [username]: {
                    ...(state[username]),
                    [hour]: undefined
                }
            }
        }
        default: {
            return state;
        }
    }
}

