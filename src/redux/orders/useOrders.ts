import { useState, useEffect } from 'react';
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

function requested(hour: string, orders: object) {
    const sum = Object.entries(orders)
        .reduce((pv: number, [, v]: any) => pv + (v[hour] ? 1 : 0), 0);
    return sum;
}

function calcAvailable(hour: string, availability: object, orders: object) {
    const total = availability[hour];
    const occupied = requested(hour, orders);
    return total - occupied;
}

export default function useOrders(hour: string) {
    const orders = useSelector((s: any) => s.orders);
    const availability = useSelector((s: any) => s.availability);
    const { username } = useAuth();
    const [available, setAvailable] = useState(0);

    useEffect(() => {
        const sum = calcAvailable(hour, availability, orders);
        setAvailable(sum);
    }, [hour, availability, orders]);

    return {
        requestMotorcycle: (hour: string) => requestMotorcycle(hour),
        cancelMotorcycle: (hour: string) => cancelMotorcycle(hour),
        isRequested: (hour: string) => !!(orders[username] && orders[username][hour]),
        requested: (hour: string) => requested(hour, orders),
        available: available
    }
}
