import { useSelector, useDispatch } from 'react-redux';
import * as Actions from './actions';

function login(username: string, dispatch: any) {
    dispatch(Actions.login(username));
}

function logout(dispatch: any) {
    dispatch(Actions.logout());
}

export default function useAuth() {
    const dispatch = useDispatch();
    const auth = useSelector((s: any) => s.auth);

    return {
        isLoggedIn: !!auth.username,
        username: auth.username,
        login: (username: string) => login(username, dispatch),
        logout: () => logout(dispatch)
    }
}
