import { useSelector } from 'react-redux';
import * as Actions from './actions';
import useAuth from '../auth/useAuth';
import { store } from '../store';

function requestMotorcycle(hour: string) {
    const username = store.getState().auth.username;
    if (!username)
        throw new Error("Debe iniciar sesión");

    store.dispatch(Actions.requestMotorcycle(username, hour));
}

function cancelMotorcycle(hour: string) {
    const username = store.getState().auth.username;
    if (!username)
        throw new Error("Debe iniciar sesión");

    store.dispatch(Actions.cancelMotorcycle(username, hour));
}

export default function useOrders() {
    const orders = useSelector((s: any) => s.orders);
    const { username } = useAuth();

    return {
        requestMotorcycle: (hour: string) => requestMotorcycle(hour),
        cancelMotorcycle: (hour: string) => cancelMotorcycle(hour),
        isRequested: (hour: string) => !!(orders[username] && orders[username][hour]),
    }
}
