export type OrderAction = {
    type: string;
    payload: {
        username: string;
        hour: string;
    }
}

export enum types {
    REQUEST_MOTORCYCLE = 'REQUEST_MOTORCYCLE',
    CANCEL_MOTORCYCLE = 'CANCEL_MOTORCYCLE',
}

export function requestMotorcycle(username: string, hour: string): OrderAction {
    return {
        type: types.REQUEST_MOTORCYCLE,
        payload: {
            username,
            hour
        }
    };
}

export function cancelMotorcycle(username: string, hour: string): OrderAction {
    return {
        type: types.CANCEL_MOTORCYCLE,
        payload: {
            username,
            hour
        }
    };
}
