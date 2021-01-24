import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './actions';
import useAuth from '../auth/useAuth';

function requestMotorcycle(username: string, hour: string, dispatch: any) {
    dispatch(Actions.requestMotorcycle(username, hour));
}

function cancelMotorcycle(username: string, hour: string, dispatch: any) {
    dispatch(Actions.cancelMotorcycle(username, hour));
}

export default function useOrders() {
    const dispatch = useDispatch();
    const orders = useSelector((s: any) => s.orders);
    const { username } = useAuth();

    return {
        requestMotorcycle: (hour: string) => requestMotorcycle(username, hour, dispatch),
        cancelMotorcycle: (hour: string) => cancelMotorcycle(username, hour, dispatch),
        isRequested: (hour: string) => !!(orders[username] && orders[username][hour]),
    }
}
